import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import { SearchBarProvider } from "./contexts/SearchBarContext";
function App() {
  return (
    <div className="">
      <SearchBarProvider>
        <NavigationBar />
      </SearchBarProvider>
    </div>
  );
}

export default App;
