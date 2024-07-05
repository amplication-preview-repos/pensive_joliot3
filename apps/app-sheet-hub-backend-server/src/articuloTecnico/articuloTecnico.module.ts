import { Module } from "@nestjs/common";
import { ArticuloTecnicoModuleBase } from "./base/articuloTecnico.module.base";
import { ArticuloTecnicoService } from "./articuloTecnico.service";
import { ArticuloTecnicoController } from "./articuloTecnico.controller";
import { ArticuloTecnicoResolver } from "./articuloTecnico.resolver";

@Module({
  imports: [ArticuloTecnicoModuleBase],
  controllers: [ArticuloTecnicoController],
  providers: [ArticuloTecnicoService, ArticuloTecnicoResolver],
  exports: [ArticuloTecnicoService],
})
export class ArticuloTecnicoModule {}
