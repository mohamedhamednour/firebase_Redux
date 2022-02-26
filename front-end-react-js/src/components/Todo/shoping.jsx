import React from "react";
import "../../App.css";
import { Link} from "react-router-dom";

import { todoapis, deleteitem } from "../reducer/index";
import { useSelector, useDispatch } from "react-redux";

export const Shoping = () => {
  const dispatch = useDispatch(); 
  //destruct method in reducer and get vlaues
  const { isloading, books, error } = useSelector((state) => state.apiSlice); 

  React.useEffect(() => {
    //call api get shoping by useEffect
    dispatch(todoapis());
    console.log(`dbfhh${books}`);
  }, [dispatch]);

 
  return (
    <>
      <div className="row">
        {isloading ? <h3>loading...</h3> : ""}

        <div className="col-10">
          {!error && (
            <div class="alert alert-danger mb-0" role="alert">
              <p> error 404{error}</p>
            </div>
          )}
          <div className="row ">
            {books
              ? books.map((item) => [
                  <div className="col-3 card m-2">
                    <Link className="btn btn-primary" to={`/photo/${item.id}`}>UPDATE</Link>
                    <img key={item.id} src={item.image} />
                    <form >
                    <input  className="btn btn-danger" onClick={() => dispatch(deleteitem(item.id))} type='submit' value='Delete' />

                    </form>
 
                  </div>,
                  
                ])
              : ""}
          </div>
        </div>
      </div>
    </>
  );
};
