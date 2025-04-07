interface ExcuseProps {
    excuse?: string
}

export default function Excuse({excuse}: ExcuseProps) {
    const excuseObj = JSON.parse(excuse as string)

    return (
        <>
            <p>{JSON.stringify(excuseObj)}</p>
            <p>"{excuseObj["comment"]}" - Excuse author: {excuseObj["name"]}</p>
        </>
    )
}