import './App.css'
import Form from "./Form.tsx";
import Excuses from "./Excuses.tsx";
import {useState} from "react";

function App() {
    const [excuses, setExcuses] = useState<Array<string>>(() => {
        const savedExcuses = localStorage.getItem("excuses")
        return savedExcuses ? JSON.parse(savedExcuses) : [];
    })
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const [form, setForm] = useState<EventTarget>(() => EventTarget);

  return (
    <>
        <Form excuses={excuses} setExcuses={setExcuses} setForm={setForm}/>
        <Excuses excuses={excuses} setExcuses={setExcuses} form={form}/>
    </>
  )
}

export default App
