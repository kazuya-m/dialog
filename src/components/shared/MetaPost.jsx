import { CalendarIcon } from '@heroicons/react/outline'
import { Avatar } from 'src/components/shared/Avatar'
import { Category } from 'src/components/shared/Category'
import { DateDistanceFormatter } from 'src/components/utils/date/DateDistanceFormatter'

export const MetaPost = ({ category, author, date }) => {
  return (
    <div>
      <Category category={category} />
      <div className="flex items-center justify-between my-4 text-sm">
        <Avatar name={author.name} picture={author.icon.url} />
        <div className="flex items-center text-black-300">
          <CalendarIcon className="h-4 w-4 mr-0.5 inline" />
          <DateDistanceFormatter dateString={date} />
        </div>
      </div>
    </div>
  )
}
