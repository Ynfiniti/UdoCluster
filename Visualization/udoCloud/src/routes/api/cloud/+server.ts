import type {RequestEvent} from '@sveltejs/kit'
import {json} from '@sveltejs/kit'
import {createDBCloud} from "$lib/server/fileUtils.js"

// /api/newsletter GET

export async function GET(event: RequestEvent) {
  const dateMax: string = event.url.searchParams.get("dateMax") || ""
  const dateMin: string = event.url.searchParams.get("dateMin") || ""
  const forTopic: boolean = event.url.searchParams.get("forTopic") === "true"

  console.log("for Cloud: ", dateMax, dateMin, forTopic)

  const ret = createDBCloud({dateMax, dateMin, forTopic})

  return json(ret)
}