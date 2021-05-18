import postStyles from 'src/styles/post-body.module.css'

export const PostBody = ({ content }) => {
  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <div className={postStyles.post} dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}
