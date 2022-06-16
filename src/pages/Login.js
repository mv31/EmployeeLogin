import React, { useState } from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Button, TextField, Grid, Paper, Avatar } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";

function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  // let history = useHistory();
  let navigate = useNavigate();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 350,
    margin: "20px auto",
  };
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const avatharStyle = { background: "green" };
  const passwordStyle = { marginTop: "8%" };

  async function login() {
    let result = await fetch(
      `https://retoolapi.dev/B13laa/getusers?user_id=${email}&password=${password}`
    )
      .then((res) => res.json())
      .then((json) => {
        console.log("json", json);
        setData(json);
        if (json == "") {
          handleClick();
        } else {
          navigate("/profile");
        }
      })
      .catch((e) => {
        console.log("e", e);
      });
  }
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatharStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>sign In</h2>
          <TextField
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            label="Username"
            placeholder="Enter Username"
            fullWidth
          ></TextField>
          <TextField
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            style={passwordStyle}
            label="Password"
            placeholder="Enter password"
            type={"password"}
            fullWidth
          ></TextField>
          <Button
            // component={Link}
            // to={"/profile"}
            onClick={login}
            type={"submit"}
            style={passwordStyle}
            color="primary"
            variant="contained"
            fullWidth
          >
            Login
          </Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Invalid Login!
            </Alert>
          </Snackbar>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Login;
