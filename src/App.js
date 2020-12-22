import './App.css';
// import Greet from './components/Greet';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import Home from './components/pages/Home/Home.component';
import AboutUs from './components/pages/AboutUs/AboutUs.component';
import Contact from './components/pages/Contact/Contact.component';
import SignUp from './components/pages/SignUp/SignUp.component';
import Footer from './components/pages/Footer/Footer.component';

function App() {
  return (
    <Router>
      <div className='App'>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/contact' component={Contact} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        </div>
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/contact' component={Contact} />
            <Route path='/sign-up' component={SignUp} />
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
