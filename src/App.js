import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllMedicines from './Pages/AllMedicines/AllMedicines';
import MenuBar from './Components/MenuBar/MenuBar';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import OnlineDoctor from './Pages/OnlineDoctor/OnlineDoctor';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import TopHeader from './Components/TopHeader/TopHeader';
import Footer from './Components/Footer/Footer';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Service from './Pages/Home/Services/Service/Service';
import SingleService from './Pages/SingleService/SingleService';
import Blogs from './Pages/Home/Blogs/Blogs';
import AllServices from './Pages/AllServices/AllServices';
import SingleBlog from './Pages/SingleBlog/SingleBlog';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <TopHeader />
          <MenuBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivateRoute path="/allmedicine">
              <AllMedicines />
            </PrivateRoute>
            <PrivateRoute path="/service/:serviceTitle">
              <Service />
            </PrivateRoute>
            <Route path="/onlinedoctor">
              <OnlineDoctor />
            </Route>
            <Route path="/allservices">
              <AllServices />
            </Route>
            <PrivateRoute path="/single_service">
              <SingleService />
            </PrivateRoute>
            <PrivateRoute path="/single_blog">
              <SingleBlog />
            </PrivateRoute>
            <PrivateRoute path="/blogs">
              <Blogs />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/*">
              <PageNotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
