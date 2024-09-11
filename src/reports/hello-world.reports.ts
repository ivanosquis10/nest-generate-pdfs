import type { TDocumentDefinitions } from 'pdfmake/interfaces';

interface ReportsOptions {
  name: string;
}

export const getHelloWorldReport = (
  options: ReportsOptions,
): TDocumentDefinitions => {
  const { name } = options;

  const docDefinition: TDocumentDefinitions = {
    content: [`Hola bro ${name}`],
  };

  return docDefinition;
};
