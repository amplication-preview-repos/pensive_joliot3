import { Module } from "@nestjs/common";
import { AplicacionModuleBase } from "./base/aplicacion.module.base";
import { AplicacionService } from "./aplicacion.service";
import { AplicacionController } from "./aplicacion.controller";
import { AplicacionResolver } from "./aplicacion.resolver";

@Module({
  imports: [AplicacionModuleBase],
  controllers: [AplicacionController],
  providers: [AplicacionService, AplicacionResolver],
  exports: [AplicacionService],
})
export class AplicacionModule {}
