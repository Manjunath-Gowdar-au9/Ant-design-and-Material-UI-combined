import React from 'react'
import './App.css';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Button as ButtonAnt, DatePicker as DatePickerAnt } from "antd";
import "antd/dist/antd.css";




function App() {
  return (
  <React.Fragment>
      {/* the below code is material design */}
        <h1>hello material ui</h1>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Typography variant="h1" component="h2" gutterBottom>
          material ui works with ant design
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          below component is material ui
        </Typography>

        <ButtonGroup color="secondary" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
    <br></br>
    <br></br>
    <br></br>
    <hr></hr>
    <br></br>

    {/* the below is ant-design */}
      <h1>ant design works with material ui, <br></br> below component is ant-design</h1>
        <DatePickerAnt />
        <ButtonAnt type="primary" style={{ marginLeft: 8 }}>
          Primary Button
        </ButtonAnt>
        <ButtonAnt>One</ButtonAnt>
        
  </React.Fragment>
  );
}

export default App;
