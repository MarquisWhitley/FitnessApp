import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import SignIn from './components/pages/SignIn/SignIn.component';
import Footer from './components/Footer/Footer.component';
import Home from './components/pages/Home/Home.component';
import AboutUs from './components/pages/AboutUs/AboutUs.component';
import Exercise from './components/pages/Exercises/Exercise.component';
import CreateAccount from './components/CreateAccount/CreateAccount.component';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route
            path='/'
            exact
            render={() => (
              <Fragment>
                <Navbar />
                <Home />
                <Footer />
              </Fragment>
            )}
          />
          <Route
            path='/about-us'
            exact
            render={() => (
              <Fragment>
                <Navbar />
                <AboutUs />
                <Footer />
              </Fragment>
            )}
          />
          <Route
            path='/exercises'
            exact
            render={() => (
              <Fragment>
                <Navbar />
                <Exercise />
                <Footer />
              </Fragment>
            )}
          />
          <Route
            path='/sign-in'
            exact
            render={() => (
              <Fragment>
                <Navbar />
                <SignIn />
                <Footer />
              </Fragment>
            )}
          />
          <Route
            path='/create-account'
            render={() => (
              <Fragment>
                <CreateAccount />
              </Fragment>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
