import postStyles from 'src/styles/post-body.module.css'

export const PostBody = ({ content }) => {
  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <div className={`${postStyles.post} post-body`} dangerouslySetInnerHTML={{ __html: content }} />
      <style jsx global>{`
        .post-body a {
          color: #e7002b;
          opacity: 0.8;
        }
      `}</style>
    </>
  )
}
