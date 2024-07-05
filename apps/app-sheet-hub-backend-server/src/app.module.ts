import { Module } from "@nestjs/common";
import { LeccionModule } from "./leccion/leccion.module";
import { CursoModule } from "./curso/curso.module";
import { FormulaModule } from "./formula/formula.module";
import { DocumentacionTecnicaModule } from "./documentacionTecnica/documentacionTecnica.module";
import { ProyectoModule } from "./proyecto/proyecto.module";
import { ConsultoriaModule } from "./consultoria/consultoria.module";
import { ArticuloTecnicoModule } from "./articuloTecnico/articuloTecnico.module";
import { AplicacionModule } from "./aplicacion/aplicacion.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    LeccionModule,
    CursoModule,
    FormulaModule,
    DocumentacionTecnicaModule,
    ProyectoModule,
    ConsultoriaModule,
    ArticuloTecnicoModule,
    AplicacionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
