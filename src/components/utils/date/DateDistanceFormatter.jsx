/* eslint-disable import/no-duplicates */
import { format, formatDistanceToNow } from 'date-fns'
import ja from 'date-fns/locale/ja'
import { utcToZonedTime } from 'date-fns-tz'

export const DateDistanceFormatter = ({ dateString }) => {
  const timezone = 'Asia/Tokyo'
  const oneWeek = /^[7-9]{1}日|^1[0-3]{1}日/
  const twoWeeks = /^1[2-9]{1}日|^20日/
  const threeWeeks = /^2[1-7]{1}日/
  const lessThanOneWeek = /^\d{1,2}分|^[1-6]{1}日/
  const lessThanOneDay = /^約\d{1,2}時間/
  const lessThanMinute = /^1分未満/

  // UTCからJSTに変換
  const JSTDate = utcToZonedTime(dateString, timezone)
  // 現在時刻との差分に変換
  const distanceToNow = formatDistanceToNow(JSTDate, { locale: ja })

  // 1分未満
  if (lessThanMinute.test(distanceToNow)) return `たった今`
  // 1日未満：約x時間前 → x時間前
  if (lessThanOneDay.test(distanceToNow)) {
    const withoutAbout = distanceToNow.split('約')
    const timeString = `${withoutAbout[1]}前`
    return timeString
  }
  // 1週間未満 : x分前,x日前
  if (lessThanOneWeek.test(distanceToNow)) return `${distanceToNow}前`
  // 2週間未満
  if (oneWeek.test(distanceToNow)) return `1週間前`
  // 3週間未満
  if (twoWeeks.test(distanceToNow)) return `2週間前`
  // 4週間未満
  if (threeWeeks.test(distanceToNow)) return `3週間前`

  // 4週間以上はyyyy.MM.dd形式
  return format(JSTDate, 'yyyy.MM.dd')
}
