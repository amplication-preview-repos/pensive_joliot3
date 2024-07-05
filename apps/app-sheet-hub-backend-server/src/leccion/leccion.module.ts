import { Module } from "@nestjs/common";
import { LeccionModuleBase } from "./base/leccion.module.base";
import { LeccionService } from "./leccion.service";
import { LeccionController } from "./leccion.controller";
import { LeccionResolver } from "./leccion.resolver";

@Module({
  imports: [LeccionModuleBase],
  controllers: [LeccionController],
  providers: [LeccionService, LeccionResolver],
  exports: [LeccionService],
})
export class LeccionModule {}
