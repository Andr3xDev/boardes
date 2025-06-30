// Definimos e exportamos la interfaz para que PizarraPage la pueda usar.
export interface BrushOptions {
    color: string;
    strokeWeight: number;
}

interface ToolbarProps {
    options: BrushOptions;
    setOptions: (options: BrushOptions) => void;
}

const ERASER_COLOR = "#FFFFFF";

export function Toolbar({ options, setOptions }: ToolbarProps) {
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptions({ ...options, color: e.target.value });
    };

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOptions({ ...options, strokeWeight: parseInt(e.target.value, 10) });
    };

    const handleEraserClick = () => {
        setOptions({ ...options, color: ERASER_COLOR });
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-md flex items-center gap-9 w-max">
            <div>
                <label
                    htmlFor="color-picker"
                    className="block text-sm font-medium text-slate-600 mb-1"
                >
                    Color
                </label>
                <input
                    id="color-picker"
                    type="color"
                    value={options.color}
                    onChange={handleColorChange}
                    className="w-12 h-12 p-0 border-none rounded-full cursor-pointer bg-transparent"
                />
            </div>

            <div className="flex-grow">
                <label
                    htmlFor="stroke-weight"
                    className="block text-sm font-medium text-slate-600 mb-1"
                >
                    Thickness:{" "}
                    <span className="font-bold">{options.strokeWeight}px</span>
                </label>
                <input
                    id="stroke-weight"
                    type="range"
                    min="1"
                    max="50"
                    value={options.strokeWeight}
                    onChange={handleWeightChange}
                    className="h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                />
            </div>

            <button
                onClick={handleEraserClick}
                className="px-4 py-2 bg-slate-200 text-slate-800 font-semibold rounded-lg hover:bg-slate-300 transition-colors"
            >
                Eraser
            </button>
        </div>
    );
}
