import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ArticuloTecnicoService } from "./articuloTecnico.service";
import { ArticuloTecnicoControllerBase } from "./base/articuloTecnico.controller.base";

@swagger.ApiTags("articuloTecnicos")
@common.Controller("articuloTecnicos")
export class ArticuloTecnicoController extends ArticuloTecnicoControllerBase {
  constructor(protected readonly service: ArticuloTecnicoService) {
    super(service);
  }
}
