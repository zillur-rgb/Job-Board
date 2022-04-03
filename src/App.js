import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import SingleJob from "./Pages/SingleJob/SingleJob";
import { Wrapper } from "./App.style";
import SearchPage from "./Pages/SearchPage/SearchPage";
import SearchBar from "./Components/SearchBar/SearchBar";

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        <SearchBar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/:id" element={<SingleJob />} />
          <Route path="/:position" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
