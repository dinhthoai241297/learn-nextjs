import { useAppContext } from '@/constant/context';
import React from 'react';

const ComponentA = () => {
    const { cartData } = useAppContext();

    console.log("ComponentA - Cart ______ render");

    return (
        <div>
            ComponentA - Cart
            {cartData.state.map((el, index) => <div key={index}>{el}</div>)}
        </div>
    );
};

export default ComponentA;