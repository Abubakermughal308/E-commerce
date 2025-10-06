import { Provider } from "react-redux";
import TodoList from "./components/TodoList/TodoList";

import Store from "./utils/Store";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import { useState } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import ProductDetails, {
  Details,
  FAQS,
  RatingAndReviews,
} from "./components/ProductDetails";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import useOnlineStatus from "./utils/useOnlineStatus";
import { Divide } from "lucide-react";

function App() {
  const [SearchVisible, setSearchVisible] = useState(false);
  const [inputText, setInputText] = useState("");

  const onlineStatus = useOnlineStatus();

  return onlineStatus === false ? (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black text-white gap-2">
      <div className="text-2xl font-bold ">Looks like you are Offline </div>
      <div>Check your internet and try again</div>
    </div>
  ) : (
    <>
      {/* <TodoList /> */}
      <BrowserRouter>
        <Header
          setSearchVisible={setSearchVisible}
          inputText={inputText}
          setInputText={setInputText}
        />
        <Provider store={Store}>
          {/* <RouterProvider router={appRouter}/> */}

          <Routes>
            <Route
              path="/"
              element={
                <MainContainer
                  setSearchVisible={setSearchVisible}
                  SearchVisible={SearchVisible}
                  inputText={inputText}
                  setInputText={setInputText}
                />
              }
            >
              <Route
                path="/"
                element={
                  <MainPage
                    setSearchVisible={setSearchVisible}
                    SearchVisible={SearchVisible}
                    inputText={inputText}
                    setInputText={setInputText}
                  />
                }
              />
              <Route path="/product" element={<ProductDetails />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </Provider>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
