import './styles.css';

import { Card } from '../../components/Card';

 export function Home() {
  return (
    <div className="container">
   <h1>Lista de Presença</h1>
   <input type="text" placeholder="Digite o nome..." />
   <button>Adicionar</button>

   <Card name="Bruno" time="10:55:25"/>
   <Card name="Juliana" time="11:00:10"/>
   <Card name="Daniel" time="12:30:25"/>
   </div>
  )
}


