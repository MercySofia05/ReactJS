import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err)
    return (
        <>
            <div>Opps !!</div>
            <h2>
                Something went wrong
            </h2>
            <h3>Error Code: {err.status}</h3>
            <h3>Error Message : {err.StatusText}</h3>
        </>
    )
}

export default Error;