import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import _ from 'lodash';
import { setCharacter, setCharacters } from 'redux/slices/characters';


export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://rickandmortyapi.com/api/character/" }),
  endpoints: (builder) => ({
    getCharacterByName: builder.query({
      query: (name) => `?name=${name}`,
      async onQueryStarted(name, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        const sortedData = _.sortBy(data.results, ['name']);
        if (name) {
          dispatch(setCharacter(sortedData[0]));
        }
        dispatch(setCharacters(sortedData));
      }
    }),
    getCharacterById: builder.query({
      query: (id) => `${id}`,
      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        dispatch(setCharacter(data))
      }
    })
  }),
});

export const { useGetCharacterByNameQuery, useGetCharacterByIdQuery } = rickAndMortyApi;