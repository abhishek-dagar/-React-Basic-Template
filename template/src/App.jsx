import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout, PageWrapper } from "components";
import routes from "routes/routes";
import ProtectedPage from "components/common/ProtectedPage";

const App = () => {
  const renderRouteElement = (route) => {
    const routeElement = route.isProtected ? (
      <ProtectedPage>{route.element}</ProtectedPage>
    ) : (
      route.element
    );

    return route.state ? (
      <PageWrapper state={route.state}>{routeElement}</PageWrapper>
    ) : (
      routeElement
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {routes.map((route, index) =>
            route.index ? (
              <Route index key={index} element={renderRouteElement(route)} />
            ) : (
              <Route
                path={route.path}
                key={index}
                element={renderRouteElement(route)}
              />
            )
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
