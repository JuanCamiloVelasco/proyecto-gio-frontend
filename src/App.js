import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import { useState } from "react";

import EventosList from './components/eventos/EventosList';
import AddEvento from './components/eventos/AddEventos';
import UpdateEvento from './components/eventos/UpdateEventos';

import MainMenu from "./components/menu/MainMenu";
import Navbar from "./components/menu/NavBar";

import FiltroEventosMenu from "./components/filtros/FiltroEventosMenu";
import FiltroEventosFechas from "./components/filtros/FiltroEventosFechas";
import FiltroFechasList from "./components/filtros/FiltroFechasList";
import FiltroTipoList from "./components/filtros/FiltroTipoList";
import FiltroEventosTipo from "./components/filtros/FiltroEventosTipo";

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}


function App() {

  const [theme, setTheme] = useState("light")

  return (
    
    <>
    
    <BrowserRouter>
        <Navbar />
        <Routes>
          {/* //MENU */}
          <Route index element={<MainMenu />} />
          <Route path="/" element={<MainMenu />} />

          {/* //CRUD */}
          <Route path="/eventosList" element={<EventosList />} />
          <Route path="/addEvento" element={<AddEvento />} />
          <Route path="/editEvento/:id" element={<UpdateEvento />} />

          {/* //FILTROS */}
          <Route path="/filtroEventos" element={<FiltroEventosMenu />} />
          <Route path="/filtroFechas" element={<FiltroEventosFechas />} />
          <Route path="/filtroTipo" element={<FiltroEventosTipo />} />
          <Route path="/filtroFechasList/:fechaInicial/:fechaFinal" element={<FiltroFechasList />} />
          <Route path="/filtroTipoList/:tipo" element={<FiltroTipoList />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
