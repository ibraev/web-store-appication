import React, { Component } from 'react';

import './App.css';
import {Route, Switch} from "react-router";
import Layout from "../components/Layout/Layout";
import Dishes from "../components/Dishes/Dishes";

class App extends Component {
  render() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact component={Dishes} />
            </Switch>
        </Layout>

    );
  }
}

export default App;
