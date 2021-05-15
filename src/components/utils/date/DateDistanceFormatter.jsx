/* eslint-disable import/no-duplicates */
import { format, formatDistanceToNow } from 'date-fns'
import ja from 'date-fns/locale/ja'
import { utcToZonedTime } from 'date-fns-tz'

export const DateDistanceFormatter = ({ dateString }) => {
  const tz = 'Asia/Tokyo'
  const jst = utcToZonedTime(dateString, tz)
  const distanceToNow = formatDistanceToNow(jst, { locale: ja })
  console.log(distanceToNow)

  const oneWeek = /^[7-9]{1}日|^1[0-3]{1}日/
  const twoWeek = /^1[2-9]{1}日|^20日/
  const threeWeek = /^2[1-7]{1}日/
  const lessThanOneWeek = /^\d{1~2}分|^\d{1~2}時間|^[1-6]{1}日/
  const lessThanMinute = /^1分未満/

  if (lessThanMinute.test(distanceToNow)) return `たった今`

  if (lessThanOneWeek.test(distanceToNow)) return `${distanceToNow}前`

  if (oneWeek.test(distanceToNow)) return `1週間前`

  if (twoWeek.test(distanceToNow)) return `2週間前`

  if (threeWeek.test(distanceToNow)) return `3週間前`

  return format(jst, 'yyyy.MM.dd')
}
