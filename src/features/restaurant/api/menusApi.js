import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.punkapi.com/v2/'}),
    endpoints:(builder)=> ({
        getMenus:builder.query({
            query:(pNo) => ({
                url: `/beers/page=<<page_number>>&per_page=${pNo}`
            }),
        }),
    }),
})

export const {
    useGetMenusQuery
}=apiSlice