import { ProyectoWhereInput } from "./ProyectoWhereInput";
import { ProyectoOrderByInput } from "./ProyectoOrderByInput";

export type ProyectoFindManyArgs = {
  where?: ProyectoWhereInput;
  orderBy?: Array<ProyectoOrderByInput>;
  skip?: number;
  take?: number;
};
