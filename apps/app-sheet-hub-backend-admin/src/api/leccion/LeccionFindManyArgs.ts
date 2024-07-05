import { LeccionWhereInput } from "./LeccionWhereInput";
import { LeccionOrderByInput } from "./LeccionOrderByInput";

export type LeccionFindManyArgs = {
  where?: LeccionWhereInput;
  orderBy?: Array<LeccionOrderByInput>;
  skip?: number;
  take?: number;
};
