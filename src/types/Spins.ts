export interface SpinsCollection {
    spins: Spin[]
    nextPage: any
    previousPage: any
  }
  
  export interface Spin {
    id: number
    transaction_id: string
    name: string
    code: string
    amount: string
    balance_before: string
    balance_after: string
    user_id: number
    outcome: number
    round_id: string
    device: any
    created_at: string
  }
  