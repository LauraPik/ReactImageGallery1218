import Header from "../header/Header";
import Main from "../main/Main";
import Input from "../input/Input";
import {Button, Form} from 'react-bootstrap/Form';
import Search from "../search/Search";


function App() {
  return (
    <div className="App">
      <Header/>
      <Search />
      <Main />
      
    </div>
  );
}

export default App;
