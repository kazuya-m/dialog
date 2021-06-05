import type { VFC } from 'react'
import { PostPreview } from 'src/components/feed/PostPreview'
import type { Posts } from 'src/models/posts'

type Props = {
  posts: Array<Posts>
}

export const PostsFeed: VFC<Props> = ({ posts }) => {
  return (
    <section>
      <div className="grid grid-cols-1 mb-10 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-10 md:gap-y-32">
        {posts.map((post) => {
          return (
            <PostPreview
              key={post.id}
              title={post.title}
              thumbnail={post.thumbnail ?? post.category.thumbnail}
              date={post.publishedAt}
              author={post.author}
              id={post.id}
              category={post.category}
            />
          )
        })}
      </div>
    </section>
  )
}
