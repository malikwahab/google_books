import React from 'react';
import { Grid } from 'react-bootstrap';
import './styles.css';

const App = ({ children }) =>
  <div>
    <div className="header">
      <h4>Google API React</h4> 
    </div>
    <Grid>
      {children}
    </Grid>
  </div>

export default App;