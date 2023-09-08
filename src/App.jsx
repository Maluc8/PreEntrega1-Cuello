import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

function App() {
const greeting = 'Bienvenido';
  return (<>
    <Navbar/>
    <ItemListContainer greeting={greeting}/>
  </>);
}

export default App
