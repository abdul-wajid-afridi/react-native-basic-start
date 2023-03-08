import AcountsContextProvider from "./account_seller/context/AcountsContexts/AcountsContext";
import Index from "./account_seller/Index";

export default function App() {
  return (
    <AcountsContextProvider>
      <Index />
    </AcountsContextProvider>
  );
}
