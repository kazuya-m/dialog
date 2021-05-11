import { formatDistance, parseISO, subDays } from 'date-fns'

export const DateFormatter = ({ dateString }) => {
  const date = parseISO(dateString)
  // return <time dateTime={dateString}>{format(date, 'yyyy.LL.dd')}</time>
  return formatDistance(new Date(), date, { addSuffix: true })
}
