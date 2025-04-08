import Excuse from "./Excuse.tsx";

interface ExcusesProps {
    excuses?: Array<string>,
    setExcuses?: (value: (((prevState: Array<string>) => Array<string>) | Array<string>)) => void,
    form?: void
}

export default function Excuses({excuses, setExcuses, form}: ExcusesProps) {
    return (
        <>
            {excuses?.map((excuse, id) => {
                return (
                    <>
                        <Excuse excuse={excuse} excuses={excuses} setExcuses={setExcuses} excuseId={id} form={form}/>
                    </>
                )
            })}
        </>
    )
}