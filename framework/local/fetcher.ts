import { Fetcher } from '@commerce/utils/types'
import fetch from 'node-fetch'
import { json } from 'stream/consumers'

export const fetcher: Fetcher = async () => {
  console.log('FETCHER')
  const res = await fetch('https://stagewrapper.ocstaging.net/bitaqatywrapper/new-cards', {
    method: 'POST',
    headers: {
      contentType: 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ 
      channel: "WEB",
      appName: "Bitaqaty",
      locale: "en",
      storeCurrencyId: 1,
      bitaqatyStore: 1
    })
  })
  if (res.ok) {
    const data = await res.json()
    return data
  }
  throw res
}
