import { TDefinition } from "../models";

export const extractDefinitions = async (context): Promise<TDefinition[]> => {
  await context.sync();
  const paragraphs = context.document.body.paragraphs;
  let definitions = [];

  paragraphs.load("items");
  await context.sync();
  paragraphs.items.forEach((paragraph, paragraphIndex) => {
    const text = paragraph.text.trim();
    const definitionParagraph = text.match(/^["“]([^"”]+)["”]/);

    if (definitionParagraph) {
      const term = definitionParagraph[1];
      const definition = text.slice(term.length + 2); // term length + 2 quotation marks
      if (definition) definitions.push({ term, definition, paragraphIndex });
    }
  });
  return definitions;
};

export const handleOnNavigateToDefinition = (index) => {
  Word.run((context) => {
    const paragraphs = context.document.body.paragraphs;
    paragraphs.load("items");
    return context.sync().then(() => {
      paragraphs.items[index].select();
    });
  });
};
