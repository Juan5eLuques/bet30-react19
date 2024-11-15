import useSWR from 'swr';
import { TransactionsData } from '../types/Transactions';

const fetcher = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch transactions');
  return response.json();
};

export function useTransactions(url: string) {
  const { data, error, isLoading, mutate } = useSWR<TransactionsData>(url, fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
}