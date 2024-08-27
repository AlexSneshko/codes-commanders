import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Post } from '../../types/post'

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/'
    }),
    endpoints: build => ({
        getPosts: build.query<Post[], void>({
            query: () => 'posts'
        }),
        getPostById: build.query<Post, number>({
            query: (id) => `posts/${id}`
        })
    })
})