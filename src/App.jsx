import { DetailsProvider } from "./components/Details"
import Home from "./Home/Home"

function App() {
  return (
    <>
    <DetailsProvider>
      <Home />
    </DetailsProvider>
    </>
  )
}

export default App
