import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import { SearchBarProvider } from "./contexts/SearchBarContext";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <div className="w-full h-[100vh] bg-white">
      <SearchBarProvider>
        <NavigationBar />
          {/* side menu + to do list */}
        <HomePage />
      </SearchBarProvider>
    </div>
  );
}

export default App;
