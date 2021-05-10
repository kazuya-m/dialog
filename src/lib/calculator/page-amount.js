/* eslint-disable @typescript-eslint/no-unsafe-return */
import { PER_PAGE } from 'src/constants'

export const getPageAmount = (start, totalCount) => {
  const end = Math.ceil(totalCount / PER_PAGE)
  const pageAmount = [...Array(end - start + 1)].map((_, i) => {
    return start + i
  })
  return pageAmount
}
