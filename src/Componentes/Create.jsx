import {useState} from "react"
// eslint-disable-next-line no-unused-vars
import { Await, useNavigate } from "react-router-dom"

import { collection, addDoc } from "firebase/firestore"
import { db } from './../firebaseConfig/firebase'


const Create = () => {
  const [ Nombre, setNombre ] = useState('')
    const [ Usuario, setUsuario ] = useState("")
    const navigate = useNavigate()

    const AdministradorCollection = collection(db, "Administrador")

    const store = async (e) => {
      e.preventDefault()
      await addDoc( AdministradorCollection, { Nombre: Nombre , Usuario: Usuario} )
      navigate('/')
    }

  return (

    <>
    {/* Botones */}
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <h1>Crear Usuario</h1>
          <form onSubmit={store}>
            <div className='mb-3'>
              <label className="form-label">Nombre</label>
              <input
              value={Nombre}
              onChange={ (e)=> setNombre(e.target.value)}
              type="text"
              className="form-control"
              required
              />
            </div>
            
            <div>
              <label className="form-label">Usuario</label>
              <input
              value={Usuario}
              onChange={ (e)=> setUsuario(e.target.value)}
              type="email"
              className="form-control"
              required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Crear</button>
          </form>
        </div>
      </div>
    </div>
      {/* ------- */}
    </>
  )
}

export default Create
