import Login from './components/login/Login'
import Contact from './components/Contact'
import TodoList from './components/todolist/TodoList'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/signup/Signup'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/todolist' element={<TodoList/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
