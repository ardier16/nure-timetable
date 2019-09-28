<template>
  <div class="social-networks">
    <a
      v-for="[name, link] in Object.entries(socialLinks)"
      :key="name"
      :href="link.url"
      target="_blank"
      class="social-networks__link"
      :class="`social-networks__link--${name}`"
    >
      <i
        class="mdi social-networks__link-icon"
        :class="`mdi-${link.icon}`"
      />
    </a>
  </div>
</template>

<script>
import { socialLinks } from '@constants/social-links'

export default {
  name: 'social-networks',
  data: () => ({
    socialLinks,
  }),
}
</script>

<style lang="scss" scoped>
$color-github: #24292e;
$color-instagram: #c32aa3;
$color-twitter: #1da1f2;
$color-facebook: #1877f2;
$color-telegram: #0088cc;

.social-networks {
  display: flex;
  align-items: center;

  @include respond-to(small) {
    justify-content: center;
  }

  &__link {
    color: $color-text-inverse-dark;
    border-radius: 50%;
    padding: 0.4rem;
    width: 3.2rem;
    height: 3.2rem;
    font-size: 2.4rem;
    transition: all 200ms ease-in;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: $color-secondary;
    }

    &--github:hover { color: $color-github; }
    &--instagram:hover { color: $color-instagram; }
    &--twitter:hover { color: $color-twitter; }
    &--facebook:hover { color: $color-facebook; }
    &--telegram:hover { color: $color-telegram; }

    &:not(:first-child) {
      margin-left: 1.2rem;
    }

    @include respond-to(small) {
      font-size: 2.8rem;

      &:not(:first-child) {
        margin-left: 1.6rem;
      }
    }
  }
}
</style>
