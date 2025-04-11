interface ExcuseProps {
    excuse?: string,
    excuses?: Array<string>,
    setExcuses?: ((value: (((prevState: Array<string>) => Array<string>) | Array<string>)) => void),
    excuseId?: number,
    form?: void | undefined
}

export default function Excuse({excuse, excuses, setExcuses, excuseId, form}: ExcuseProps) {
    const excuseObj = JSON.parse(excuse as string)

    function handleEdit() {
        const cloneObj = excuseObj;
        for (const key in cloneObj) {
            cloneObj[key] = prompt(`Enter new ${key}`);
        }

        if (excuses) {
            const newArray = excuses.map((value, index) => index == excuseId ? JSON.stringify(cloneObj) : value)
            if (setExcuses) {
                setExcuses(newArray)
            }
            localStorage.setItem("excuses", JSON.stringify(newArray))
        }
    }

    function handleDelete() {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const newArray: string[] = excuses.filter((_, index) => index != excuseId);

        if (setExcuses) {
            setExcuses(newArray);
        }
        localStorage.setItem("excuses", JSON.stringify(newArray))
    }

    return (
        <><section id={"excuse"}>
            <p>
                <u>
                    {excuseObj["important"] ? "IMPORTANT!" : ""}
                </u> "{excuseObj["comment"]}"
                - {excuseObj["creativity"].charAt(0).toUpperCase() + excuseObj["creativity"].slice(1)} <br/> Author: {excuseObj["name"]}, on {excuseObj["date"]}
                <br/><br/>
                (Real reason: {excuseObj["reason"]},<br/> {excuseObj["credibility"]}/10 people would believe)
            </p>
            <button id={"editButton"} onClick={handleEdit}>Edit</button>
            <button id={"deleteButton"} onClick={handleDelete}>Delete</button>
        </section>
        </>
    )
}
