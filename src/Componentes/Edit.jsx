import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"



const Edit = () => {

  const [ Nombre, setNombre ] = useState('')
  const [ Usuario, setUsuario ] = useState("")

  const navigate = useNavigate()
  const {id}= useParams()

  const update= async (e) => {
    e.preventDefault()
    const Admin= doc(db, "Administrador", id)
    const data = {Nombre:Nombre, Usuario:Usuario}
    await updateDoc(Admin, data)
    navigate ('/')
  }

  const getAdministradorById = async (id) =>{
    const Admin = await getDoc(doc(db, "Administrador", id))
    if(Admin.exists()) {
      setNombre(Admin.data().Nombre)
      setUsuario(Admin.data().Usuario)

    }
  }

  useEffect( () => {
    getAdministradorById(id)

  
  }, [])

  return (
<>
        {/* Botones */}
        <div className='container'>
        <div className='row'>
        <div className='col'>
          <h1>Editar Usuario</h1>
          <form onSubmit={update}>
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
            <button type="submit" className="btn btn-primary mt-2">Actualizar</button>
          </form>
        </div>
      </div>
    </div>

</>
)
}

export default Edit
