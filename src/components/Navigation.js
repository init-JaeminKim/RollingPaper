import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { authService } from "../Instance";

const Navigation = ({ userObj }) => {
  const [activeItem, setActiveItem] = useState("Home");

  const history = useHistory();

  const onLogOutClick = () => {
    authService.signOut();
    history.push("/");
  };

  const onItemClick = (e, { name }) => setActiveItem({ name }.name);

  return (
    <Menu size="large" widths="3" color="yellow" fixed="top">
      <Menu.Item
        as={Link}
        to="/"
        name="Home"
        active={activeItem === "Home"}
        onClick={onItemClick}
      />
      <Menu.Item
        as={Link}
        to="/RollSheet"
        name="RollSheet"
        active={activeItem === "RollSheet"}
        onClick={onItemClick}
      />

      <Menu.Item onClick={onLogOutClick}>
        <Icon name="log out" size="large" />
      </Menu.Item>
    </Menu>
  );
};

export default Navigation;
