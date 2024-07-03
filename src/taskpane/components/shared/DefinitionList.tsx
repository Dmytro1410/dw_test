import React from "react";
import { IDefinitionList } from "../../../models";

const DefinitionList = ({ definitions, emptyStateMessage, onNavigate }: IDefinitionList) => (
  <div>
    {definitions?.length ? (
      <ul data-testid={"definition-list"}>
        {definitions?.map(({ definition, term, paragraphIndex }, index) => (
          <li key={term + index}>
            <h3 style={{ cursor: "pointer" }} onClick={() => onNavigate(paragraphIndex)}>
              {`"${term}"`}:
            </h3>
            {definition}
          </li>
        ))}
      </ul>
    ) : (
      <h3>{emptyStateMessage}</h3>
    )}
  </div>
);

export default DefinitionList;
