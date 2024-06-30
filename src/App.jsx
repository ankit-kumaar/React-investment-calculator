import Header from "./components/Header.jsx"
import UserInput from "./components/UserInput.jsx"
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});
  return (
    <> 
    {/* because multiple jsx are needed to be rendered so fragments are needed(<> a,b,c</>) */}
    <Header />
    <UserInput onChange={handleChange}/>
    </>
  )
}

export default App
