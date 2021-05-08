import { CalendarIcon } from '@heroicons/react/outline'
import { Avatar } from 'src/components/shared/Avatar'
import { DateFormatter } from 'src/components/utils/date/Date-formatter'

export const MetaPost = ({ author, date }) => {
  return (
    <div className="flex justify-between items-center my-2 text-sm">
      <div>
        <Avatar name={author.name} picture={author.icon.url} />
      </div>
      <div className="text-black-300">
        <CalendarIcon className="h-4 w-4 mr-1 inline" />
        <DateFormatter dateString={date} />
      </div>
    </div>
  )
}
