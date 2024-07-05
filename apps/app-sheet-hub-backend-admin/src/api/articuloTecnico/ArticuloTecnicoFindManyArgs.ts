import { ArticuloTecnicoWhereInput } from "./ArticuloTecnicoWhereInput";
import { ArticuloTecnicoOrderByInput } from "./ArticuloTecnicoOrderByInput";

export type ArticuloTecnicoFindManyArgs = {
  where?: ArticuloTecnicoWhereInput;
  orderBy?: Array<ArticuloTecnicoOrderByInput>;
  skip?: number;
  take?: number;
};
