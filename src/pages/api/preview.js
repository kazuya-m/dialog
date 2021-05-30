/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import fetch from 'node-fetch'
import { client } from 'src/lib/microcms/client'

export default async (req, res) => {
  if (!req.query.id) {
    return res.status(404).end()
  }

  const content = await client.get({
    endpoint: 'posts',
    contentId: req.query.id,
    draftKey: req.query.draftKey,
  })

  // const content = await fetch(
  //   `https://${process.env.MICROCMS_DOMAIN}.microcms.io/api/v1/posts/${req.query.id}?fields=id&draftKey=${req.query.draftKey}`,
  //   { headers: { 'X-API-KEY': process.env.API_KEY || '' } },
  // )
  //   .then((result) => {
  //     return result.json()
  //   })
  //   .catch((error) => {
  //     return null
  //   })

  if (!content) {
    return res.status(401).json({ message: 'Invalid id' })
  }

  res.setPreviewData({
    id: content.id,
    draftKey: req.query.draftKey,
  })
  res.writeHead(307, { Location: `/${content.id}` })
  res.end('Preview mode enabled')
}
