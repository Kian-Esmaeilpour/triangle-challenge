import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

import './App.css';
import Header from '../Header';
import Main from '../Main';
import TriangleTypeDeterminer from '../TriangleTypeDeterminer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main>
          <Grid
            item
            sm={4}
          >
            <Paper>
              <TriangleTypeDeterminer />
            </Paper>
          </Grid>
        </Main>
      </div>
    );
  }
}

export default App;
