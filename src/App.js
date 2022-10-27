
import './App.css';
import ComponentsArr from './Components/ComponentsArr';
import Number from './Components/Number';
import ComponentPosts from './Components/Posts/ComponentPosts';
import PostsOne from './Components/PostsOne/PostsOne';

function App() {

  return (
    <div className="App">
      <PostsOne/>
      {/* <ComponentPosts/> */}
      {/* <ComponentsArr/> */}
      {/* <Number/> */}
    </div>
  );
}

export default App;

// масив і внизу виклик функції, напиши функцію в якій по id буде мінятись значення в selected з false на true того айтема, яку id передають
