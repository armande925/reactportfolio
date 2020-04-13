import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Index from "./pages/index";
import Contact from "./pages/contact";
import Portfolio from "./pages/portfolio";
import About from "./pages/about";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component = {Index}/>
                <Route exact path = "/about" component = {About}/>
                <Route exact path = "/portfolio" component = {Portfolio}/>
                <Route exact path = "/contact" component = {Contact}/>
                

                
            </Switch>
        </BrowserRouter>
    )
};

export default App;