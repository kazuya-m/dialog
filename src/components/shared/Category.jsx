import { FolderIcon, TagIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const Category = ({ category }) => {
  return (
    <Link as={`/categories/${category.id}`} href="/categories/[categoryId]">
      <a className="">
        <div className="flex items-center pl-1 my-1">
          <FolderIcon className="w-4 h-4 mr-1" />
          <button className="text-xs" type="button">
            {category.name}
          </button>
        </div>
      </a>
    </Link>
  )
}
