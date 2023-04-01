import Hero from "./jsx files/Hero";
import Register from "./jsx files/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />}>
            <Route path="/Home" element={<Hero />} />
            <Route path="/Register" element={<Register />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
            {/* <Route path="contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
