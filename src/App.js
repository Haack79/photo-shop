import React from "react"
import {Switch, Route} from 'react-router-dom';
import Header from "./components/Header"
import Cart from "./views/Cart"
import Photos from "./views/Photos"

function App() {    
    return (
        <div>
           <Header />

           <Switch>
              <Route exact path="/">
                <Photos />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
           </Switch>
        </div>
    )
}

export default App