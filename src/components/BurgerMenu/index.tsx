import React, { useState, useRef } from "react";
import FocusLock from "react-focus-lock";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { useOnClickOutside } from "hooks";
import Menu from "./Menu";

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <FocusLock disabled={!open}>
        <IconButton onClick={() => setOpen(true)} size="large">
          <MenuIcon />
        </IconButton>
        <Menu open={open} setOpen={setOpen} id={menuId} />
      </FocusLock>
    </div>
  );
};

export default BurgerMenu;
