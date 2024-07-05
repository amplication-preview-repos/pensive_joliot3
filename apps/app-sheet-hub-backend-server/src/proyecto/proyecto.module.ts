import { Module } from "@nestjs/common";
import { ProyectoModuleBase } from "./base/proyecto.module.base";
import { ProyectoService } from "./proyecto.service";
import { ProyectoController } from "./proyecto.controller";
import { ProyectoResolver } from "./proyecto.resolver";

@Module({
  imports: [ProyectoModuleBase],
  controllers: [ProyectoController],
  providers: [ProyectoService, ProyectoResolver],
  exports: [ProyectoService],
})
export class ProyectoModule {}
