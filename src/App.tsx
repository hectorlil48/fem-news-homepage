import { useState } from "react";
import Nav from "./components/Nav";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <Nav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default App;
