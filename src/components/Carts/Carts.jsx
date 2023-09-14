import React from 'react';
import Cart from '../Cart/Cart';

const Carts = ({selectedActors}) => {
    return (
        <div>
            <h1>Actor: {selectedActors.length}</h1>
            
             {selectedActors.map((selectedActor, idx) => <Cart
             key={idx}
             selectedActor={selectedActor}
             ></Cart> )}
        </div>
    );
};

export default Carts;