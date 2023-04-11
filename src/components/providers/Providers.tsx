"use client"
import { Analytics } from "./Analytics"
import QueryProvider from "./QueryProvider"
import ToastProvider from "./ToastProvider"

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <>
      <ToastProvider />
      <Analytics />
      <QueryProvider>
      {children}

      </QueryProvider>
    </>
  )
}

export default Providers
