import Form from "./componets/Form";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import InfoData from "./componets/InfoData";
import Edit from "./componets/Edit";
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Form />}/>
    <Route path="/infodata" element={<InfoData/>}/> 
    <Route path="/edit" element={<Edit/>}/> 
    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
