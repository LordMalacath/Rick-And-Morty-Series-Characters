import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import charactersReducer from "redux/slices/characters";
import appReducer from "redux/slices/app";
import { rickAndMortyApi } from "api/RickAndMorty";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['app'],
};

const rootReducer = combineReducers({
  characters: charactersReducer,
  app: appReducer,
  [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rickAndMortyApi.middleware),
})

export const persistor = persistStore(store);