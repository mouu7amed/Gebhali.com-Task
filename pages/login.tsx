import {
  TextField,
  Typography,
  Link,
  InputAdornment,
  IconButton,
  Avatar,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Container,
  Stack,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useCtx } from "../context/Provider";
import { motion } from "framer-motion";
import PersonIcon from "@mui/icons-material/Person";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import LoginIcon from "@mui/icons-material/Login";
import Head from "next/head";

const boxVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, type: "spring" },
  },
  tap: {
    scale: 0.9,
  },
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remeberMe, setRemeberMe] = useState(false);

  const { login, currentUser } = useCtx();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/");
    }
  }, [currentUser, router]);

  const loginHandler = (e: any) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError("");

      login(email, password);

      if (localStorage.getItem("uid")) {
        router.push("/redirecting");
      }
    } catch (error: any) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Head>
        <title>Gebhaly.com - Login</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Box
        component={motion.div}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <PersonIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <Box component="form" onSubmit={loginHandler} sx={{ mt: 2 }}>
          <TextField
            margin="normal"
            label="Email"
            type="email"
            fullWidth
            required
            disabled={loading}
            error={!!error}
            helperText={!!error && "Incorrect Email or Password"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            label="Password"
            type={showPassword ? "text" : "password"}
            fullWidth
            required
            disabled={loading}
            error={!!error}
            helperText={!!error && "Incorrect Email or Password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
            disableElevation
            endIcon={<LoginIcon />}
            component={motion.button}
            variants={boxVariants}
            whileTap="tap"
          >
            Login
          </Button>
        </Box>

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 1 }}
        >
          Copyright ©{" "}
          <Link color="inherit" href="https://www.linkedin.com/in/mouu7amed/">
            MOHAMMED AZZAB
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
