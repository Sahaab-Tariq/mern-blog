import { configureStore, combineReducers } from '@reduxjs/toolkit';
import userReducer from './user/userSlice'; // Changed 'useReducer' to 'userReducer'
import { persistReducer } from 'redux-persist'; // Changed 'persisterReducer' to 'persistReducer'
import storage from 'redux-persist/lib/storage'; // Added import for storage
import persistStore from 'redux-persist/es/persistStore';

const rootReducer = combineReducers({
  user: userReducer, // Changed 'useReducer' to 'userReducer'
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistedReducer = persistReducer(persistConfig, rootReducer); // Changed 'persisterReducer' to 'persistReducer'

export const store = configureStore({
  reducer: persistedReducer, // Changed 'reducer: persistReducer' to 'reducer: persistedReducer'
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    { serializableCheck: false }
  )
});

export const persistor = persistStore(store);
