import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DocumentacionTecnicaServiceBase } from "./base/documentacionTecnica.service.base";

@Injectable()
export class DocumentacionTecnicaService extends DocumentacionTecnicaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
