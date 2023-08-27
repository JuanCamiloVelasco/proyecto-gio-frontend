import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "../menu/MainMenu.elements";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaCalendar,
  FaAlignJustify

} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const FiltroEvento = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(true);
  const navigate = useNavigate();
  
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <FaBattleNet />
            <p>Gestor </p>
            <p>Eventos </p>
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <div className="h-16 px-8 flex items-center" >
                <h1 className="text-orange-400 text font-bold text-4xl">Filtro de eventos</h1>
            </div>
            <div className="h-16 px-8 flex items-center" >
                <h2 className="text-orange-400 font-bold text-2xl">Seleccione el tipo de filtro a realizar</h2>
            </div>
            <MenuItem>
              <MenuItemLink onClick={() => navigate("/filtroFechas")}>
                <div className="flex align-middle">
                  <FaCalendar />
                  <p className="flex align-middle"> Filtro por fechas</p> 
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => navigate("/filtroTipo")}>
                <div className="flex align-middle">
                  <FaAlignJustify />
                  <p className="flex align-middle"> Filtro por tipo</p>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default FiltroEvento;

// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from "react-router-dom";
// import EventoService from '../../services/EventoService';

// const FiltroEvento = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [evento, setevento] = useState({
//         id: id,
//         tipoevent: "",
//         descrevent: "",
//         fechaevent: "",
//     });

//     const handleChange = (e) => {
//         const value = e.target.value;
//         setevento({...evento, [e.target.name]: value });
//     };

//     useEffect(() => {
//       const fetchData = async () => {
//         try {
//             const response = await EventoService.getEventoById(evento.id);
//             setevento(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//       };
//       fetchData();
//     }, [])
    
//     const filtroEvento = (e) => {
//         e.preventDefault();
//         EventoService.filtroFechas(evento.fechaevent).then((response)=> {
//             navigate("/eventosList");
//         }).catch((error) => {
//             console.log(error);
//         });
//     };

//   return (
//     <div className='flex max-w-2xl mx-auto shadow'>
//         <div className='px-8 py-8 bg-orange-50 background-color: oldlace;'>
//         <div className='container mx-auto my-8'>
//             <div className='font-medium text-2xl tracking-wider text-gray-500'>
//                 <h1>Filtros de Eventos</h1>
//             </div>
//             <div className='h-12'>
//                 <button onClick={() => navigate("/filtroFecha")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Filtro por fechas</button>
//                 <button onClick={() => navigate("/filtroTipo")} className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'>Filtro por tipo</button>
//                 <button onClick={() => navigate("/eventosList")} className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-2'>Cancelar</button>
//             </div>
//         </div>
//         </div>
//     </div>
//   );
// };

// export default FiltroEvento