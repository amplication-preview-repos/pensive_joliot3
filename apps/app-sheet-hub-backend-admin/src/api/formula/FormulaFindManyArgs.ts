import { FormulaWhereInput } from "./FormulaWhereInput";
import { FormulaOrderByInput } from "./FormulaOrderByInput";

export type FormulaFindManyArgs = {
  where?: FormulaWhereInput;
  orderBy?: Array<FormulaOrderByInput>;
  skip?: number;
  take?: number;
};
