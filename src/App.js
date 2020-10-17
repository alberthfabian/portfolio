import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Certificates from './pages/Certificates';
import Diploma from './pages/Diploma';
import Contact from './pages/Contact';
import PageNotFound from './components/PageNotFound';
import { ServerProvider } from './Context';
import WhatsApp from './components/WhatsApp';

const App = () => (
  <ServerProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/skills' component={Skills}/>
          <Route exact path='/certificates' component={Certificates}/>
          <Route exact path='/certificates/:id' component={Diploma}/>
          <Route exact path='/contact' component={Contact}/>
          <Route component={PageNotFound}/>
        </Switch>
        <WhatsApp/>
      </Layout>
    </BrowserRouter>
  </ServerProvider>
);

export default App;
