import './App.css';
import Signup from './components/signup'
import Signin from './components/sign_in'
import Navbar from './components/navbar'
import { Home } from '../src/components/home'
import {PrivateRoute} from "../src/components/auth/provideroute";


import { AuthProvider } from '../src/components/auth/usecontext'
import { Route, Routes } from "react-router-dom";
import Phone from './components/auth/authphone'
import Create from './components/Todo/create';
import Update from './components/Todo/update';
import {Shoping} from './components/Todo/shoping';
import ForgotPassword from './components/Todo/forget-password'




function App() {
  // const { currentUser } = useAuth()

  

  return (
    <div className="App">

      <AuthProvider>
    <Navbar />     
 <pre>










        </pre>

        <Routes>
          
          <Route path="sign_in" element={<Signin />} />
          <Route path="phone" element={<Phone />} />
          <Route path="Signup" element={<Signup />} />
          <Route path="forgertpass" element={<ForgotPassword />} />

         {/* < Route
              path="/photo/:id"
              element={}
            /> */}
                      <Route path="/photo/:id" element={<Update />} />

         
          {/* <Route path="/home" element={<PrivateRoute Component={Home} />} /> */}
          <Route exact path="/" element={<PrivateRoute><Home /></PrivateRoute>} >
          <Route path="/home/create" element={<Create />} />
          <Route path="/" element={<Shoping />} />



          </Route>



            


        </Routes>

      </AuthProvider>


    </div>
  );
}

export default App;
