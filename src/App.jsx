

function Header({children}) {
  return (
    
    <header className="bg-white-500">
      <nav className="mx-auto flex items-center p-6 shadow-md">
        {children}       
      </nav>
    </header>
  )
}

function HeaderLink({href,children}) {
  return (

    <a href={href} classeName="font-semibold leading-6 text-black" >{children}</a>
  )
  
}




function App() {

  return (
    <>        
      <Header>
        <HeaderLink href="#">Company</HeaderLink>
        <HeaderLink href="#">MarketPlace</HeaderLink>
      </Header> 
           
    </>   
  )
}

export default App
