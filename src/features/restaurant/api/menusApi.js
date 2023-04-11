import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const menusApi=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.punkapi.com/v2/'}),
    endpoints:(builder)=> ({
        getMenus:builder.query({
            query:(qname) => ({                   //pageno=0
                url: `/beers${qname !=='' ? '/?beer_name='+qname : '' }`    // `/beers/?page=${pageno}&per_page=10`
            }),
        }),
        // filterPost:builder.query({
        //     query:(name)=> ({
        //         url:`/beers/?beer_name=${name}`
        //     })
        // })
    }),
})


export const {
    useGetMenusQuery,
    useFilterPostQuery
}=menusApi