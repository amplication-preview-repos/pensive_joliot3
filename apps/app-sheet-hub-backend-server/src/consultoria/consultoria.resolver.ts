import * as graphql from "@nestjs/graphql";
import { ConsultoriaResolverBase } from "./base/consultoria.resolver.base";
import { Consultoria } from "./base/Consultoria";
import { ConsultoriaService } from "./consultoria.service";

@graphql.Resolver(() => Consultoria)
export class ConsultoriaResolver extends ConsultoriaResolverBase {
  constructor(protected readonly service: ConsultoriaService) {
    super(service);
  }
}
