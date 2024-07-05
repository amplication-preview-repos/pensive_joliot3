/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Leccion as PrismaLeccion } from "@prisma/client";

export class LeccionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.LeccionCountArgs, "select">): Promise<number> {
    return this.prisma.leccion.count(args);
  }

  async leccions(args: Prisma.LeccionFindManyArgs): Promise<PrismaLeccion[]> {
    return this.prisma.leccion.findMany(args);
  }
  async leccion(
    args: Prisma.LeccionFindUniqueArgs
  ): Promise<PrismaLeccion | null> {
    return this.prisma.leccion.findUnique(args);
  }
  async createLeccion(args: Prisma.LeccionCreateArgs): Promise<PrismaLeccion> {
    return this.prisma.leccion.create(args);
  }
  async updateLeccion(args: Prisma.LeccionUpdateArgs): Promise<PrismaLeccion> {
    return this.prisma.leccion.update(args);
  }
  async deleteLeccion(args: Prisma.LeccionDeleteArgs): Promise<PrismaLeccion> {
    return this.prisma.leccion.delete(args);
  }
}
