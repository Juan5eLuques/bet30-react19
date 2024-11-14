export type Providers = Provider []

export interface Provider {
    id: number
    name: string
    url: string
    type: string
    href: string
  }
  
  export interface ProviderComponent {
    code: string,
    name: string,
    gameCode: string,
    sortOrder: string
    context? : string
}

export type ListProviders = ProviderComponent[]
