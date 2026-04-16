import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
import LifecycleComponent from "./LifecycleComponent";

const ParentComponent = () => {
    const [message, setMessage] = useState('Halo dari Parent');

    return (
        <div className="max-w-2xl mx-auto mt-10 p-5 border rounded-lg shadow-lg">
            <h1 className="tent-2xl font-bold mb-4">State, Props, dan Lifecycle</h1>

            {/*Menggunakan ChildComponent dengan props*/}
            <ChildComponent message={message} />

            {/*LifeCycleComponent*/}
            <LifecycleComponent />

            {/*Input untuk mengubah state*/}
            <input 
             type="text"
             className="border p-2 w-full mt-4"
             placeholder="Ubah pesan..."
             value={message}
             onChange={(e) => setMessage(e.target.value)}
             />
        </div>
    );
};

export default ParentComponent;