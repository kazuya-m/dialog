import markdownStyles from 'src/styles/markdown-styles.module.css'

export const PostBody = ({ content }) => {
  return (
    <div>
      {/* eslint-disable-next-line react/no-danger */}
      <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
