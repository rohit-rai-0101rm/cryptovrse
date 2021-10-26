import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '62cfaf7ff0mshc77859d5b358fb6p14350cjsn2d97f25b3c32'
  };
  const baseUrl='https://coinranking1.p.rapidapi.com';
  const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

  export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        })
    })
})
export const{
    useGetCryptosQuery,
}=cryptoApi;
