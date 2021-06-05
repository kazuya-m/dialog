import type { VFC } from 'react'
import postStyles from 'src/styles/post-body.module.css'

type Props = {
  content: string
}

export const PostBody: VFC<Props> = ({ content }) => {
  return (
    <div>
      {/* eslint-disable-next-line react/no-danger */}
      <div className={`${postStyles.post} post-body`} dangerouslySetInnerHTML={{ __html: content }} />
      <style jsx global>{`
        .post-body a {
          color: #e7002b;
          opacity: 0.8;
        }
      `}</style>
    </div>
  )
}
