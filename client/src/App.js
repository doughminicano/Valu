import logo from './logo.svg';
import './App.css';
import Main from './components/Main';
import { Router, Link } from "@reach/router";
import NewItem from './components/NewItem';
import ItemInfo from './components/ItemInfo';
import EditItem from './components/EditItem';
import background from "./img/baddie.png";


function App() {
  return (
    <div className="App">
      <h1>Welcome to ValU!</h1>
      <Link className="btn btn-primary m-1" to="/new">Add new Item</Link>
      <Link className="btn btn-secondary m-1" to="/">View Items</Link>


      <Router>

        <Main path="/"></Main>
        <NewItem path="/new"></NewItem>
        <ItemInfo path="/items/:itemid"></ItemInfo>
        <EditItem path="/items/edit/:itemid"></EditItem>

      </Router>

    </div>
  );
}

export default App;
