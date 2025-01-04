import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      </main>
  )
}

export default App
