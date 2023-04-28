import React from 'react';
import '../App.css';
import logo from '../ZSE-banner.png';
import tasks from '../tasks.json';
import Form from './Form';
import { Link } from 'react-router-dom';
  
const Main = () => {
  return (
    <div className="App">
    <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        <h2 className="tut">
         Olga Durkacz System zgłoszeń praw uczniów
        </h2>
        <ol id="tasks">
          {/*listTasks()*/}
          {Object.keys(tasks).map( (key,value)=>{
           // return <li><a href={'#'+String(key)} >{tasks[key]}</a></li>;
          //return <li><a href="Form" >{tasks[key]}</a></li>;
          return <li><a href={'/Form/'+String(key)} >{tasks[key]}</a></li>;
          })
          }
        </ol>
          <Link to='/Help'>POMOC</Link>
        </header>
    </div>
  );
};
  
export default Main;