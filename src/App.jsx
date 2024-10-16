import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Quiz from './components/Quiz'
import Home from './components/Home'
import GameOverModal from './components/GameOverModal'
import Instructions from './components/Instructions'
import backgroundImage from './assets/pexels-leeloothefirst-5428836.jpg'
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Home />
    ),
  },
  {
    path: "/quiz",
    element: (
        <Quiz />
    ),
  },
  {
    path: "/instructions",
    element: (
        <Instructions />
    ),
  },
  {
    path: "/gameover",
    element: (
      <GameOverModal />
    ),
  },
]);

function App() {
  return (
    <>
      <div
        className="bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App
