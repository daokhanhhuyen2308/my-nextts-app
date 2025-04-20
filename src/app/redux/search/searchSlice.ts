import { MovieListResponse } from "@/app/types/movieDataTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSearchMovies } from "../movie/movieThunk";

type SearchQueryState = {
    query: string;
    movieResults: MovieListResponse | null;
}

const initialState: SearchQueryState = {
    query: "",
    movieResults: {page: 0, results: [], total_pages: 0, total_results: 0},
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.query = action.payload;
        },
        clearSearchQuery: (state) => {
            state.query = "";
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchSearchMovies.fulfilled, (state, action: PayloadAction<MovieListResponse>) => {
            state.movieResults = action.payload;
        });
    },
});


export const { setSearchQuery, clearSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;


