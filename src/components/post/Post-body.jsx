import markdownStyles from '../../styles/markdown-styles.module.css'

export const PostBody = ({ content }) => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* eslint-disable-next-line react/no-danger */}
      <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
