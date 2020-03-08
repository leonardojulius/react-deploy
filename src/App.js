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
             src="https://raw.githubusercontent.com/leonardojulius/react-deploy/gh-pages/Screenshot%20from%202020-03-08%2022-25-38.png"
             alt="avatar"
             className="avatar-img"
           />
           <div className="banner-text">
           <h1> Junior Web Developer</h1>
           <hr/>

<p> | HTML/CSS |Materialize | Bootstrap | JavaScript | React | PHP-MVC | Yii2 | Laravel|</p>

<div className="social-links">
{/* linkedin*/}
<a href="http://google.com" rel="noopener noreferrer" target ="_blank"></a>
<i className="fa fa-linkedin-square" aria-hidden="true" />
</div>
           </div>

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
