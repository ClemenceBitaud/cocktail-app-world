import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    favorites:[]
}

const slice = createSlice({
    name: 'cocktails',
    initialState,
    reducers: {
        addFavorite(state, action){
            state.favorites.push(action.payload.cocktail);
        },
        removeFavorite(state, action){
            state.favorites = state.favorites.filter(cocktail => cocktail.idDrink !== action.payload.cocktail.idDrink);
        }
    }
});

export const favoriteCocktails = state => state.cocktails.favorites;
export const {addFavorite, removeFavorite} = slice.actions;
export default slice.reducer