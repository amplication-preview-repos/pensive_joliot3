import { Module } from "@nestjs/common";
import { DocumentacionTecnicaModuleBase } from "./base/documentacionTecnica.module.base";
import { DocumentacionTecnicaService } from "./documentacionTecnica.service";
import { DocumentacionTecnicaController } from "./documentacionTecnica.controller";
import { DocumentacionTecnicaResolver } from "./documentacionTecnica.resolver";

@Module({
  imports: [DocumentacionTecnicaModuleBase],
  controllers: [DocumentacionTecnicaController],
  providers: [DocumentacionTecnicaService, DocumentacionTecnicaResolver],
  exports: [DocumentacionTecnicaService],
})
export class DocumentacionTecnicaModule {}
