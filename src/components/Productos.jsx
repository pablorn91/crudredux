import { useEffect } from 'react'
import Producto from './Producto'
import Spinner from './Spinner'

//Redux
import { useDispatch, useSelector } from 'react-redux'

//Actions de Redux
import { obtenerProductosAction } from '../actions/productoActions'

const Productos = () => {

  const dispatch = useDispatch()

  useEffect(()=> {
    //consultar la api
    const cargarProductos = () => dispatch( obtenerProductosAction())
    cargarProductos()
    //es-lint-disable-next-line
  }, [])

  //Obtener el state
  const productos = useSelector( state => state.productos.productos )
  const error = useSelector( state => state.productos.error )
  const cargando = useSelector( state => state.productos.loading )


  
  return (
    <>
        <h2 className="text-center my-5">Listado de Productos</h2>

        { error && <p className='font-weight-bold alert alert-danger text-center mt-4'>Hubo un error</p>}

        { cargando ? <Spinner /> :

        productos.length === 0 ? <p className='font-weight-bold text-center mt-4'>No hay productos</p> : (

        <table className="table table-striped"> 
            <thead className="bg-primary table-dark">
                <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
              {productos.map(producto => (
                  <Producto 
                    key={producto.id}
                    producto={producto}
                  />
                ))}
            </tbody>
        </table>
        ) }
        
    </>
  )
}

export default Productos