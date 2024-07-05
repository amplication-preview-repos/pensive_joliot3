import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LeccionService } from "./leccion.service";
import { LeccionControllerBase } from "./base/leccion.controller.base";

@swagger.ApiTags("leccions")
@common.Controller("leccions")
export class LeccionController extends LeccionControllerBase {
  constructor(protected readonly service: LeccionService) {
    super(service);
  }
}
