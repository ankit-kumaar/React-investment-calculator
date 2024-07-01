import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx"
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
});
function handleChange(inputIdentifier, newValue){
  setUserInput(prevUserInput => {
      return {
          ...prevUserInput,
          [inputIdentifier]: newValue,
  };
});
}
  return (
    <> 
    {/* because multiple jsx are needed to be rendered so fragments are needed(<> a,b,c</>) */}
    <Header />
    <UserInput userInput={userInput} onChange={handleChange}/>
    <Results input={userInput}/>
    </>
  )
}

export default App
