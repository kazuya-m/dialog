import type { VFC } from 'react'
import { PostPreviewMini } from 'src/components/feed/PostPreviewMini'
import { RelatedArticles } from 'src/models/posts'

type Props = {
  posts: Array<RelatedArticles>
}
export const PostFeedMini: VFC<Props> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => {
        return (
          <PostPreviewMini
            key={post.id}
            id={post.id}
            title={post.title}
            thumbnail={post.thumbnail ?? post.category.thumbnail}
          />
        )
      })}
    </div>
  )
}
