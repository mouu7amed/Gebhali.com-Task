import React, { useState, forwardRef } from "react";
import {
  Box,
  Stack,
  Typography,
  Avatar,
  Divider,
  MenuItem,
  Menu,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
  Slide,
  IconButton,
  Badge,
} from "@mui/material";
import Link from "next/link";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCtx } from "../context/Provider";
import Cart from "./Cart";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...(props as any)} />;
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const showMenu = Boolean(anchorEl);
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const { currentUser, logout, setCartOpen } = useCtx();

  return (
    <Box className="header">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ backgroundColor: "#232323" }}
        height="70px"
        p={2}
      >
        <Link href="/">
          <Typography className="logo" sx={{ cursor: "pointer" }}>
            Gebhaly<span>.com</span>
          </Typography>
        </Link>

        <Stack direction={"row"} className={"nav"}>
          <Link href="/products">
            <Button
              sx={{
                fontWeight: { xs: 400, sm: 600 },
                fontSize: { xs: "0.8rem", sm: "1rem" },
              }}
            >
              Products
            </Button>
          </Link>
          {!currentUser && (
            <Link href="/login">
              <Button
                sx={{
                  fontWeight: { xs: 400, sm: 600 },
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                }}
              >
                Login
              </Button>
            </Link>
          )}
          <Badge variant="dot" color="error">
            <IconButton onClick={() => setCartOpen(true)}>
              <ShoppingCartIcon />
            </IconButton>
          </Badge>
          {!!currentUser && (
            <Button
              color="inherit"
              endIcon={<KeyboardArrowDownIcon color="inherit" />}
              onClick={(e) => setAnchorEl(e.currentTarget)}
              aria-controls={showMenu ? "user-menu" : undefined}
              aria-expanded={showMenu ? "true" : undefined}
              aria-haspopup="true"
              sx={{ ml: 2 }}
            >
              <Avatar src={""} alt="avatar" sx={{ width: 32, height: 32 }} />
            </Button>
          )}
        </Stack>
      </Stack>
      <Menu
        id="user-menu"
        anchorEl={anchorEl}
        open={showMenu}
        onClose={() => setAnchorEl(null)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        elevation={3}
      >
        <MenuItem sx={{ fontWeight: 500 }}>
          {`${
            currentUser?.name.firstname.charAt(0).toUpperCase() +
            currentUser?.name.firstname.slice(1)
          } ${
            currentUser?.name.lastname.charAt(0).toUpperCase() +
            currentUser?.name.lastname.slice(1)
          }`}
        </MenuItem>
        <Divider />
        <MenuItem
          onClick={() => {
            setAnchorEl(null);
            setShowLogoutDialog(true);
          }}
        >
          Logout
        </MenuItem>
      </Menu>
      <Dialog
        open={showLogoutDialog}
        onClose={() => setShowLogoutDialog(false)}
        TransitionComponent={Transition as any}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Are you sure to Logout?</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            By Logging out you will be redirected to the Login page where it
            will require your Email and Password again.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowLogoutDialog(false)}>
            Stay Logged in
          </Button>
          <Button
            onClick={() => {
              logout();
              setShowLogoutDialog(false);
            }}
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>

      <Cart />
    </Box>
  );
};

export default Header;
