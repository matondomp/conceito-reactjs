import React from "react";

import "./styles.css";

function App() {

  const [add,setAdd]=useState([])
    const [name,setName]=useState('')
    const [senha,setSenha]=useState('')
    const [del,setDel]=useState('')
    console.log(del)
    useEffect(()=>{
         api.get('/user').then(response=>{
               setAdd(response.data.res)
          }).catch(err=>console.error(err))
          
    },[add])

  async function handleAddRepository() {
    // TODO
    const response=await api.post('user',{
      name:name,
      senha:senha
   })
   const res=response.data.res
   setAdd([...add,res])
  }

  async function handleRemoveRepository(id) {
    // TODO
    api.delete(`/user/${id}`).then(response=>{
      alert(response.data.res)
      setDel(response.data.res)
     })
  }

  return (
    <div>
      <ul data-testid="repository-list" >
        {add.map(res=>(
        <li key={res.id} >
         {res.name}

          <button onClick={() => handleRemoveRepository(res.id)}>
            Remover
          </button>
        </li> 
        ))}
      </ul>
       
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
