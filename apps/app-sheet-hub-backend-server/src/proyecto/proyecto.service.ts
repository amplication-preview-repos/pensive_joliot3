import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProyectoServiceBase } from "./base/proyecto.service.base";

@Injectable()
export class ProyectoService extends ProyectoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
