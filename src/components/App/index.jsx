import React from 'react';
import { Grid } from 'react-bootstrap';

const App = ({ children }) =>
  <Grid>
    <div className="header">
      React
    </div>
    {children}
  </Grid>

export default App;