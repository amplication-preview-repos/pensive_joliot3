import { Leccion as TLeccion } from "../api/leccion/Leccion";

export const LECCION_TITLE_FIELD = "id";

export const LeccionTitle = (record: TLeccion): string => {
  return record.id?.toString() || String(record.id);
};
