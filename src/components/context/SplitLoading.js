import { useSplitLoadingContext } from '@/constant/context';
import React from 'react';

const SplitLoading = () => {
    const { isLoading, setIsLoading } = useSplitLoadingContext();

    return (
        <div>
            SplitLoading
            <br />
            isLoading: {isLoading ? 'true' : 'false'}
            <br />
            <button onClick={() => setIsLoading(prev => !prev)}>Toggle</button>
        </div>
    );
};

export default SplitLoading;