import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { privateRoutes, publicRoutes } from "./router";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> 
          {/* this will render list route in router > index.ts */}
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
          {privateRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
