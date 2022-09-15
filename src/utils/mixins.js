import { formatRelative, addDays } from 'date-fns'

export const fromNowFilter = {
  filters: {
    fromNow(dateTime) {
      return dateTime ? formatRelative(addDays(new Date(dateTime), 0), new Date()) : '-'
    }
  }
}