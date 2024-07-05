import { Consultoria as TConsultoria } from "../api/consultoria/Consultoria";

export const CONSULTORIA_TITLE_FIELD = "id";

export const ConsultoriaTitle = (record: TConsultoria): string => {
  return record.id?.toString() || String(record.id);
};
