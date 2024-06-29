import Header from "./components/Header"
import FormBase from "./components/FormBase"
import { Search } from "lucide-react"
import PostHeader from "./components/PostHeader"
import { Children } from "react"
import PostContent from "./components/PostContent"



function App() {

  return (
    <>
    <Header className="bg-black flex py-3 px-10 shadow-sm shadow-black">
      <h2 className="text-white text-2xl font-semibold">FS34 Blog</h2>
      <FormBase className="text-center flex">
        <input type="text" className="ml-5 mt-1 w-96 h-8 rounded-xl outline-none text-center border shadow-black shadow"/>
        <Search size={28} absoluteStrokeWidth className="text-white mt-1 cursor-pointer ml-1"/>
      </FormBase>      
    </Header>    
    <PostHeader />
    <PostContent />
      
    
    
    </>
  )
}

export default App
