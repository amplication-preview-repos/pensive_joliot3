import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ArticuloTecnicoServiceBase } from "./base/articuloTecnico.service.base";

@Injectable()
export class ArticuloTecnicoService extends ArticuloTecnicoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
