import * as React from "react";
import {useState} from "react";

export default function Form() {
    const [range, setRange] = useState(0);

    return (
        <>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {e.preventDefault()}}>
                <input type={"text"} name={"name"} placeholder={"Enter name"} required/>
                <select name={"reason"} required>
                    <option selected hidden>Choose a reason</option>
                    <option>homework not done</option>
                    <option>doctor's appointment</option>
                    <option>oversleeping</option>
                    <option>lack of will to live</option>
                </select>
                <label>Credibility level</label><input type={"range"} name={"credibility"} min={0} max={10} defaultValue={0} onChange={(e) => {setRange(parseInt(e.target.value))}} required/>
                <output>{range}</output>
                <label>Date of event</label><input type={"date"} name={"date"}/>
                <select name={"creativity"} required>
                    <option selected hidden>Choose a creativity level</option>
                    <option>lefty liar</option>
                    <option>flawed fraud</option>
                    <option>decent deceiver</option>
                    <option>master manipulator</option>
                    <option>trustworthy trickster</option>
                </select>
                <textarea placeholder={"Enter a comment"} required></textarea>
                <input type={"checkbox"} name={"important"}/><label>Is important</label>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}