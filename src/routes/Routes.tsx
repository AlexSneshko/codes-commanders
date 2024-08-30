import { createBrowserRouter, Navigate } from 'react-router-dom'

import App from '../App'
import { PATH } from '../constants/path'
import { HomePage } from '../pages/HomePage/HomePage'
import { SignInPage } from '../pages/SignInPage/SignInPage'
import { PostPage } from '../pages/PostPage/PostPage'
import { ProtectedRoute } from '../components/ProtectedRoute/ProtectedRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Navigate to={PATH.HOME} /> },
      { path: PATH.HOME, element: <HomePage /> },
      { path: PATH.SIGN_IN, element: (
        <ProtectedRoute>
          <SignInPage />
        </ProtectedRoute>
      ) },
      { path: PATH.POST, element: <PostPage /> },
    ],
  },
])