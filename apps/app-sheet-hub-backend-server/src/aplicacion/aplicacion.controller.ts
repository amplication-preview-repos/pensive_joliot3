import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AplicacionService } from "./aplicacion.service";
import { AplicacionControllerBase } from "./base/aplicacion.controller.base";

@swagger.ApiTags("aplicacions")
@common.Controller("aplicacions")
export class AplicacionController extends AplicacionControllerBase {
  constructor(protected readonly service: AplicacionService) {
    super(service);
  }
}
