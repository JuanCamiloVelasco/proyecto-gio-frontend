import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./MainMenu.elements";
import {
  FaBattleNet,
  FaBars,
  FaTimes,
  FaCloud,
  FaFileCode,
  FaDragon

} from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

const MainMenu = () => {
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
                <h1 className="text-orange-400 text font-bold text-4xl">Bienvenido al Gestor de eventos</h1>
            </div>
            <div className="h-16 px-8 flex items-center" >
                <h2 className="text-orange-400 font-bold text-2xl">Seleccione la Accion que desea realizar</h2>
            </div>
            <MenuItem>
              <MenuItemLink onClick={() => navigate("/eventosList")}>
                <div className="flex align-middle">
                  <FaCloud />
                  <p className="flex align-middle"> Lista de eventos</p> 
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => navigate("/addEvento")}>
                <div className="flex align-middle">
                  <FaFileCode />
                  <p className="flex align-middle"> Registro de eventos</p>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => navigate("/filtroEventos")}>
                <div className="flex align-middle">
                  <FaDragon />
                  <p className="flex align-middle"> Filtro de eventos</p>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default MainMenu;