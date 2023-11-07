import { useAppContext } from '@/constant/context';
import React from 'react';

const ComponentB = () => {
    const { isFullScreenLoading } = useAppContext();

    return (
        <div>
            ComponentB
            <br />
            isFullScreenLoading: {isFullScreenLoading.state ? 'true' : 'false'}
            <br />
            <button onClick={() => isFullScreenLoading.setState(prev => !prev)}>Toggle loading</button>
        </div>
    );
};

export default ComponentB;