import { configureStore, combineReducers } from '@reduxjs/toolkit'
import  useReducer  from './user/userSlice';
import {persisterReducer} from 'redux-persist';
import { version } from 'mongoose';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  user:useReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persisterReducer = persisterReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
     reducer: persistReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware(
      {serializableCheck: false}
     )   
  },
})

export const persistor = persistStore(store);