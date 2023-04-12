import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const menusApi=createApi({
    reducerPath:'api',
    baseQuery:fetchBaseQuery({baseUrl:'https://api.punkapi.com/v2/'}),
    endpoints:(builder)=> ({
        getMenus:builder.query({
            query:(args) => {                   
                const {qname, page, perpage1} = args
               return { url: `/beers?per_page=${perpage1}&page=${Number(page)}${qname ? '&beer_name='+qname : '' }`    } //perpageno<=0?10:perpageno
            },
        }),
    }),
})

export const {
    useGetMenusQuery,
}=menusApi