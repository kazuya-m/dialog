import { PostPreview } from 'src/components/feed/PostPreview'

export const PostsFeed = ({ posts }) => {
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
              // excerpt={post.excerpt}
            />
          )
        })}
      </div>
    </section>
  )
}
