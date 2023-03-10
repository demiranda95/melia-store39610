import './App.css'
import SiteNavbar from './components/SiteNavbar/SiteNavbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='App'>
      <SiteNavbar />
      <ItemListContainer greeting={'Bienvenidos a Melia Store'} />
    </div>
  )
}

export default App
