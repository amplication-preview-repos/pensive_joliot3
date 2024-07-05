import { AplicacionWhereInput } from "./AplicacionWhereInput";
import { AplicacionOrderByInput } from "./AplicacionOrderByInput";

export type AplicacionFindManyArgs = {
  where?: AplicacionWhereInput;
  orderBy?: Array<AplicacionOrderByInput>;
  skip?: number;
  take?: number;
};
