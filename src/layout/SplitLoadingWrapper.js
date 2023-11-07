import { SplitLoadingProvider } from '@/constant/context';
import { useState } from 'react';

function SplitLoadingWrapper({children}) {
    const [isLoading, setIsLoading] = useState(false);

    return (
        <SplitLoadingProvider
            isLoading={isLoading}
            setIsLoading={setIsLoading}
        >
            {children}
        </SplitLoadingProvider>
    )
}

export default SplitLoadingWrapper