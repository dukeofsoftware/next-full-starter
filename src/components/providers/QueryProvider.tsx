" use client"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

interface QueryProviderProps {
    children: React.ReactNode
}

const queryClient = new QueryClient()

const QueryProvider:React.FC<QueryProviderProps> = ({children}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>

    )
}

export default QueryProvider