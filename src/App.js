import "./App.css";
import Header from "./components/header/Header";
import MainContent from "./components/content/MainContent";
import Map from "./components/map/Map";
import ContextProvider from "./store/ContextProvider";

function App() {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <MainContent />
        <Map />
      </ContextProvider>
    </div>
  );
}

export default App;
