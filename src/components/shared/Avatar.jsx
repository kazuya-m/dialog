import Image from 'next/image'

export const Avatar = ({ name, picture }) => {
  return (
    <div className="flex items-center justify-start">
      <Image src={picture} width={32} height={32} alt={name} />
      <div className="text-sm ml-2">{name}</div>
    </div>
  )
}
