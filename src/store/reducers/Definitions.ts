import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { IDefinitionsStore, TDefinition } from "../../models";

const initialState: IDefinitionsStore = {
  allDefinitions: [],
  quickSearch: "",
};

export const DefinitionsSlice = createSlice({
  name: "DEFINITIONS",
  initialState,
  reducers: {
    setDefinitions: (state: Draft<IDefinitionsStore>, action: PayloadAction<TDefinition[]>) => {
      state.allDefinitions = action.payload;
    },
    setQuickSearch: (state: Draft<IDefinitionsStore>, action: PayloadAction<string>) => {
      state.quickSearch = action.payload;
    },
  },
});

export const { setDefinitions, setQuickSearch } = DefinitionsSlice.actions;

export default DefinitionsSlice.reducer;
