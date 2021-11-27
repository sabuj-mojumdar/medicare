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
import SingleService from './Pages/SingleService/SingleService';
import Blogs from './Pages/Home/Blogs/Blogs';
import AllServices from './Pages/AllServices/AllServices';
import SingleBlog from './Pages/SingleBlog/SingleBlog';
import AddMedicine from './Pages/AllMedicines/OTCMedicine/AddMedicine';
import AddCategory from './Pages/AllMedicines/OTCMedicine/AddCategory';
import OTCMedicines from './Pages/AllMedicines/OTCMedicine/OTCMedicines';
import CategoryDetails from './Pages/AllMedicines/OTCMedicine/Category/CategoryDetails';
import AddDisease from './Pages/AllMedicines/OTCMedicine/AddDisease';


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
            <Route exact path="/addmedicine">
              <AddMedicine />
            </Route>
            <Route exact path="/addcategory">
              <AddCategory />
            </Route>
            <Route exact path="/adddisease">
              <AddDisease />
            </Route>
            <Route exact path="/otcmedicines">
              <OTCMedicines />
            </Route>
            <Route exact path="/otcmedicines/:categoryName">
              <CategoryDetails />
            </Route>
            <PrivateRoute path="/allmedicine">
              <AllMedicines />
            </PrivateRoute>
            <Route path="/onlinedoctor">
              <OnlineDoctor />
            </Route>
            <Route path="/allservices">
              <AllServices />
            </Route>
            <PrivateRoute path="/service/:title">
              <SingleService />
            </PrivateRoute>
            <PrivateRoute path="/blog/:blogtitle">
              <SingleBlog />
            </PrivateRoute>
            <Route path="/blogs">
              <Blogs />
            </Route>
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
