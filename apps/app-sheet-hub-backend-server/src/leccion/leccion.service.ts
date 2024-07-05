import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LeccionServiceBase } from "./base/leccion.service.base";

@Injectable()
export class LeccionService extends LeccionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
