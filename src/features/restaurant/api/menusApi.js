import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const menusApi=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.punkapi.com/v2/'}),
    endpoints:(builder)=> ({
        getMenus:builder.query({
            query:(pNo) => ({
                url: `/beers`
            }),
        }),
    }),
})

export const {
    useGetMenusQuery
}=menusApi