import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./router";
import Container from "./components/layout/Container";
import type RouterType from "./types/_router";
import { Fragment } from "react"; // Thẻ này là thẻ chưá, nó k sinh ra thẻ trong DOM

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* this will render list route in router > index.ts */}
          {publicRoutes.map((route: any, index) => {
            const Page = route.component;

            //logic check layout component of page
            const Layout =
              route.layout === null
                ? Fragment
                : route.layout
                ? route.layout
                : Container;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          {/* {privateRoutes.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })} */}
          {/* <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
