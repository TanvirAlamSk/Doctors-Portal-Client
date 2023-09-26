import 'react-day-picker/dist/style.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App px-6 lg:px-20 ">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
