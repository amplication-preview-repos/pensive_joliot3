import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProyectoService } from "./proyecto.service";
import { ProyectoControllerBase } from "./base/proyecto.controller.base";

@swagger.ApiTags("proyectos")
@common.Controller("proyectos")
export class ProyectoController extends ProyectoControllerBase {
  constructor(protected readonly service: ProyectoService) {
    super(service);
  }
}
