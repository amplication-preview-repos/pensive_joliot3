import { Module } from "@nestjs/common";
import { ConsultoriaModuleBase } from "./base/consultoria.module.base";
import { ConsultoriaService } from "./consultoria.service";
import { ConsultoriaController } from "./consultoria.controller";
import { ConsultoriaResolver } from "./consultoria.resolver";

@Module({
  imports: [ConsultoriaModuleBase],
  controllers: [ConsultoriaController],
  providers: [ConsultoriaService, ConsultoriaResolver],
  exports: [ConsultoriaService],
})
export class ConsultoriaModule {}
