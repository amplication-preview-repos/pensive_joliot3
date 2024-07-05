import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FormulaServiceBase } from "./base/formula.service.base";

@Injectable()
export class FormulaService extends FormulaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
