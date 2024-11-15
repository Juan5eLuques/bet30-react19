export interface TransactionsData {
    transactions: Transaction[]
    nextPage: string
    previousPage: any
  }
  
  export interface Transaction {
    id: number
    amount: string
    balance_before: string
    balance_after: string
    transaction_type: number
    status: number
    user_id: number
    initiator_id: number
    notes?: string
    created_at: string
    updated_at: string
  }
  