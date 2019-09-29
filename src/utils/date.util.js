export class DateUtil {
  static getDatesArray (startDate, endDate) {
    let dates = []
    let currentDate = startDate

    while (currentDate <= endDate) {
      dates.push(currentDate)
      currentDate = this.addDays(currentDate, 1)
    }

    return dates
  }

  static addDays (date, days) {
    let result = new Date(date.getTime())
    result.setDate(date.getDate() + days)

    return result
  }

  static getStartTimestamp (date) {
    const resultDate = new Date(date)
    resultDate.setHours(0, 0, 0, 0)

    return resultDate.getTime()
  }
}
