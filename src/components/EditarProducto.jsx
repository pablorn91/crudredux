import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { editarProductoAction } from '../actions/productoActions'

const EditarProducto = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    //nuevo State de producto
    const [ producto, setProducto ] = useState({
        nombre: '',
        precio: ''
    })

    //producto a editar
    const productoEditar = useSelector( state => state.productos.productoEditar)

    //llenar el state automaticamente
    useEffect(() => {
        setProducto(productoEditar)
    }, [productoEditar])

    //Leer los datos del formulario
    const handleOnChange = e => {
        setProducto({
            ...producto,
            [e.target.name]: e.target.value
        })
    }
    
    const { nombre ,precio } = producto;

    const handleSubmit = e => {
        e.preventDefault()
        
        dispatch( editarProductoAction(producto) )
        navigate('/')
    }

  return (
    <div className='row justify-content-center'>
        
    <div className='col-md-8'>
        <div className="card">
            <div className="card-body">
                <h2 className='text-center mb-4 font-weight-bold'>
                    Editar Producto
                </h2>

                <form
                    onSubmit={handleSubmit}
                >
                    <div className='form-group'>
                        <label htmlFor='nombre'>Nombre Producto</label>
                        <input 
                            type="text"
                            className='form-control'
                            placeholder='Nombre Producto' 
                            name='nombre'
                            value={nombre}
                            onChange={handleOnChange}
                        />
                    </div>

                    <div className='form-group'>
                        <label htmlFor='precio'>Precio Producto</label>
                        <input 
                            type="number"
                            className='form-control'
                            placeholder='Precio Producto' 
                            name='precio'
                            value={precio}
                            onChange={handleOnChange}
                        />
                    </div>

                    <button
                        type='submit'
                        className='btn btn-primary font-weight-bold text-uppercase d-block w-100'
                    >Guardar Cambios</button>

                </form>
            </div>
        </div>
    </div>

</div>
  )
}

export default EditarProducto