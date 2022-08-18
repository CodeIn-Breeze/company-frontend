import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Training from './components/Training';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import WebDevelopment from './components/WebDevelopment';
import AppDevelopment from './components/AppDevelopment';
import WebDesign from './components/WebDesign';
import Seo from './components/Seo';
import SocialMedia from './components/SocialMedia';
import WebScrapping from './components/WebScrapping';
import PenetrationTesting from './components/PenetrationTesting';
import ContentWriting from './components/ContentWriting';
import Databases from './components/Databases';
import WebMaintenance from './components/WebMaintenance';
import Chatbots from './components/Chatbot';
import ContactForm from './components/Contact';
import Blog from './components/Blog';
import BlogSingle from './components/BlogSingle';
import Career from './components/Career';

function App() {
  return (
    <Router>
    <div className="App">
        <Header></Header>
        <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
        <Route path="/team"><Team /></Route>
        <Route path="/training"><Training /></Route>
        <Route path="/carrer"><Career /></Route>
        {/* <Route path="/testimonial"><Testimonials /></Route> */}
        <Route path="/portfolio"><Portfolio /></Route>
        <Route exact path="/services"><Services /></Route>
        <Route exact path="/webdev"><WebDevelopment /></Route>
        <Route exact path="/appdev"><AppDevelopment /></Route>
        <Route exact path="/webdesign"><WebDesign /></Route>
        <Route exact path="/seo"><Seo /></Route>
        <Route exact path="/socialmedia"><SocialMedia /></Route>
        <Route exact path="/webscrapping"><WebScrapping /></Route>
        <Route exact path="/pentest"><PenetrationTesting /></Route>
        <Route exact path="/contentwriting"><ContentWriting /></Route>
        <Route exact path="/databases"><Databases /></Route>
        <Route exact path="/webmaintenance"><WebMaintenance /></Route>
        <Route exact path="/chatbots"><Chatbots /></Route>
        <Route path="/contact"><ContactForm /></Route>
        <Route exact path="/blog"><Blog /></Route>
        <Route path="/blog/:blogId"><BlogSingle /></Route>
        {/* <Route path="/terms"><Terms /></Route> */}
        {/* <Route path="/policy"><Policy /></Route> */}
    </Switch>
        <Footer></Footer>
    </div>
    </Router>
  );
}

export default App;
