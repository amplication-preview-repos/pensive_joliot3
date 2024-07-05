import { DocumentacionTecnica as TDocumentacionTecnica } from "../api/documentacionTecnica/DocumentacionTecnica";

export const DOCUMENTACIONTECNICA_TITLE_FIELD = "id";

export const DocumentacionTecnicaTitle = (
  record: TDocumentacionTecnica
): string => {
  return record.id?.toString() || String(record.id);
};
