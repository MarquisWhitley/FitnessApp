import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.component';
import HomeBG from './components/pages/Home/HomeBG/HomeBG.component';
import AboutUsBG from './components/pages/AboutUs/AboutUsBG/AboutUsBG.component';
import ContactBG from './components/pages/Contact/ContactBG/ContactBG.component';
import SignUpBG from './components/pages/SignUp/SignUpBG/SignUpBG.component';
import Footer from './components/Footer/Footer.component';
import Home from './components/pages/Home/Home.component';
import AboutUs from './components/pages/AboutUs/AboutUs.component';
import Contact from './components/pages/Contact/Contact.component';
import SignUp from './components/pages/SignUp/SignUp.component';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route path='/' exact component={HomeBG} />
            <Route path='/about-us' component={AboutUsBG} />
            <Route path='/contact' component={ContactBG} />
            <Route path='/sign-up' component={SignUpBG} />
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
