import { FolderIcon, TagIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import type { VFC } from 'react'
import { Category } from 'src/models/posts'

type Props = {
  id: string
  name: string
}

export const CategoryInfo: VFC<Props> = ({ id, name }) => {
  return (
    <Link as={`/${id}/1`} href="/[categoryId]/[number]">
      <a className="flex items-center pl-1.5 my-4 text-black-400">
        <FolderIcon className="w-4 h-4 mr-0.5" />
        <p className="text-xs">{name}</p>
      </a>
    </Link>
  )
}
