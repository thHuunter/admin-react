import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import  {collection, getDocs, getDoc, deleteDoc, doc} from 'firebase/firestore'
import { db } from './../firebaseConfig/firebase'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
// eslint-disable-next-line no-unused-vars
const MySwal = withReactContent(Swal)

const Show = () => {
    // configurar los hooks
    const[Administrador, setAdministrador] = useState( [] )

    // referenciamos la DB firebase
    const AdministradorCollection = collection (db, "Administrador")

    // funcion para TODOS los documentos
    const getAdministrador = async ()  => {
        const data= await getDocs(AdministradorCollection)
        setAdministrador(
        data.docs.map( (doc) => ( {...doc.data(), id:doc.id}) )
      )
    }
    // funcion para eliminar doc
    const deleteAdministrador = async (id) => {
      const Administradordoc = doc(db, "Administrador", id)
      await deleteDoc(Administradordoc)
      getAdministrador
      }
    

    // usamos useEffect
    useEffect( () => {

      getAdministrador()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] )
        

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="d-grip gap-2">
            <Link to='/create' className='btn btn-secondary mt-2 mb-2'>Create</Link>
          </div>
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Nombres</th>
                <th>Usuario</th>
                <th>Accion</th>
              </tr>
            </thead>

            <tbody style={{color: "red"}}>
              { Administrador.map ( (Admin) => (
                <tr key={Admin.id}>
                  <td>{Admin.Nombre}</td>
                  <td>{Admin.Usuario}</td>
                  <td>
                {/* botones editar-borrar */}
                  <Link to={'/edit/${Admin.id}'} className='btn btn-light me-2'><i className="fa-regular fa-pen-to-square"></i></Link>
                    <button onClick={ () => {deleteAdministrador(Admin.id)}}  className='btn btn-danger'><i className="fa-solid fa-trash-can"></i></button>
                    {/* ------ */}
                  </td>
                </tr>
              ) ) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Show

