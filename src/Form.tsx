import * as React from "react";

function Form() {

    return (
        <>
            <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {e.preventDefault()}}>
                <button type={"submit"}>Submit</button>
            </form>
        </>
    )
}

export default Form