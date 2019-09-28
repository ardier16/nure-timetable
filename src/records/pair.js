import _get from 'lodash/get'

export class Pair {
  constructor (record) {
    this.auditory = record.auditory

    this.startDate = new Date(record.startDate)
    this.endDate = new Date(record.endDate)
    this.type = record.pairType

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
}
