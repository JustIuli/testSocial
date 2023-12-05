import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { NextUIProvider } from "@nextui-org/react";
import MessagesPageDesktop from "./pages/messages/MessagesPageDesktop";
import MessagesPageMobile from "./pages/messages/MessagesPageMobile";
import PostsPage from "./pages/PostsPage";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";
import NotificationPage from "./pages/NotificationPage";
import VideosPage from "./pages/VideosPage";
import { ReactNode } from "react";
import { ReactChild, ReactChildren } from "react";
function App() {
  type Props = {
    children: ReactNode;
  };
  
  const Desktop = ({ children } : Props) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const TabletAndBelow = ({ children } : Props) => {
    const isTabletAndBelow = useMediaQuery({ query: "(max-width: 1279px)" })
  
    return isTabletAndBelow ? children : null
  }
  return (
    <>
          <NextUIProvider>
              <Router>
                  <Routes>


                        <Route path="/" element={<LandingPage/>}></Route>
                        <Route path="/login" element={<LoginPage/>}></Route>
                        <Route path="/register" element={<RegisterPage/>}></Route>

                        <Route path="/posts" element={<PostsPage/>}></Route>
                        <Route path="/search" element={<SearchPage/>}></Route>
                        <Route path="/user/:username" element={<UserPage/>}></Route>
                        <Route path="/notifications" element={<NotificationPage/>}></Route>
                        <Route path="/videos" element={<VideosPage/>}></Route>


                        <Route path="/terms" element={<h1>Terms</h1>}></Route>
                        <Route path="/copyright" element={<h1>Copyright</h1>}></Route>


                        <Route path="/messages" element={
                          <>
                              <Desktop>
                                  <MessagesPageDesktop/>
                              </Desktop>
                              <TabletAndBelow>
                                  <MessagesPageMobile/>
                              </TabletAndBelow>
                          </>
                        }></Route>
                  </Routes>
            </Router>
          </NextUIProvider>
    </>
  );
}

export default App
