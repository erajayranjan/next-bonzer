import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
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

const theme = createTheme();

export default  function SignIn() {

  
  const [loading, setloading] = useState(false)
  const [user, setUser] = useState({})
  const [token, setToken] = useState("")


  const handleSubmit = async (event) => {
    event.preventDefault();
    localStorage.removeItem("bonzerCode");
    const data = new FormData(event.currentTarget);
    let res=await saveData("auth/login",{
      email: data.get('email'),
      password: data.get('password'),
    })
    if(res){
      res.data && res.data.token && localStorage.setItem("bonzerCode",JSON.stringify({token:res.data.token}))
      setToken(res.data.token);
      setTimeout(() => {
        loadProfile()
      }, 1000);
    console.log(res.status===200 ? ( res.data.message ||"Successfully Logged In!" ): res.response && res.response.data && res.response.data.error ? res.response.data.error : res.message)
    }
    else{ console.log("Some unknown error occoured!") }
  };


  const loadProfile= async () => { 
    setloading(true)
    let res=await getData("auth")
    res && console.log(res);
    if(res){
        if(res.status===200){
            alert(`${JSON.stringify(res)}`)
            setUser(res.data.user)
            res.data && res.data.token && localStorage.setItem("user",JSON.stringify({user:res.data.user}))
        }
        else{
            alert(`${JSON.stringify(res.response.data.error)}`)
        }
    }
    setTimeout(() => {
        setloading(false)
    }, 500); 
    return {status:true}
   }

  useEffect(() => {
    // token && setTimeout(() => {
    //   loadProfile()
    // }, 500);
  }, [token])

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
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