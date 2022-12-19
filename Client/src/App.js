import { ThemeProvider } from "@emotion/react";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Home } from "./page/Home";
import { Video } from "./page/Video";
import { Login } from "./page/Login";
function App() {
  return (
    <section className="flex flex-row font-roboto ">
      <Router>
        <Menu />
        <main className="flex-[7_7_0%] bg-[#f7ebe6] dark:bg-black ">
          <Navbar />

          <wrapper className="pt-[22px] pr-[96px] pl-[96px] ">
            <Routes>
              <Route path="/">
                <Route index element={<Home />} />
                <Route path="signin" element={<Login />} />
                <Route path="video">
                  <Route path=":id" element={<Video />} />
                </Route>
              </Route>
            </Routes>
          </wrapper>
        </main>
      </Router>
    </section>
  );
}

export default App;
