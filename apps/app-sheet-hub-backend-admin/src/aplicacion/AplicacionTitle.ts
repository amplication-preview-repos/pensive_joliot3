import { Aplicacion as TAplicacion } from "../api/aplicacion/Aplicacion";

export const APLICACION_TITLE_FIELD = "id";

export const AplicacionTitle = (record: TAplicacion): string => {
  return record.id?.toString() || String(record.id);
};
