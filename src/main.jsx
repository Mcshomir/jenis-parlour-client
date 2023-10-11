import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider.jsx'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// import { getTodos, postTodo } from '../my-api'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <App />
      </AuthProvider>

    </QueryClientProvider>


  </React.StrictMode>,


)
