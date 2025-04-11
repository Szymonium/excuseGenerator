interface ExcuseProps {
    excuse?: string,
    excuses?: Array<string>,
    setExcuses?: ((value: (((prevState: Array<string>) => Array<string>) | Array<string>)) => void),
    excuseId?: number,
}

export default function Excuse({excuse, excuses, setExcuses, excuseId}: ExcuseProps) {
    const excuseObj = JSON.parse(excuse as string)

    function handleEdit() {
        const cloneObj = excuseObj;

        const form: HTMLFormElement | null = document.querySelector("form");

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        form.querySelectorAll("input, select, textarea").forEach((el) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const name = el.name;

            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            if (el.type === "checkbox") {
                const checkbox = el as HTMLInputElement;
                checkbox.checked = !!cloneObj[name];
            }
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            else if (el.type === "range") {
                const rangeInput = el as HTMLInputElement;
                rangeInput.value = String(cloneObj[name]);
                console.log(rangeInput)
                console.log(rangeInput.dispatchEvent(new Event("change")))
            }
            // For other inputs (text, select, textarea)
            else {
                const inputElement = el as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
                inputElement.value = String(cloneObj[name]);
            }
        });


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
        <>
            <p>
                <u>
                    {excuseObj["important"] ? "IMPORTANT!" : ""}
                </u> "{excuseObj["comment"]}"
                - {excuseObj["creativity"].charAt(0).toUpperCase() + excuseObj["creativity"].slice(1)} author: {excuseObj["name"]} on {excuseObj["date"]}
                <br/>
                (Real reason: {excuseObj["reason"]}, {excuseObj["credibility"]}/10 people would believe)
            </p>
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}