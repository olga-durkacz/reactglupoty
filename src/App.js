
import './App.css';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
 import 'semantic-ui-css/semantic.min.css';
//import{tasks} from './tasks.json';

import Main from './pages/Main';
import From from './pages/Form';
import Help from './pages/Help';



// function listTasks(){
//    console.log(tasks);
//    let lst=[];
//    let data=JSON.parse(tasks)
//    for(let[key, value] of Object.entries(data)){
//     console.log(key);
//     console.log(value);
//     lst.push(`<li><a href="#${key}">${value}</a></li>`);

//    }
//    return lst;
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <Routes>
        
          <Route path='/' element={<Main/>} />
          <Route path='/Help' element={<Help/>} />
          <Route path='/Form/:id?/:unit?/:name?' element={<From/>} />
         
        </Routes>
       
        {<a
          className="App-link"
          href="Help"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pomoc (pytania i odpowiedzi)
        </a>}

      </header>
    </div>
  );
}


export default App;
