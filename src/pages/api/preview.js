import { client } from 'src/lib/microcms/client'

export default async (req, res) => {
  if (!req.query.id) {
    return res.status(404).end()
  }
  const content = await client.get({
    endpoint: 'posts',
    contentId: req.query.id,
    queries: { draftKey: req.query.draftKey },
  })

  if (!content) {
    return res.status(401).json({ message: 'Invalid id' })
  }

  res.setPreviewData({
    id: content.id,
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/draft/${content.id}` })
  res.end('Preview mode enabled')
}
