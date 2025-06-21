import "./App.css";
import NavigationBar from "./components/navigation/NavigationBar";
import { SearchBarProvider } from "./contexts/SearchBarContext";
import { CalenderContextprovider } from "./contexts/CalenderContext";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <div className="w-full h-[100vh] bg-white fixed">
      <CalenderContextprovider>
        <SearchBarProvider>
          <NavigationBar />
          {/* side menu + to do list */}
          <HomePage />
        </SearchBarProvider>
      </CalenderContextprovider>
    </div>
  );
}

export default App;
