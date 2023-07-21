//importar componentes

import Show from "./Componentes/Show";
import Create from "./Componentes/Create";
import Edit from "./Componentes/Edit";

//importamos router
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <>

      <div className="app">

      <BrowserRouter>
      <Routes>

        <Route path='/' element={ <Show/> } />
        <Route path='/create' element={ <Create/> } />
        <Route path='/edit/:id' element={ <Edit/> } />
      </Routes>
      </BrowserRouter>
      </div>
    </>
  )
}

export default App