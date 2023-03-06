import { List, Listitem } from './components';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const date = new Date()
  const [alltods, setallTods] = useState([])
  const [error, setError] = useState()
  const  count = alltods.at(0)?.id ? alltods.at(0)?.id + 1 : 1;

  const handleTod = (evt) => {
    if (evt.target.value) {
      if (evt.keyCode === 13) {
        const newTods = {
          id: count,
          timeHour: date.getHours(),
          timeMin: date.getMinutes(),
          timeSec: date.getSeconds(),

          text: evt.target.value,
          isCompl: false,
        }

        setallTods([newTods, ...alltods])
        evt.target.value = null
      }
    }
    else {
      alert("Toldir")
    }
  }

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => setallTods(data))
    .catch(err => setError(err))
  }, [])

  return (
    <>
      <div className='conteiner'>
      <div className='border content rounded-bottom border-dark p-5 d-flex align-items-end'>
      <input className='form-control mt-3 mb-3' type="text" onKeyUp={handleTod} placeholder="Add todo" required/>
      <button className='btn btn-success ms-2 mb-3'>Submit</button>
      </div>
      
      {
        alltods.length > 0 && 
        <List>
          {
            alltods.map(todo => <Listitem key={todo.id} todos={todo} alltods={alltods} setallTods={setallTods}/>)
          }
        </List>
      }
      </div>

    </>
  );
}

export default App;
