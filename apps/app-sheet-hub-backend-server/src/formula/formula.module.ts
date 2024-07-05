import { Module } from "@nestjs/common";
import { FormulaModuleBase } from "./base/formula.module.base";
import { FormulaService } from "./formula.service";
import { FormulaController } from "./formula.controller";
import { FormulaResolver } from "./formula.resolver";

@Module({
  imports: [FormulaModuleBase],
  controllers: [FormulaController],
  providers: [FormulaService, FormulaResolver],
  exports: [FormulaService],
})
export class FormulaModule {}
