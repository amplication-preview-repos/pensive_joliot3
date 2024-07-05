import * as graphql from "@nestjs/graphql";
import { LeccionResolverBase } from "./base/leccion.resolver.base";
import { Leccion } from "./base/Leccion";
import { LeccionService } from "./leccion.service";

@graphql.Resolver(() => Leccion)
export class LeccionResolver extends LeccionResolverBase {
  constructor(protected readonly service: LeccionService) {
    super(service);
  }
}
