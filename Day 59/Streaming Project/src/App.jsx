import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import PlayingComponent from './components/PlayingComponent';
import PublishingComponent from './components/PubslishingComponent';

function App() {
  return (
    <Router>
      <div>
        <h1>Live Streaming App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/publishing">Go to Publishing Component</Link>
            </li>
            <li>
              <Link to="/playing">Go to Playing Component</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/publishing" element={<PublishingComponent />} />
          <Route path="/playing" element={<PlayingComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
