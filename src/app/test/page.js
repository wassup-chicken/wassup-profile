'use client';

import { useState } from "react";

const Test = () => {
    const [data, setData] = useState(null);
    const handleSubmit = async () => {

        const res = await fetch('/api/test');

        const json = await res.json();

        setData(json.data.message);
    }

    return (
        <>
            <div className="space-y-5 mt-5 flex flex-col items-center">
                <div>Some Test API for fun</div>
                <button type="button" onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">Test</button>
                {data && <p className="mt-4 text-green-700">{data}</p>}
            </div>
        </>
    )
}

export default Test;