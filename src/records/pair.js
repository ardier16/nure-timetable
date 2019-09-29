import _get from 'lodash/get'

import { pairTypes } from '@constants/pair-types'
import { pairStartTimes } from '@constants/pair-start-times'

export class Pair {
  constructor (record) {
    this.auditory = record.auditory

    this.startDate = new Date(record.startDate)
    this.endDate = new Date(record.endDate)
    this.type = pairTypes[record.pairType]

    this.subject = {
      name: _get(record, 'subject.name'),
      shortName: _get(record, 'subject.shortName'),
    }

    this.groups = record.groups.map(g => g.name)
    this.teacher = {
      name: _get(record, 'teachers[0].name', ''),
      shortName: _get(record, 'teachers[0].shortName', ''),
    }
  }

  get isLast () {
    return this.startDate.getTime() < Date.now()
  }

  get number () {
    const hours = this.startDate.getHours()
    const minutes = this.startDate.getMinutes()
    const time = [hours, minutes].join(':')

    return pairStartTimes[time]
  }
}
