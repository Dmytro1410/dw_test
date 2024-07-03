import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllDefinitions } from "../../store/selectors/Definitions";
import DefinitionList from "./shared/DefinitionList";
import { handleOnNavigateToDefinition } from "../utils";

const SelectedDefinitions = () => {
  const definitions = useSelector(getAllDefinitions);
  const [selectedDefinitions, setSelectedDefinitions] = useState([]);

  useEffect(() => {
    if (definitions.length)
      Office.context.document.addHandlerAsync(Office.EventType.DocumentSelectionChanged, onSelectionChange);
  }, [definitions]);

  const onSelectionChange = async () => {
    await Word.run(async (context) => {
      const selection = context.document.getSelection();
      selection.load("text");
      await context.sync();

      const paragraph = selection.paragraphs.getFirst();
      paragraph.load("text");
      await context.sync();

      const paragraphText = paragraph.text;
      const paragraphDefinitions = definitions.filter((def) => paragraphText.includes(def.term));

      setSelectedDefinitions(paragraphDefinitions);
    });
  };

  return (
    <DefinitionList
      definitions={selectedDefinitions}
      emptyStateMessage={"There are no definitions in this paragraph"}
      onNavigate={handleOnNavigateToDefinition}
    />
  );
};

export default SelectedDefinitions;
