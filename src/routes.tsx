import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomeScreen } from './screens/Home.screen';

const RouteComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <HomeScreen />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;