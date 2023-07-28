import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = 'https://weatherapi-com.p.rapidapi.com/'

const weatherHeader = {
    'X-RapidAPI-Key': '8622211b27msh7b43a8202d2074dp190ea6jsnfc8cc368f4a8',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
}

const requestWeather = (url) => ({url, headers: weatherHeader})

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getForecastWeather: builder.query({
            query: (location) => requestWeather(`/forecast.json?q=${location}&days=3`)
        }),
        getSearchWeather: builder.query({
            query: (search) => requestWeather(`/search.json?q=${search}`)
        }),

    })
})

export const { useGetForecastWeatherQuery, useGetSearchWeatherQuery } = weatherApi;
