import * as React from "react";
import {useState} from "react";

export default function Form() {
    const [range, setRange] = useState(0);

    return (
        <>
            <h1>Excuse Generator<sub>v1</sub></h1>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {e.preventDefault()}}>

                <span><input type={"text"} name={"name"} placeholder={"Enter your name"} required/></span>

                <span><select name={"reason"} required>
                    <option selected hidden>Choose a reason</option>
                    <option>homework not done</option>
                    <option>doctor's appointment</option>
                    <option>oversleeping</option>
                    <option>lack of will to live</option>
                </select></span>

                <span><select name={"creativity"} required>
                    <option selected hidden>Choose the creativity level</option>
                    <option>lefty liar</option>
                    <option>flawed fraud</option>
                    <option>decent deceiver</option>
                    <option>master manipulator</option>
                    <option>trustworthy trickster</option>
                </select></span>

                <span><input type={"date"} name={"date"}/></span>
                <span><textarea placeholder={"Enter a comment"} required></textarea></span><br />

                <span><label>Credibility level: {range}</label><br /><input type={"range"} name={"credibility"} min={0} max={10} defaultValue={0} onChange={(e) => {setRange(parseInt(e.target.value))}} required/></span><br />
                <label>Important? </label><input type={"checkbox"} name={"important"}/><br />
                <span><button type={"submit"}>Submit</button></span>
            </form>
        </>
    )
}