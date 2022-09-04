import { Route, Routes } from "react-router-dom";
import {Navigation} from "./components/nav/Navigation";
import {BackupsPage} from "./pages/BackupsPage";
import {MainPage} from "./pages/MainPage";
import {ManagmentPage} from "./pages/ManagementPage";
import {OptionsPage} from "./pages/OptionsPage";

function App() {
  return (
    <div className="bg-[#546e7a] max-h-[100%] absolute left-0 right-0 top-0 bottom-0">
      <Navigation />
      <Routes >
        <Route path="/" element={ <MainPage /> } />
        <Route path="/backups" element={ <BackupsPage /> } />
        <Route path="/mng" element={ <ManagmentPage /> } />
        <Route path="/options" element={ <OptionsPage /> } />
      </Routes>
    </div>
  );
}

export default App;
