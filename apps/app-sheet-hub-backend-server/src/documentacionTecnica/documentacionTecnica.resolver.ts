import * as graphql from "@nestjs/graphql";
import { DocumentacionTecnicaResolverBase } from "./base/documentacionTecnica.resolver.base";
import { DocumentacionTecnica } from "./base/DocumentacionTecnica";
import { DocumentacionTecnicaService } from "./documentacionTecnica.service";

@graphql.Resolver(() => DocumentacionTecnica)
export class DocumentacionTecnicaResolver extends DocumentacionTecnicaResolverBase {
  constructor(protected readonly service: DocumentacionTecnicaService) {
    super(service);
  }
}
