import logo from './logo.svg';
import './index.css';
import './App.css';
import  Navbar from './components/homepage/navbar';
import  Homepage from './components/homepage/homepage';
function App() {
  return (
    <>
    <Homepage/>
    
    <Navbar/>

    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>

  </>
  );
}

export default App;
