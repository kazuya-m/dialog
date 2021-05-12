/* eslint-disable @typescript-eslint/no-unsafe-return */
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getPageAmount } from 'src/lib/calculator/page-amount'

export const Pagination = ({ path, totalCount }) => {
  const router = useRouter()
  const pathArray = router.asPath.split('/')
  const currentPageNumber = pathArray[pathArray.length - 1]
  const isIndex = router.asPath === '/'

  const pageAmount = getPageAmount(1, totalCount)
  return (
    <ul className="flex justify-center mb-4" key={currentPageNumber}>
      {pageAmount.map((number) => {
        return (
          <Link href={`/${path}/${number}`}>
            {currentPageNumber === number.toString() || (isIndex && number === 1) ? (
              <li
                key={number}
                className="mx-1 mb-3 px-2 border border-red-500 text-white bg-red-500 rounded-md cursor-pointer"
              >
                {number}
              </li>
            ) : (
              <li
                key={number}
                className="mx-1 mb-3 px-2 border border-red-100 border-opacity-25 text-red-500 bg-red-100 bg-opacity-25 rounded-md cursor-pointer"
              >
                {number}
              </li>
            )}
          </Link>
        )
      })}
    </ul>
  )
}
