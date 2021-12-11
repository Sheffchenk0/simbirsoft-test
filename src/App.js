import { lazy } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const Matches = lazy(() => import('./Pages/Matches/Matches'));

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Switch>
          <Route path="/matches" render={() => <Matches />} />
          {/* <Route path="/" render={() => <Form />} /> */}
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
