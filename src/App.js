import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer,Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { Grid, Cell} from 'react-mdl';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="My Portfolio"   scroll >
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>


              </Navigation>
          </Header>
          <Drawer title="Title">
              <Navigation>

                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
          </Drawer>
          <Content>
          <div style = {{width: '100%', margin: 'auto'}}>
          <Grid className="landing-grid">
          <Cell col={12}>
          <img src={logo} className="App-logo" alt="logo" />
           <img
             src="https://lh3.googleusercontent.com/k_wVcUeqh8wEWAc6BYSHfTAwj8W8jiXxCqk0iiruMqcp3qfgG4EKX5Ha0xSTO96bmzWKPyNPVyzxqYq3te-vaPfqUGolPv5uuwry-d_44bE_VhNuv3u64Fdje9IX2WHUBXNxxjskNn1YlXSoi8xRLqaZ4XdtsECsMwArFTYqBeK0Xdh8cEhuD4w8Pdl8aTs8f7QUvbXAHkDwrIcOmaIJBOvdO-jPE-6qirOfWzdx37KnzIDFPZvEafBXT5AkNQgi2TNKyPH6AcNYeBjzDFLF-KA4MBLFTZD0oW3kxh5NaevV20yCHxfDSLTdTxJw1DUbG85FcqlTPiGqGGiVqH6ehSXEqOQ-2xsIi3Wh5BCuGPS6jKMiAKR4nK8y44qJOjYJf2hWy_NzIFJBgAz_PvbfNT5vu-evHMD8OFYvEiM_tScy2XsSef_nWwlmLAB69cwFd9V80zM_Du_VvEZg7HJ8xQMJ6t1_1vhxmHJN0dwv6K9QuMriH501MBM6kB2Zik92PnU6JP0DizRywt9beMQS3BEfhT55sICg8pjdHsMENeMJWXGew5dM8UrgvPLF1scGFCUW_HV9QpTTOaBqDkkVQkdqC1pXUCiBGSw3l6D5K2LPNkplcSOEFJzfSnvisy3DZ5vaSoo-QxJBmvZNthF5BZghabeafLYI3dSisLGudshM2LNgbJAOrIM=s337-no"
             alt="avatar"
             className="avatar-img"
           />
           <div className="banner-text">
           <h1>Julius Leonardo</h1>
            <h4>Junior Web Developer</h4>
           <hr/>
           <p>Powered by ReactJS</p>

<p> | HTML/CSS | Materialize | Bootstrap | JavaScript | React | PHP-MVC | Yii2 | Laravel | MySql | Linux |</p>


<div className="social-links">
{/* linkedin*/}



</div>

           </div>


    <Main/>
          </Cell>

          </Grid>
          </div>

             <div className="page-content" />





          </Content>
      </Layout>
  </div>
  );
}

export default App;
