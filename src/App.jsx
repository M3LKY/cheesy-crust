import Front from './components/Front';
import About from './components/About';
import Menu from './components/Menu';
import './index.css'
function App() {
  return (
    <div className='h-full bg-dark bg-repeat max-w-[1800px] mx-auto overflow-hidden'>
      <Front />
      <About />
      <Menu />
     
      <div className='h-[380px] md:h-[370px]'></div>
    </div>
  )
}

export default App
