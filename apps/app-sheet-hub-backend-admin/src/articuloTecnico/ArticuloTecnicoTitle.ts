import { ArticuloTecnico as TArticuloTecnico } from "../api/articuloTecnico/ArticuloTecnico";

export const ARTICULOTECNICO_TITLE_FIELD = "id";

export const ArticuloTecnicoTitle = (record: TArticuloTecnico): string => {
  return record.id?.toString() || String(record.id);
};
