import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConsultoriaServiceBase } from "./base/consultoria.service.base";

@Injectable()
export class ConsultoriaService extends ConsultoriaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
