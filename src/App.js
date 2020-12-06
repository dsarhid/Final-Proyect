//Dependencies
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//Components
import EditCourse from './components/Modals/EditCourse.js';
import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
//Pages
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home"
import FavoritePage from "./pages/FavoritePage"
import RecoverPasswordPage from "./pages/RecoverPasswordPage"
import CourseDetail from './pages/CourseDetail.js';
//Routes
import PrivateRoute from "./routes/PrivateRoute";
//Context
import AdminpageProvider from "./context/AdminpageContext"
import FunctionModalsProvider from "./context/FunctionModals";

function App() {
  const dayHour = new Date().getHours();
  return (
<<<<<<< HEAD
  
    <>
    <Router>
      <Switch>
        <Route exact path="/"  component={LandingPage}/> 
        <Route exact path="/courses/editar/:idC" component={EditCourse} />
        <Route exact path="/adminpage" component={AdminPage}/>
        <Route exact path="/favorites" component={FavoritePage} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/recoverpassword" component={RecoverPasswordPage} />
      </Switch>
    </Router>
  </>
=======
      <Router>
        <Switch>
        <Header dayHour={dayHour}/>
          <AdminpageProvider>
            <FunctionModalsProvider>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/adminpage" component={AdminPage} />
              <Route exact path="/courses/editar/:idCourse" component={EditCourse} />
              <Route exact path="/courses/detail/:id" component={CourseDetail} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/recoverpassword" component={RecoverPasswordPage} />
              <Route exact path="/favorites" component={FavoritePage} />
            </FunctionModalsProvider>
          </AdminpageProvider>
        </Switch>
      </Router>
>>>>>>> 01e4f59820b8f6fa1bca4984635b309b6afaa93f
  );
}

export default App;
