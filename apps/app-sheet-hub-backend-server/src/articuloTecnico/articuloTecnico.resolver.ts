import * as graphql from "@nestjs/graphql";
import { ArticuloTecnicoResolverBase } from "./base/articuloTecnico.resolver.base";
import { ArticuloTecnico } from "./base/ArticuloTecnico";
import { ArticuloTecnicoService } from "./articuloTecnico.service";

@graphql.Resolver(() => ArticuloTecnico)
export class ArticuloTecnicoResolver extends ArticuloTecnicoResolverBase {
  constructor(protected readonly service: ArticuloTecnicoService) {
    super(service);
  }
}
