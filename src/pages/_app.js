import AppWrapper from '@/layout/AppWrapper'
import SplitLoadingWrapper from '@/layout/SplitLoadingWrapper';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
    return (
        <AppWrapper>
            <SplitLoadingWrapper>
                <Component {...pageProps} />
            </SplitLoadingWrapper>
        </AppWrapper>
    );
}
