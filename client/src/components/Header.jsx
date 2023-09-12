import { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";
import { UserContext } from "../context/user.context";
import { Link } from "react-router-dom";

const Header = ({ children }) => {
  const [user] = useContext(UserContext);
  return (
    <AppBar position="relative">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" noWrap>
          {children}
        </Typography>
        {!user && <Link to="/login">Login</Link>}

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
