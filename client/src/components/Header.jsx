import { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import { UserContext } from "../context/user.context";

const Header = ({ children }) => {
  const [user] = useContext(UserContext);
  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" noWrap>
          {children}
        </Typography>

        {user && (
          <Typography variant="h6" color="inherit">
            {user.username}
          </Typography>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
