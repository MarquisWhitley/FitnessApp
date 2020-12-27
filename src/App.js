import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import SignIn from './components/pages/SignIn/SignIn.component';
import Footer from './components/Footer/Footer.component';
import Home from './components/pages/Home/Home.component';
import AboutUs from './components/pages/AboutUs/AboutUs.component';
import Exercise from './components/pages/Exercises/Exercise.component';
import CreateAccount from './components/CreateAccount/CreateAccount.component';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Route path='/' exact component={Home} />
        <Route path='/about-us' component={AboutUs} />
        <Route path='/exercises' component={Exercise} />
        <Route path='/sign-in' component={SignIn} />
        <Switch>
          <Route path='/create-account' component={CreateAccount} />
          <Footer />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
