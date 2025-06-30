import { useState } from "react";
import { Toolbar, BrushOptions } from "../components/Toolbar";
import { Canvas } from "../components/Board";
import { Input } from "../components/Input";

export default function BoardPage() {
    const [brushOptions, setBrushOptions] = useState<BrushOptions>({
        color: "#000000",
        strokeWeight: 4,
    });

    const [userName, setUserName] = useState("Anonymous user");

    return (
        <main className="p-4 flex items-center justify-center">
            <div className="mr-20 flex flex-col items-center justify-items-start gap-y-11">
                <h1 className="text-4xl font-bold text-white">
                    -- Interactive Board --
                </h1>
                <Input userName={userName} setUserName={setUserName} />
                <Toolbar options={brushOptions} setOptions={setBrushOptions} />
            </div>

            <div className="flex items-center justify-center h-max">
                <Canvas
                    color={brushOptions.color}
                    strokeWeight={brushOptions.strokeWeight}
                />
            </div>
        </main>
    );
}
