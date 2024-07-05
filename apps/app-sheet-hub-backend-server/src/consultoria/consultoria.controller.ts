import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConsultoriaService } from "./consultoria.service";
import { ConsultoriaControllerBase } from "./base/consultoria.controller.base";

@swagger.ApiTags("consultorias")
@common.Controller("consultorias")
export class ConsultoriaController extends ConsultoriaControllerBase {
  constructor(protected readonly service: ConsultoriaService) {
    super(service);
  }
}
