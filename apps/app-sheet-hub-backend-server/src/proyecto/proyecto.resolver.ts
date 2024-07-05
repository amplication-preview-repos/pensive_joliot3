import * as graphql from "@nestjs/graphql";
import { ProyectoResolverBase } from "./base/proyecto.resolver.base";
import { Proyecto } from "./base/Proyecto";
import { ProyectoService } from "./proyecto.service";

@graphql.Resolver(() => Proyecto)
export class ProyectoResolver extends ProyectoResolverBase {
  constructor(protected readonly service: ProyectoService) {
    super(service);
  }
}
