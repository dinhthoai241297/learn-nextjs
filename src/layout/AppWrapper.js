import { AppProvider } from '@/constant/context';
import { useState } from 'react';

function AppWrapper({children}) {
    const [isFullScreenLoading, setIsFullScreenLoading] = useState(false);
    const [cartData, setCartData] = useState([]);

    return (
        <AppProvider
            isFullScreenLoading={{
                state: isFullScreenLoading,
                setState: setIsFullScreenLoading
            }}
            cartData={{
                state: cartData,
                setState: setCartData
            }}
        >
            {children}
        </AppProvider>
    )
}

export default AppWrapper