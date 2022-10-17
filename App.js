import './App.css';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div id="main">
        <div className='container'>
          <div className="community">
            <h2 className="community-header">Join our community</h2>
            <h3>This page is an overview of the React documentation and related resources.</h3>
            <p>This page is an overview of the React documentation and related resources.<br/>This page is an overview of 
            the React documentation and related resources.This page is an overview of the React documentation and related resources.</p>
          </div>
          <div className="card-details">
            <div className="card">
              <h3 className="card-header">Monthly Subscription</h3>
              <div className='btn'>
               <a href='#'>Sign up</a>
              </div>
            </div>
            <div className="why-us">
              <h4 className="why-us-header">Why Us</h4>
              <p>Tutorials by industry experts Peer & expert code review Coding exerciss Access yo our GitHub repos community forum Flashcard decks</p>
            </div>
          </div>
        </div>
      </div>




    </div>
  );
}

export default App;
