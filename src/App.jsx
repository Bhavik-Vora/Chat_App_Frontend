import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { lazy } from "react";
import ProtectRoute from "./components/auth/ProtectRoute.jsx";
import { LayoutLoader } from "./components/layout/Loaders.jsx";
import { server, userendpoint } from "./constants/config.js";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userExists, userNotExists } from "./redux/reducer/auth.js";
import { Toaster } from "react-hot-toast";
import { SocketProvider } from "../socket.jsx";

const Home = lazy(() => import("./pages/Home.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Groups = lazy(() => import("./pages/Groups.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const AdminLogin = lazy(() => import("./pages/Admin/AdminLogin.jsx"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard.jsx"));
const UserManagment = lazy(() => import("./pages/Admin/UserManagment.jsx"));
const ChatManagment = lazy(() => import("./pages/Admin/ChatManagment.jsx"));
const MessageManagment = lazy(() =>
  import("./pages/Admin/MessageManagment.jsx")
);
const NotFound  = lazy(() => import("./pages/Admin/NotFound.jsx"));

const App = () => {
  const { user, loader } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
   

    axios
      .get(`${userendpoint}/profile`, { withCredentials: true })
      .then(({ data }) => dispatch(userExists(data.user)))
      .catch((error) => console.log(error));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route
            element={
              <SocketProvider>
                <ProtectRoute user={user} />
              </SocketProvider>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/groups" element={<Groups />} />
            <Route path="/chat/:chatId" element={<Chat />} />
          </Route>

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
          <Route path="/admin/chats" element={<ChatManagment />} />
          <Route path="/admin/messages" element={<MessageManagment />} />
          <Route path="/admin/users" element={<UserManagment />} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
      </Suspense>
      <Toaster position="bottom-center" />
    </BrowserRouter>
  );
};

export default App;
