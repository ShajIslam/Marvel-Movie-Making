import './Actor.css'

const Actor = ({actor, handleSelectedActor}) => {
 const {image, name, salary, role} = actor;
    
    return (
        <div>
        <div className="card-container my-10">
        <img className="photo w-36 ml-14" src={image} alt="" />
        <div className='my-5'>
        <h1 className='font-bold text-2xl'>{name}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit beatae !</p>
        </div>
        <div className='flex justify-between'>
           <p>Salary: {salary}$</p>
           <p> Role: {role}</p>
        </div>
        <br />
        <button onClick={()=>handleSelectedActor(actor)} className='p-2 bg-lime-500 text-white hover:bg-lime-700 text-sm'>Select</button>
        </div>


        </div>
    )
};

export default Actor;