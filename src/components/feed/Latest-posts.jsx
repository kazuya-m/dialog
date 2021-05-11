import { PostPreview } from './Post-preview'

export const LatestPosts = ({ posts }) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-10 md:gap-y-32 mb-10">
        {posts.map((post) => {
          return (
            <PostPreview
              key={post.id}
              title={post.title}
              thumbnail={post.thumbnail}
              date={post.createdAt}
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
