import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from '../types'

import clienteAxios from '../config/axios'

import Swal from 'sweetalert2'

//Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch( agregarProducto() )

        try {

            //insertar en la API
            await clienteAxios.post('/jojo',producto)

            //Si todo sale bien, actualizar el state
            dispatch( agregarProductoExito(producto) )
            
            //alerta con sweetalert2
            Swal.fire(
                'Correcto',
                'El producto se agregó correctamente',
                'success'
            )

        } catch (error) {
            console.log(error)
            //si hay un error cambiar el state
            dispatch( agregarProductoError(true) )

            //alerta error con sweetalert2
            Swal.fire({
                icon: 'error',
                tittle: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    } 
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//Si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//Si hubo un error
const agregarProductoError = estado => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
})