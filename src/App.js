import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import SingleJob from "./Pages/SingleJob/SingleJob";
import { Wrapper } from "./App.style";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/:id" element={<SingleJob />} />
          <Route path="/searchresult" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
