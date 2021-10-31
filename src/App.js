import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route  } from 'react-router-dom';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Footer from './pages/Footer/Footer';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import Booking from './pages/Booking/Booking';
import MyOrders from './pages/Booking/MyOrders/MyOrders';

function App() {
  return (
      <div>
          <AuthProvider>
              <Router>
                  <Header />
                  <Switch>
                      <Route exact path="/">
                          <Home></Home>
                      </Route>
                      <Route path="/home">
                          <Home></Home>
                      </Route>
                      <Route path="/login">
                          <Login></Login>
                      </Route>
                      <Route path="/register">
                          <Register></Register>
                      </Route>
                      <Route path="/about">
                          <About></About>
                      </Route>
                      <PrivateRoute path="/booking/:serviceId">
                          <Booking></Booking>
                      </PrivateRoute>
                      <PrivateRoute path="/orders">
                          <MyOrders></MyOrders>
                      </PrivateRoute>
                      <Route path="*">
                          <NotFound></NotFound>
                      </Route>
                  </Switch>
                  <Footer></Footer>
              </Router>
          </AuthProvider>
      </div>
  );
}

export default App;
