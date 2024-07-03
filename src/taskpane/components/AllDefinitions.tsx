import React from "react";
import { useSelector } from "react-redux";
import { getFilteredDefinitions } from "../../store/selectors/Definitions";
import DefinitionList from "./shared/DefinitionList";
import { handleOnNavigateToDefinition } from "../utils";
import SearchDefinitions from "./SearchDefintion";

const AllDefinitions = () => {
  const definitions = useSelector(getFilteredDefinitions);

  return (
    <>
      <SearchDefinitions />
      <DefinitionList
        definitions={definitions}
        emptyStateMessage={"There are no definitions in this document"}
        onNavigate={handleOnNavigateToDefinition}
      />
    </>
  );
};

export default AllDefinitions;
