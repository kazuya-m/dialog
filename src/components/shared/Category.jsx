import { FolderIcon, TagIcon } from '@heroicons/react/outline'
import Link from 'next/link'

export const Category = ({ category }) => {
  return (
    <Link as={`/${category.id}/1`} href="/[categoryId]/[number]">
      <a className="flex items-center pl-1.5 my-4 text-black-400">
        <FolderIcon className="w-4 h-4 mr-0.5" />
        <p className="text-xs">{category.name}</p>
      </a>
    </Link>
  )
}
