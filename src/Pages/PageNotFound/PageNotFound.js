import Button from "@restart/ui/esm/Button";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return (
        <div className="my-5">
            <h1 style={{ fontSize: "50px" }}>This is 404 page</h1>
            <h2>Your page not found</h2>
            <Button className="btn btn-success signIn my-3">
                <Link to="/"><i className="fas fa-home"></i>Back to Home Page</Link>
            </Button>
        </div>
    );
}

export default PageNotFound;