import { Link, Typography } from "@mui/material";
import { appDetails } from "../constants/appDetails";

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props} className="text-gray-200">
        {'Copyright © '}
        <Link color="inherit" href="https://bonzercode.com/" >
          {appDetails.NEXT_PUBLIC_APP_TITLE}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
export default Copyright;  