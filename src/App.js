import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./App.css";
const useStyles = makeStyles((theme) => ({
  formControl: {
    padding: "1rem",
    margin: theme.spacing(3),
    backgroundColor: "#fff",
  },
}));
const options = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];
function App() {
  const classes = useStyles();
  const [checked, setChecked] = useState([]);
  const [color, setColor] = useState("red");

  useEffect(() => {
    if (checked.length === 0) {
      setColor("red");
    } else if (checked.length === 5) {
      setColor("green");
    } else {
      setColor("yellow");
    }
  }, [checked]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setChecked([...checked, e.target.name]);
    } else {
      setChecked(checked.filter((x) => x !== e.target.name));
    }
  };
  return (
    <div className="App">
      <Box
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3"> Try Me :-)</Typography>
        <Box
          style={{
            padding: "5rem",
            backgroundColor: color,
            margin: "2rem auto",
          }}
        >
          <FormControl component="fieldset" className={classes.formControl}>
            <FormGroup>
              {options.map((option, i) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checked.includes(option)}
                      color="primary"
                      onChange={handleChange}
                      name={option}
                    />
                  }
                  label={option}
                />
              ))}
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </div>
  );
}

export default App;
