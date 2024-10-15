import styled from "@emotion/styled";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = styled.div`
  background: #151418;
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  z-index: 100000;
  transition: 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 2.5rem;
  font-weight: 600;
  font-family: "Nanum Pen Script", cursive;
  font-style: normal;

  &:hover {
    color: rgb(119, 119, 121);
  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <Sidebar isOpen={isOpen} onClick={toggle}>
      <CloseIcon onClick={toggle} />
      <NavMenu>
        <NavLink onClick={toggle} className="menu-item" to="/">
          Home
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="/our-story">
          Our Story
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="/our-mission">
          Our Mission
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="/our-products">
          Our Products
        </NavLink>
      </NavMenu>
    </Sidebar>
  );
};

export default Dropdown;
