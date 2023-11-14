import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { UserContextProvider } from './context/UserContext';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <Header />
        <Outlet />
      </UserContextProvider>
    </QueryClientProvider>
  )
}
