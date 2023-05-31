import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import { IconFlagDE } from "material-ui-flags";
import "./Header.css";
import { Box } from "@material-ui/core";

export default function Header() {
    const commonStyles = {
        bgcolor: 'background.paper',
        borderColor: 'text.primary',
        m: 1,
        border: 1,
        width: '5rem',
        height: '5rem',
      };
  return (
    <div className="header">
      <div className="title">DIAZO</div>
      <div className="rightIcons">
      <Box sx={{...commonStyles, borderRadius: '16px' }}>
          <IconFlagDE />
        </Box>
        <IconButton >
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
}
