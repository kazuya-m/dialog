import { FolderIcon, TagIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const Category = ({ category }) => {
  return (
    <Link as={`/${category.id}/1`} href="/[categoryId]/[number]">
      <div className="my-1 text-black-400">
        <a className="">
          <div className="flex items-center pl-1 my-1">
            <FolderIcon className="w-4 h-4 mr-0.5" />
            <button className="text-xs" type="button">
              {category.name}
            </button>
          </div>
        </a>
      </div>
    </Link>
  )
}
