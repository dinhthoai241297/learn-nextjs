import createCtx from "@/utils/createCtx";

const [AppProvider, useAppContext] = createCtx("AppProvider");
const [SplitLoadingProvider, useSplitLoadingContext] = createCtx("SplitLoadingProvider");

export {
    AppProvider,
    useAppContext,
    SplitLoadingProvider,
    useSplitLoadingContext,
}