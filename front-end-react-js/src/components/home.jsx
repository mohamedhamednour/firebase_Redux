import React from "react";
import "../App.css";
import { Link, Route, Routes} from "react-router-dom";
import Create from "./Todo/create";
import { useAuth  } from "../components/auth/usecontext"


import { Shoping } from "./Todo/shoping";


export const Home = () => {
  
   //dashord
  
  return (
    <>
      
      <div className="row">
        <div className="col-3 dashhord">
          <ul>
            <li>
              <Link className="link" to="/home/create"> Create image</Link>
              <br></br>
            </li>
            <li>
              <Link className="link" to="/home/update">update</Link>
            </li>
            <li>
              <Link className="link" to="/">show prodact</Link>
            </li>
          </ul>
        </div>

        <div align='center' className="col-9 centerr">
         
       
          <Routes>

            <Route path="/home/create" element={<Create />} />
            <Route path="/" element={<Shoping />} />


          </Routes>
        </div>
      </div>
    </>
  );
};
