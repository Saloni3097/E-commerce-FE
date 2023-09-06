import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import Routers from "./Routes/Routers";
function App() {
  return (
    <div>
      <ContextProvider>
        <Routers />
      </ContextProvider>
    </div>
  );
}

export default App;
