// DataGridCustomColumnMenu.jsx
import React from "react";
import { GridColumnMenuContainer } from "@mui/x-data-grid";
import MenuItem from "@mui/material/MenuItem";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;

  const handleFilterClick = () => {
    console.log("Filter clicked for column:", currentColumn);
    hideMenu();
  };

  const handleHideClick = () => {
    console.log("Hide clicked for column:", currentColumn);
    hideMenu();
  };

  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <MenuItem onClick={handleFilterClick}>Filter</MenuItem>
      <MenuItem onClick={handleHideClick}>Hide</MenuItem>
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
