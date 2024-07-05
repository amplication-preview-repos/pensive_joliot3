import * as graphql from "@nestjs/graphql";
import { AplicacionResolverBase } from "./base/aplicacion.resolver.base";
import { Aplicacion } from "./base/Aplicacion";
import { AplicacionService } from "./aplicacion.service";

@graphql.Resolver(() => Aplicacion)
export class AplicacionResolver extends AplicacionResolverBase {
  constructor(protected readonly service: AplicacionService) {
    super(service);
  }
}
