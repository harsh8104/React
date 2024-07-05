import { createSlice } from "@reduxjs/toolkit";

const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false,
    currentlyFetch: false,
  },
  reducers: {
    markFetchDone: (store) => {
      store.fetchDone = true;
    },
    markFetchingStart: (store) => {
      store.currentlyFetch = true;
    },
    markFetchingDone: (store) => {
      store.currentlyFetch = false;
    },
  },
});
export const fetchStatusActions = fetchStatusSlice.actions;
export default fetchStatusSlice;
