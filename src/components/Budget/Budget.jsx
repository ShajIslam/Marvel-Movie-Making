
const Budget = ({remainingBudget,totalBudget}) => {
    return (
        <div className="w-60 bg-lime-400 rounded p-5 sticky top-5">
        
            <h1>Total Budget: {totalBudget}$</h1>
            <h1>Remaining : {remainingBudget}$</h1>
        
          
     
        </div>
    );
};

export default Budget;