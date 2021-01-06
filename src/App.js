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
import { CreateAccountProvider } from './context/CreateAccount.context';

function App() {
  const components = [
    { component: <Home />, path: '/', nav: true },
    { component: <AboutUs />, path: '/about-us', nav: true },
    { component: <Exercise />, path: '/exercises', nav: true },
    { component: <SignIn />, path: '/sign-in', nav: true },
    {
      component: (
        <CreateAccountProvider>
          <CreateAccount />
        </CreateAccountProvider>
      ),
      path: '/create-account',
      nav: false,
    },
  ];
  return (
    <Router>
      <div className='App'>
        <Switch>
          {components.map((component, i) => {
            return (
              <Route
                path={component.path}
                exact
                key={i}
                render={() => (
                  <Fragment>
                    {component.nav ? <Navbar /> : null}
                    {component.component}
                    {component.nav ? <Footer /> : null}
                  </Fragment>
                )}
              />
            );
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
