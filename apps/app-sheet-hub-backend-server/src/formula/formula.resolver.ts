import * as graphql from "@nestjs/graphql";
import { FormulaResolverBase } from "./base/formula.resolver.base";
import { Formula } from "./base/Formula";
import { FormulaService } from "./formula.service";

@graphql.Resolver(() => Formula)
export class FormulaResolver extends FormulaResolverBase {
  constructor(protected readonly service: FormulaService) {
    super(service);
  }
}
