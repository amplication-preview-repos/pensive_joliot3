import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FormulaService } from "./formula.service";
import { FormulaControllerBase } from "./base/formula.controller.base";

@swagger.ApiTags("formulas")
@common.Controller("formulas")
export class FormulaController extends FormulaControllerBase {
  constructor(protected readonly service: FormulaService) {
    super(service);
  }
}
