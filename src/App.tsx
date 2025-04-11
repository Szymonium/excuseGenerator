import './App.css'
import Form from "./Form.tsx";
import Excuses from "./Excuses.tsx";
import {useState} from "react";

function App() {
    const [excuses, setExcuses] = useState<Array<string>>(() => {
        const savedExcuses = localStorage.getItem("excuses")
        return savedExcuses ? JSON.parse(savedExcuses) : [];
    })

  return (
    <>
        <Form excuses={excuses} setExcuses={setExcuses}/>
        <Excuses excuses={excuses} setExcuses={setExcuses}/>
    </>
  )
}

export default App
