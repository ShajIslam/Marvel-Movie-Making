
import { useState } from 'react'
import './App.css'
import Actors from './components/Actors/Actors';
import Carts from './components/Carts/Carts';
import Budget from './components/Budget/budget';

function App() {
  const [selectedActors , setSelectedActors] = useState([]);
  const [remainingBudget, setRemainingBudget] = useState(0);
  const [totalBudget , setTotalBudget] = useState(0);


  const handleSelectedActor = (actor)=>{

    const isExists = selectedActors.find(item => item.id === actor.id);
    let count = actor.salary;

    if(isExists){
      return alert('already selected')
    }else{

      selectedActors.forEach(item => {
        count = count + item.salary;
      })
      
      const remaining = 20000 - count;

      if(count > 20000){
        return alert('Paisa khatam!')
      }
     setRemainingBudget(remaining);
     setTotalBudget(count);

      const newSelectedActor = [...selectedActors, actor];
      setSelectedActors(newSelectedActor)
    }
    
    // console.log(actor);
  }
  

  return (
    <>
      
      <h1 className='text-3xl font-bold'>Marvel Movie Makeing Casts</h1>

      <div className='flex'>
      <Actors handleSelectedActor={handleSelectedActor}></Actors>
      
      <div>
       <h1 className="text-2xl font-bold">ADD TO CART</h1>
       <br />
       <Budget
       remainingBudget={remainingBudget}
       totalBudget={totalBudget}
       ></Budget>
       <br />
       <Carts 
       selectedActors = {selectedActors}
       ></Carts>
       
       </div>
       
      </div>
     
      
    </>
  )
}

export default App
