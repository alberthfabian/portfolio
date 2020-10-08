import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import All from './pages/All';

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" component={All}/>
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
