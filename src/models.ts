export interface IDefinitionsStore {
  readonly allDefinitions: TDefinition[];
  readonly quickSearch: string;
}

export interface IDefinitionList {
  readonly definitions: TDefinition[];
  readonly emptyStateMessage: string;
  readonly onNavigate: (index: number) => void;
}

export type TDefinition = {
  readonly term: string;
  readonly definition: string;
  readonly paragraphIndex: number;
};
