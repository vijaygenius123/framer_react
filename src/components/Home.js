import React from "react";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            <h2>Home</h2>
            <Link to="/base">Create A Pizza</Link>
        </>
    )
}

export default Home;
