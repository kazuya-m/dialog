/* eslint-disable @typescript-eslint/no-unsafe-return */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getPageAmount } from 'src/lib/calculator/page-amount'

export const Pagination = ({ path, totalCount }) => {
  const router = useRouter()
  const pathArray = router.asPath.split('/')
  const currentPageNumber = pathArray[pathArray.length - 1]
  const pageAmount = getPageAmount(1, totalCount)
  return (
    <ul className="flex justify-center">
      {pageAmount.map((number) => {
        return (
          <Link href={`/${path}/${number}`}>
            {currentPageNumber === number.toString() ? (
              <li key={number} className="mx-1 mb-3 px-2 border border-red-500 text-white bg-red-500 rounded-md">
                {number}
              </li>
            ) : (
              <li key={number} className="mx-1 mb-3 px-2 border border-red-500 text-red-500 rounded-md">
                {number}
              </li>
            )}
          </Link>
        )
      })}
    </ul>
  )
}
