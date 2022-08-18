import TimeAgo from 'javascript-time-ago'
import pt from 'javascript-time-ago/locale/pt'

TimeAgo.addLocale(pt)

const timeAgoInstance = new TimeAgo('pt')

export function formatterTimeAgo(date: string | Date): string {
  return timeAgoInstance.format(new Date(date))
}
