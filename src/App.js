import { useContext } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { userInputs, productInputs } from "./formSource";
import "./styles/dark.scss";
import { DarkModeContext } from "./context/darkModeContext";
import {
  userColumns,
  userRows,
  productRows,
  productColumns,
} from "./dataTableSource";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="users">
              <Route
                index
                element={
                  <List rows={userRows} columns={userColumns} title="Users" />
                }
              />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={userInputs}
                    rows={userRows}
                    columns={userColumns}
                    title="Add New User"
                  />
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <List
                    rows={productRows}
                    columns={productColumns}
                    title="Products"
                  />
                }
              />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={
                  <New
                    inputs={productInputs}
                    rows={productRows}
                    columns={productColumns}
                    title="Add New Product"
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
