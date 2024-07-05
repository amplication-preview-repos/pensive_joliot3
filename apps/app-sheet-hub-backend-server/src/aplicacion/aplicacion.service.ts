import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AplicacionServiceBase } from "./base/aplicacion.service.base";

@Injectable()
export class AplicacionService extends AplicacionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
