import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

import "./styles/components/app.sass";

function App() {
  
  return (
    <div className="App" id="curriculum">
      <h1>Weverson Diazz</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App
