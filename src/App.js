// APP.js

import './App.css';
import Header from './Header';
import Form from './Form';
import Footer from './Footer'


function App() {

  
  return (
    
    <div className="App">


      <Header className="wrapper"/>

      <main className="wrapper">

        <Form />


      </main>

      <Footer/>

    </div>
  );
}



export default App;
