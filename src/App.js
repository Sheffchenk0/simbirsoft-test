import { lazy } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const Matches = lazy(() => import('./Pages/Matches/Matches'));
const Team = lazy(() => import('./Pages/Team/Team'));
const Competitions = lazy(() => import('./Pages/Competitions/Competitions'));
const League = lazy(() => import('./Pages/League/League'));

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/matches" component={Matches} />
          <Route path="/competitions/" component={Competitions} />
          <Route path="/team/:id" component={Team} />
          <Route path="/competition/:id" component={League} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
