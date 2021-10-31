import React from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import{Layout,Typography,Space} from 'antd'
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css'
const App = () => {
    return (
        <div className="app">
            <div class="navbar">
                <Navbar/>
            </div>
            <div className="main">
            <Layout>
                <div className="routes">
                <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/exchanges">
              <Exchanges />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>

                </div>
            </Layout>
            <div className="footer">
            <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021 {"  "}
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved
          </Typography.Title>
          <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Created By{"  "}
          <a href="https://twitter.com/id_imb" target="_blank" rel="noreferrer">
             Rohit Rai
          </a>

          <br />
          
          </Typography.Title>

            </div>
            
        </div>
        </div>

    )
}

export default App
