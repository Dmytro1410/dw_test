import { RootState } from "../config";
import { createSelector } from "@reduxjs/toolkit";
import { TDefinition } from "../../models";

export const getAllDefinitions = (state: RootState): TDefinition[] => state.definitions.allDefinitions;

export const getDefinitionsQuickSearch = (state: RootState) => state.definitions.quickSearch;

export const getFilteredDefinitions = createSelector(
  [getAllDefinitions, getDefinitionsQuickSearch],
  (definitions, quickSearch) =>
    quickSearch ? definitions.filter(({ term }) => term.toLowerCase().includes(quickSearch.toLowerCase())) : definitions
);
