/* eslint-disable @typescript-eslint/no-unsafe-return */
import Link from 'next/link'
import Router from 'next/router'
import { PER_PAGE } from 'src/constants'

export const Pagination = ({ totalCount }) => {
  const range = (start, end) => {
    return [...Array(end - start + 1)].map((_, i) => {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      return start + i
    })
  }

  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number) => {
        return (
          <li key={number}>
            <Link href={`/page/${number}`}>
              <a>{number}</a>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
