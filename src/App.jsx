import Layout from "./layout/Layout"
import Productos from "./components/Productos"
import NuevoProducto from "./components/NuevoProducto"
import EditarProducto from "./components/EditarProducto"
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//redux
import { Provider } from 'react-redux'
import store from "./store"

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={ <Layout /> }>

            <Route index element={ <Productos />} />

            <Route path="productos">
              <Route path="nuevo" element={ <NuevoProducto />} />
              <Route path="editar/:id" element={ <EditarProducto />} />
            </Route>

          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
