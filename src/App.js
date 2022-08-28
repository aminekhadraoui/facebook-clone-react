
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
function App() {
  const user = "hello"
  return (
    <div className="app">
      
      <Header />

      <div className='app__body'>
        {!user ? (
          <Login />
        ) : (
        <>
        <Sidebar/>
        <Feed />
        <Widgets/>
        </>
        )}
      </div>
    </div>
    
  );
}

export default App;
