import './App.css';
import Nav from './shared-components/Nav';
import Footer from './shared-components/Footer';
import MainBoard from './components/Main-Board';

function App() {
  return (
    <div className="app">
      <Nav></Nav>
      <MainBoard></MainBoard>
      <Footer></Footer>
    </div>
  );
}

export default App;
