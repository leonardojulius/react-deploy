import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer,Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Grid, Cell} from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="Title"   scroll >
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>


              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
                  <a href="/">Link</a>
              </Navigation>
          </Drawer>
          <Content>
          <div style = {{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
          <Cell col={12}>
           <img
             src=""
           />
          </Cell>
          </Grid>
          </div>

             <div className="page-content" />

              <Main/>

          </Content>
      </Layout>
  </div>
  );
}

export default App;
