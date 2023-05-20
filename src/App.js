import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScrollText } from "./ScrollText";
import Header from "./components/Header";
import Section2 from "./Section2";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const content = [
  "In Chronicle everything is made",
  "with Blocks that come with pixel",
  "perfect design, interactivity and",
  " motion out of the box. Instead of",
  "designing from scratch, simply",
  " choose the right one from our",
  "library of blocks and see the",
  "magic unfold.",
];

function App() {
  return root.render(
    <StrictMode>
      <Header/>
      <section style={{color: 'white', marginLeft: '-15%', marginTop: '-12%'}}>Scroll Down for Section 1</section>
      <ScrollText content={content} />
      <Section2 />
    </StrictMode>
  );
}

export default App;
