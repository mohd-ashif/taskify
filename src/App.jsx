import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Task from './pages/Task';
import Users from './pages/User';
import TaskDetails from './pages/TaskDetails';
import Login from './pages/Login';
  


function Layout() {
  const user = ""
  const location = useLocation();

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row-reverse'>
      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>
        <Sidebar />
      </div>

      <MobileSidebar />

      <div className='flex-1 overflow-y-auto'>
        <Navbar />

        <div className='p-4 2xl:px-10'>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/log-in' state={{ from: location }} replace />
  );
}


function App() {
  return (
    <Router>
      <main className='w-full min-h-screen bg-[#f3f4f6]'>
        <Routes>
          <Route element={<Layout />} />
          <Route path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/task' element={<Task />} />
          <Route path='/completed:status' element={<Task />} />
          <Route path='/in-pogress/:status' element={<Task />} />
          <Route path='/todos/:status' element={<Task />} />
          <Route path='/team' element={<Users />} />
          <Route path='/trashed' element={<Task />} />
          <Route path='/task/:is' element={<TaskDetails />} />
          <Route path='/log-in' element={<Login />} />
         
          <Route path='*' element={<Navigate to='/dashboard' />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;