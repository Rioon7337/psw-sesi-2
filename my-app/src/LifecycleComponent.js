import React, { useState, useEffect } from "react";

const LifecycleComponent = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        console.log("Komponen dimount (didMount) atau diupdate (diUpdate)");

        return () => {
            console.log("Komponen akan di-unmount (willUnmount)");
        };
    }, [count]); //useEffect berjalan setiap kali 'count' berubah

    return (
        <div className="p-4 border rounded-md shadow-md bg-blue-100">
            <h2 className="text-xl font-bold">Lifecyclye Example</h2>
            <p>Counter: {count}</p>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
                onClick={() => setCount(count + 1)}
            >
                Tambah Count
            </button>
        </div>
    );
};

export default LifecycleComponent;