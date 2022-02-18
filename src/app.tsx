import './app.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import routes from './routes'

function Index() {
  return <div>cd design mobile</div>
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        {
          routes.map(item => (
            <li key={item.path}><Link to={item.path}>{item.title}</Link></li>
          ))
        }
      </ul>
      <Routes>
        <Route path='/' element={<Index />} />
        {
          routes.map(item => (
            <Route path={item.path} key={item.path} element={<item.component />} />
          ))
        }
      </Routes>
    </BrowserRouter>
  )
}

export default App
