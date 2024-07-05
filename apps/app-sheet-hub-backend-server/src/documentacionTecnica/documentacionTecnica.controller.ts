import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DocumentacionTecnicaService } from "./documentacionTecnica.service";
import { DocumentacionTecnicaControllerBase } from "./base/documentacionTecnica.controller.base";

@swagger.ApiTags("documentacionTecnicas")
@common.Controller("documentacionTecnicas")
export class DocumentacionTecnicaController extends DocumentacionTecnicaControllerBase {
  constructor(protected readonly service: DocumentacionTecnicaService) {
    super(service);
  }
}
