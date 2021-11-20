import Navb from "./navb/navb";
import Login from "./pages/login/login";
import Todo from "./todolist/todolist";
import Watch from "./todolist/watch";
import './App.css';
import Register from "./pages/register/register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./pages/movies/movies";
import MovieDetails from "./pages/movies/moviesDetails";
import Favorites from "./pages/favorites/favorites";
import { LanguageProvider } from "./contexts/languageContext";
import { useSelector } from "react-redux";
import { useState } from "react";


function App() {
  const language = useSelector((state) => state.language.lang);
  const [lang, setLang] = useState("en");

  return (
    <div
      dir={language === "en" ? "ltr" : "rtl"}
      className={language === "en" ? "text-left" : "text-right"}
    >
    <Router>
    <LanguageProvider value={{ lang, setLang }}>
      <Navb />
      <div className="container my-5">
      <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/moviesDetails/:id" exact component={MovieDetails} />
          <Route path="/favorites" exact component={Favorites} />
        </Switch>
      </div>
      </LanguageProvider>

      </Router>

      {/* <Todo/> */ }
    </div >

  );
}

export default App;
