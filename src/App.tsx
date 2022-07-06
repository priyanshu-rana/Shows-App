import { Route, Routes } from "react-router-dom";
import ShowDetails from "./components/ShowDetails";
import ShowsList from "./components/ShowsList";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<ShowsList />} />
        <Route path="/shows/:showId" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;
