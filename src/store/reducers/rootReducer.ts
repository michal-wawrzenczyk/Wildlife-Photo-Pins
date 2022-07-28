import {
  Action,
  combineReducers,
  ThunkAction,
  ThunkDispatch
} from '@reduxjs/toolkit';

import gallerySliceReducer from '../slices/gallery';
import { RootState } from '../slices/types';

// here reducers functions will be imported from "slices" folder and then implemented to root reducer of store.
const rootReducer = combineReducers({
  galleryState: gallerySliceReducer
  // here another reducers
});

export type AppThunkDispatch<S = RootState, E = null> = ThunkDispatch<
  S,
  E,
  Action<string>
>;

export type AppThunkAction<R = void, S = RootState, E = null> = ThunkAction<
  Promise<R>, // Return type
  S, // State
  E, // Extra argument
  Action<string> // Action type
>;

export default rootReducer;
