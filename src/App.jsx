import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./componant/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryItem from "./componant/CountryItem";
import AppLayOut from "./componant/AppLayOut";
import { ProvideContext } from "./hooks/ProvideContext";
import { DarkMode } from "./hooks/DarkMode";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <DarkMode>
        <ProvideContext>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Header />
              <Routes>
                <Route path="/" element={<AppLayOut />} />
                <Route path="/country/:id" element={<CountryItem />} />
                <Route path="*" element={<div>Not Found</div>} />{" "}
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </ProvideContext>
      </DarkMode>
    </>
  );
}

export default App;
