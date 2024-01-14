import { getUsers } from '../../services/api';
import {useEffect, useState} from 'react'
import Table from 'react-bootstrap/Table';

const ViewUser=()=>{
    const [user,setUser]=useState([]);
    useEffect(()=>{
        fetch();
        console.log(user)
    },[])

    async function fetch(){
        const data = await getUsers();
        setUser(data);
    }
  
return(


<>
<Table striped bordered hover>
<thead>
        <tr>
         
          <th>Email</th>
          <th>Password</th>
        
        </tr>
      </thead>
      <tbody>
{user.map((users) => (

    <>
      
      
        <tr>
          <td>{users.email}</td>
          <td>{users.password}</td>
         
        </tr>
      
      </>
          ))}
          </tbody>
           </Table>
         
         </>
)

}

export default ViewUser