import { FolderIcon, TagIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const Category = ({ category }) => {
  return (
    <Link as={`/${category.id}/1`} href="/[categoryId]/[number]">
      <a className="text-black-400">
        <div className="flex items-center pl-1 my-4">
          <FolderIcon className="w-4 h-4 mr-0.5" />
          <button className="text-xs" type="button">
            {category.name}
          </button>
        </div>
      </a>
    </Link>
  )
}
