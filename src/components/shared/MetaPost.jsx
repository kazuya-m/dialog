import { CalendarIcon } from '@heroicons/react/outline'
import { Avatar } from 'src/components/shared/Avatar'
import { Category } from 'src/components/shared/Category'
import { DateFormatter } from 'src/components/utils/date/Date-formatter'

export const MetaPost = ({ category, author, date }) => {
  return (
    <>
      <div className="my-1">
        <Category category={category} />
      </div>
      <div className="flex justify-between items-center my-2 text-sm">
        <div>
          <Avatar name={author.name} picture={author.icon.url} />
        </div>
        <div className="text-black-300 flex items-center">
          <CalendarIcon className="h-4 w-4 mr-1 inline" />
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
