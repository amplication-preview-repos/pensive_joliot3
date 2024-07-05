import { ConsultoriaWhereInput } from "./ConsultoriaWhereInput";
import { ConsultoriaOrderByInput } from "./ConsultoriaOrderByInput";

export type ConsultoriaFindManyArgs = {
  where?: ConsultoriaWhereInput;
  orderBy?: Array<ConsultoriaOrderByInput>;
  skip?: number;
  take?: number;
};
