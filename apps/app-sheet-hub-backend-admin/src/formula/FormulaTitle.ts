import { Formula as TFormula } from "../api/formula/Formula";

export const FORMULA_TITLE_FIELD = "id";

export const FormulaTitle = (record: TFormula): string => {
  return record.id?.toString() || String(record.id);
};
