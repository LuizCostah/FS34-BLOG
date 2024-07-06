import PostPage from "./pages/PostPage";
import Home  from "./pages/Home";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from "react-router-dom";
  
  export default createBrowserRouter(
    createRoutesFromElements(

        <>
            <Route path="/" element={<Home />} />
            <Route path="/:postSlug" element={<PostPage />} />
        </> 
             
    )
  );
