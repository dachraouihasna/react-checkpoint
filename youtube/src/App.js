import logo from './logo.svg';
import './App.css';
import { comments, suggestions, mainVideo } from './Data/data.js';
import SuggestionList from './components/Suggestions';
import MainVideos from './components/MainVideo';
import Comments from './components/comments';




function App() {
  return (
    <div className='App'>
      <div>
        <MainVideos mainVideo={mainVideo} />
        <br/>
        <Comments comments={comments} />
      </div>
      <div>
        <SuggestionList suggestions={suggestions} />
      </div>
    </div>
  );
}

export default App;
