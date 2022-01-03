// APP.js
import './App.css';
import Header from './Header';
import Data from './Data';
import Footer from './Footer'

function App() {
  

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <Data />
      </main>
      <Footer />
    </div>
    
  );
}

export default App;
