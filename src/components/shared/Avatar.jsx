export const Avatar = ({ name, picture }) => {
  return (
    <div className="flex items-center">
      <img src={picture} className="w-8 h-8 rounded-full mr-4" alt={name} />
      <div className="text-base">{name}</div>
    </div>
  )
}
