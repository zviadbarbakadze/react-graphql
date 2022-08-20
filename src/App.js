
import './App.css';
import GetCharacters from './GetCharacters';
import{Routes,Route} from 'react-router-dom'

import GetCharacter from './GetCharacter';



function App() {
  return (
    
    <div className="App">
    
      
      <Routes>
      
         <Route path='react-graphql' element={<GetCharacters/>}/>
         <Route path=':id' element={<GetCharacter/>}/>
         
        
         
       
      </Routes>
    
    </div>
    
  );
}

export default App;
