
import { AppBar } from "@mui/material"
import Copyright from "./Copyright"

const Footer = () => {
  return (
    <AppBar position="static" color="primary" className="p-5">
        <Copyright 
        // sx={{ mt: 8, mb: 4 }}
         />
    </AppBar>
  )
}

export default Footer