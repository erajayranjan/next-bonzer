import { Link, Typography } from "@mui/material";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props} className="text-gray-200">
        {'Copyright © '}
        <Link color="inherit" href="https://bonzercode.com/" >
          {process.env.NEXT_PUBLIC_APP_TITLE}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export default Copyright;  