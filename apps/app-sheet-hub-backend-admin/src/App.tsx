import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LeccionList } from "./leccion/LeccionList";
import { LeccionCreate } from "./leccion/LeccionCreate";
import { LeccionEdit } from "./leccion/LeccionEdit";
import { LeccionShow } from "./leccion/LeccionShow";
import { CursoList } from "./curso/CursoList";
import { CursoCreate } from "./curso/CursoCreate";
import { CursoEdit } from "./curso/CursoEdit";
import { CursoShow } from "./curso/CursoShow";
import { FormulaList } from "./formula/FormulaList";
import { FormulaCreate } from "./formula/FormulaCreate";
import { FormulaEdit } from "./formula/FormulaEdit";
import { FormulaShow } from "./formula/FormulaShow";
import { DocumentacionTecnicaList } from "./documentacionTecnica/DocumentacionTecnicaList";
import { DocumentacionTecnicaCreate } from "./documentacionTecnica/DocumentacionTecnicaCreate";
import { DocumentacionTecnicaEdit } from "./documentacionTecnica/DocumentacionTecnicaEdit";
import { DocumentacionTecnicaShow } from "./documentacionTecnica/DocumentacionTecnicaShow";
import { ProyectoList } from "./proyecto/ProyectoList";
import { ProyectoCreate } from "./proyecto/ProyectoCreate";
import { ProyectoEdit } from "./proyecto/ProyectoEdit";
import { ProyectoShow } from "./proyecto/ProyectoShow";
import { ConsultoriaList } from "./consultoria/ConsultoriaList";
import { ConsultoriaCreate } from "./consultoria/ConsultoriaCreate";
import { ConsultoriaEdit } from "./consultoria/ConsultoriaEdit";
import { ConsultoriaShow } from "./consultoria/ConsultoriaShow";
import { ArticuloTecnicoList } from "./articuloTecnico/ArticuloTecnicoList";
import { ArticuloTecnicoCreate } from "./articuloTecnico/ArticuloTecnicoCreate";
import { ArticuloTecnicoEdit } from "./articuloTecnico/ArticuloTecnicoEdit";
import { ArticuloTecnicoShow } from "./articuloTecnico/ArticuloTecnicoShow";
import { AplicacionList } from "./aplicacion/AplicacionList";
import { AplicacionCreate } from "./aplicacion/AplicacionCreate";
import { AplicacionEdit } from "./aplicacion/AplicacionEdit";
import { AplicacionShow } from "./aplicacion/AplicacionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AppSheet Hub Backend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Leccion"
          list={LeccionList}
          edit={LeccionEdit}
          create={LeccionCreate}
          show={LeccionShow}
        />
        <Resource
          name="Curso"
          list={CursoList}
          edit={CursoEdit}
          create={CursoCreate}
          show={CursoShow}
        />
        <Resource
          name="Formula"
          list={FormulaList}
          edit={FormulaEdit}
          create={FormulaCreate}
          show={FormulaShow}
        />
        <Resource
          name="DocumentacionTecnica"
          list={DocumentacionTecnicaList}
          edit={DocumentacionTecnicaEdit}
          create={DocumentacionTecnicaCreate}
          show={DocumentacionTecnicaShow}
        />
        <Resource
          name="Proyecto"
          list={ProyectoList}
          edit={ProyectoEdit}
          create={ProyectoCreate}
          show={ProyectoShow}
        />
        <Resource
          name="Consultoria"
          list={ConsultoriaList}
          edit={ConsultoriaEdit}
          create={ConsultoriaCreate}
          show={ConsultoriaShow}
        />
        <Resource
          name="ArticuloTecnico"
          list={ArticuloTecnicoList}
          edit={ArticuloTecnicoEdit}
          create={ArticuloTecnicoCreate}
          show={ArticuloTecnicoShow}
        />
        <Resource
          name="Aplicacion"
          list={AplicacionList}
          edit={AplicacionEdit}
          create={AplicacionCreate}
          show={AplicacionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
