export interface GamesCollection {
  current_page: number
  data: Games[]
  first_page_url: string
  from: number
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: any
  to: number
}

export interface Games {
  id: number
  published: number
  name: string
  code: string
  launch_code: string
  thumbnail: string
  game_type: string
  platforms: Platforms
  has_demo: number
  provider_id: number
  sort_order: number
  created_at: string
  updated_at: string
  provider: Provider
}

export interface Platforms {
  mobile: boolean
  desktop: boolean
}

export interface Provider {
  id: number
  published: number
  name: string
  code: string
  aggregator_id: number
  game_count: number
  sort_order: number
  created_at: string
  updated_at: string
}
