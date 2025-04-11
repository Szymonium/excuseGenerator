import * as React from "react";
import {useState} from "react";

interface FormProps {
    excuses?: Array<string>,
    setExcuses: (value: (((prevState: Array<string>) => Array<string>) | Array<string>)) => void,
    setForm?: (value: EventTarget) => void,
}

export default function Form({excuses, setExcuses}: FormProps) {
    const [range, setRange] = useState(0);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData)

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        const newArray: Array<string> = [...excuses, JSON.stringify(formProps)];

        setExcuses(newArray);
        localStorage.setItem("excuses", JSON.stringify(newArray))

        e.currentTarget.reset()
        setRange(0);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type={"text"} name={"name"} placeholder={"Enter name"} required/>
                <select name={"reason"} required>
                    <option selected hidden value={""}>Choose a reason</option>
                    <option>homework not done</option>
                    <option>doctor's appointment</option>
                    <option>oversleeping</option>
                    <option>lack of will to live</option>
                </select>
                <label>Credibility level</label><input type={"range"} name={"credibility"} min={0} max={10}
                                                       defaultValue={0} onChange={(e) => {
                setRange(parseInt(e.target.value))
            }} required/>
                <output>{range}</output>
                <label>Date of event</label><input type={"date"} name={"date"} required/>
                <select name={"creativity"} required>
                    <option selected hidden value={""}>Choose creativity level</option>
                    <option>lefty liar</option>
                    <option>flawed fraud</option>
                    <option>decent deceiver</option>
                    <option>master manipulator</option>
                    <option>trustworthy trickster</option>
                </select>
                <textarea placeholder={"Enter a comment"} required name={"comment"}></textarea>
                <input type={"checkbox"} name={"important"}/><label>Is important</label>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}