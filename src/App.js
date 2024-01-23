import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/routes';
function App() {
  return (
    <div className="App">
    <div className='w-[1440px] m-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </div>
  );
}

export default App;
