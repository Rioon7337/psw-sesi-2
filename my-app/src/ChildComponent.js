import React from "react";

const ChildComponent = ({ message }) => {
    return (
        <div className="p-4 border rounded-md shadow-md bg-gray-100">
            <p className="text-lg">Pesan dari Parent: <strong>{message}</strong></p>
        </div>
    );
};

export default ChildComponent;