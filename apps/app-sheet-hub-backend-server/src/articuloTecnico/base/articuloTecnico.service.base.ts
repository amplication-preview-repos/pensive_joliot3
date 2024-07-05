/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  ArticuloTecnico as PrismaArticuloTecnico,
} from "@prisma/client";

export class ArticuloTecnicoServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ArticuloTecnicoCountArgs, "select">
  ): Promise<number> {
    return this.prisma.articuloTecnico.count(args);
  }

  async articuloTecnicos(
    args: Prisma.ArticuloTecnicoFindManyArgs
  ): Promise<PrismaArticuloTecnico[]> {
    return this.prisma.articuloTecnico.findMany(args);
  }
  async articuloTecnico(
    args: Prisma.ArticuloTecnicoFindUniqueArgs
  ): Promise<PrismaArticuloTecnico | null> {
    return this.prisma.articuloTecnico.findUnique(args);
  }
  async createArticuloTecnico(
    args: Prisma.ArticuloTecnicoCreateArgs
  ): Promise<PrismaArticuloTecnico> {
    return this.prisma.articuloTecnico.create(args);
  }
  async updateArticuloTecnico(
    args: Prisma.ArticuloTecnicoUpdateArgs
  ): Promise<PrismaArticuloTecnico> {
    return this.prisma.articuloTecnico.update(args);
  }
  async deleteArticuloTecnico(
    args: Prisma.ArticuloTecnicoDeleteArgs
  ): Promise<PrismaArticuloTecnico> {
    return this.prisma.articuloTecnico.delete(args);
  }
}
