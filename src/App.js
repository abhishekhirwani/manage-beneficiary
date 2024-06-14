import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./components/store";

const ManageBeneficiaries = lazy(() =>
  import("./components/ManageBeneficiaries")
);
const AddBeneficiary = lazy(() => import("./components/AddBeneficiary"));
const EditBeneficiary = lazy(() => import("./components/EditBeneficiary"));
const ViewBeneficiary = lazy(() => import("./components/ViewBeneficiary"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ManageBeneficiaries />} />
            <Route path="/add" element={<AddBeneficiary />} />
            <Route path="/view/:id" element={<ViewBeneficiary />} />
            <Route path="/edit/:id" element={<EditBeneficiary />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
