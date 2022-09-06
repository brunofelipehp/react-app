import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

import { Card, CardProps } from '../../components/Card';

interface ProfileResponse {
  name: string;
  avatar_url: string;
}

interface User {
  name: string;
  avatar: string;
}

 export function Home() {
   const [studentName, setStudentName] = useState('')
   const [students, setStudents] = useState<CardProps[]>([])
   const [user, setUser] = useState<User>({} as User)

   function handleAddStudent(){

     const newStudent = {
       name: studentName,
       time: new Date().toLocaleTimeString("pt-br", {
         hour: '2-digit',
         minute: '2-digit',
         second: '2-digit'
       })
     };

     setStudents(prevState => [...prevState, newStudent])
   }

   useEffect(() => {
    async function fetchData(){
      const url = 'https://api.github.com/users/brunofelipehp'
      const response = await axios.get(url)
      const data = await response.data as ProfileResponse
    
     setUser({
        name: data.name,
        avatar: data.avatar_url
      })
    }
    
    fetchData()
   }, [])

  return (
    <div className="container">
      <header>
      <h1>Lista de Presença</h1>
      <div>
        <strong>{user.name}</strong>
        <img src={user.avatar} alt="Foto de perfil" />
      </div>
      </header>
   
   <input type="text" placeholder="Digite o nome..." onChange={e => setStudentName(e.target.value)} />
   <button onClick={handleAddStudent}>Adicionar</button>

   {
     students.map(student =>  (
     <Card 
     key={student.time}
     name={student.name}
      time={student.time}/>
      ))
  }
   
   </div>
  )
}


