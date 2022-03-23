import Layout from "./layout/Layout"
import Productos from "./components/Productos"
import NuevoProducto from "./components/NuevoProducto"
import EditarProducto from "./components/EditarProducto"
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>

          <Route index element={ <Productos />} />

          <Route path="productos">
            <Route path="nuevo" element={ <NuevoProducto />} />
            <Route path="editar/:id" element={ <EditarProducto />} />
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
