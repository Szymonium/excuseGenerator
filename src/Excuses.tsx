import Excuse from "./Excuse.tsx";

interface ExcusesProps {
    excuses?: Array<string>
}

export default function Excuses({excuses}: ExcusesProps) {
    return (
        <>
            {excuses?.map((excuse, id) => {
                return (
                    <>
                        <Excuse excuse={excuse} key={id}/>
                    </>
                )
            })}
        </>
    )
}