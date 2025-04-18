'use client';

import { useEffect, useState } from "react";

const getSkillColor = (level) => {
    switch (level) {
        case "A":
            return "bg-green-500";
        case "B":
            return "bg-green-300";
        case "C":
            return "bg-green-100";
        default:
            return "bg-gray-300";
    }
};

export default function SkillBubble(props) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center">
            <div
                className={`h-20 w-20 rounded-full transition-all duration-1000 ease-in-out transform ${animate ? `${getSkillColor(props.level)} scale-100` : "bg-gray-200 scale-75"
                    }`}
            ></div>
            <div className="mt-2">{props.name}</div>
        </div>
    );
}