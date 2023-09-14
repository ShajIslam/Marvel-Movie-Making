import { useEffect, useState } from "react";
import Actor from "../Actor/Actor";


const Actors = ({handleSelectedActor}) => {
    const [actors, setActors] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(response => response.json())
        .then(data => setActors(data));

    },[])


    return (
        <>
       
        <div className="w-2/3 flex flex-wrap gap-10">
           {
             actors.map((actor, idx) => <Actor
              actor ={actor}
              key={idx}
              handleSelectedActor={handleSelectedActor}
              
             ></Actor>)
           }

       
        </div>
        </>
    );
};

export default Actors;