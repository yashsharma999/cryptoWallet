import Footer from "./components/Footer";
import MainApp from "./components/MainApp";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <div
      style={{
        maxWidth: "400px",
        background: "whitesmoke",
        height: "100vh",
        position: "relative",
        fontFamily: "Poppins",
      }}
    >
      <Navbar />
      <MainApp />
      <Footer />
    </div>
  );
}

export default App;
