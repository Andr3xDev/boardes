interface InputProps {
    userName: string;
    setUserName: (name: string) => void;
}

export function Input({ userName, setUserName }: InputProps) {
    return (
        <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
            <label
                htmlFor="user-name"
                className="block text-sm font-medium text-slate-600 mb-1"
            >
                Tu Nombre
            </label>
            <input
                id="user-name"
                type="text"
                placeholder="Escribe tu nombre para identificarte"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
        </div>
    );
}
