import { BodyWrapper } from "./components/BodyWrapper";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
function App() {
  return (
    <div className="relative w-screen h-screen">
      <Header />
      <BodyWrapper />
      <Footer />
    </div>
  );
}

export default App;
