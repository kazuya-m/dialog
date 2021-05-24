export const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
export const UA_ID = process.env.NEXT_PUBLIC_GOOGLE_UNIVERSAL_ANALYTICS_ID

// IDが取得できない場合を想定する
export const existsGaId = GA_ID !== ''
export const existsUaId = UA_ID !== ''

// PVを測定する
export const pageView = (path) => {
  window.gtag('config', GA_ID, {
    page_path: path,
  })
  window.gtag('config', UA_ID, {
    page_path: path,
  })
}

// GAイベントを発火させる
export const event = ({ action, category, label, value = '' }) => {
  if (!existsGaId) {
    return
  }

  window.gtag('event', action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  })
}
