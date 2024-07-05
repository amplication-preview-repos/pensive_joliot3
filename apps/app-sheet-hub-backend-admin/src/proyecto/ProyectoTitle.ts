import { Proyecto as TProyecto } from "../api/proyecto/Proyecto";

export const PROYECTO_TITLE_FIELD = "id";

export const ProyectoTitle = (record: TProyecto): string => {
  return record.id?.toString() || String(record.id);
};
