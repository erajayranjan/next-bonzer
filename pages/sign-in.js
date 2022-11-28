import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { getData, saveData } from '../services/apiServices';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import authContext from '../context/authContext';
import { useRouter } from 'next/router';
import Button from '../components/utilities/Button';

const theme = createTheme();

export default  function SignIn() {

  const router = useRouter()

  const {status, setStatus, loading, setloading, user, setUser, token, setToken} = useContext(authContext);  


  const handleSubmit = async (event) => {
    event.preventDefault();
    setloading(true)
    localStorage.removeItem("bonzerCode");
    const data = new FormData(event.currentTarget);
    let res=await saveData("auth/login",{
      email: data.get('email'),
      password: data.get('password'),
    })
    if(res && res.data && res.data.token){
      res.data && res.data.token && localStorage.setItem("bonzerCode",JSON.stringify({token:res.data.token}))
      setToken(res.data.token);
      setStatus(true);
      setTimeout(() => {
        router.push("dashboard")
        setloading(false)

      }, 1000);
    console.log(res.status===200 ? ( res.data.message ||"Successfully Logged In!" ): res.response && res.response.data && res.response.data.error ? res.response.data.error : res.message)
    }
    else{ console.log("Some unknown error occoured!") }
    setloading(false)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
  <h2>{status ? "True" : "False"}</h2>

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              loading={loading}
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
      </Container>
    </ThemeProvider>
  );
}