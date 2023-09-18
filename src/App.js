import 'react-day-picker/dist/style.css';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';

function App() {
  return (
    <div className="App px-6 lg:px-20 ">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
