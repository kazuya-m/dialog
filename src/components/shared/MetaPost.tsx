import { CalendarIcon } from '@heroicons/react/outline'
import type { VFC } from 'react'
import { Avatar } from 'src/components/shared/Avatar'
import { CategoryInfo } from 'src/components/shared/CategoryInfo'
import { DateDistanceFormatter } from 'src/components/utils/date/DateDistanceFormatter'
import { Author, Category } from 'src/models/posts'

type Props = {
  category: Category
  author: Author
  date: string
}

export const MetaPost: VFC<Props> = ({ category, author, date }) => {
  return (
    <div>
      <CategoryInfo id={category.id} name={category.name} />
      <div className="flex items-center justify-between my-4 text-sm">
        <Avatar name={author.name} picture={author.icon.url} />
        <div className="flex items-center text-black-300">
          <CalendarIcon className="h-4 w-4 mr-0.5 inline" />
          <DateDistanceFormatter utcDateString={date} />
        </div>
      </div>
    </div>
  )
}
