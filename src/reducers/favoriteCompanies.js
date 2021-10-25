import {
  ADD_COMPANY_TO_FAVORITES,
  REMOVE_COMPANY_FROM_FAVORITES,
} from "../actions";
import { initialState } from "../store";

export const favoriteReducer = (state = initialState.companies, action) => {
  switch (action.type) {
    case ADD_COMPANY_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.includes(action.payload)
          ? [...state.favorites]
          : [...state.favorites, action.payload],

      };
    case REMOVE_COMPANY_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(
          (company, index) => index !== action.payload
        ),
      };
    default:
      return state;
  }
};
