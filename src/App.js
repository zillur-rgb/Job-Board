import Header from "./Components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import SingleJob from "./Pages/SingleJob/SingleJob";
import { Wrapper } from "./App.style";

function App() {
  return (
    <Wrapper>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<SingleJob />} />
        </Routes>
      </BrowserRouter>
    </Wrapper>
  );
}

export default App;
