import { useState } from "react";
import { RegisterForm } from "../components/auth/RegisterForm";
import { ForgotPasswordForm } from "../components/auth/ForgotPasswordForm";
import { LoginForm } from "../components/auth/LoginForm";

type AuthState = "login" | "register" | "forgotPassword";

export function Login() {
    const [authState, setAuthState] = useState<AuthState>("login");

    const renderForm = () => {
        switch (authState) {
            case "register":
                return (
                    <RegisterForm
                        onLoginLinkClick={() => setAuthState("login")}
                    />
                );
            case "forgotPassword":
                return (
                    <ForgotPasswordForm
                        onLoginLinkClick={() => setAuthState("login")}
                    />
                );
            case "login":
            default:
                return (
                    <LoginForm
                        onRegisterLinkClick={() => setAuthState("register")}
                        onForgotPasswordClick={() =>
                            setAuthState("forgotPassword")
                        }
                    />
                );
        }
    };

    return (
        <div className="flex items-center justify-center bg-[#282828] min-h-screen text-white">
            <div className="w-full max-w-md p-8 space-y-8 bg-[#1b1b1b] rounded-lg shadow-lg border-5 border-[#504945]">
                <div className="flex justify-center mb-6">
                    <img
                        src="../../assets/logo.png"
                        alt="Logo"
                        className="h-20 w-auto"
                    />
                </div>
                {renderForm()}
            </div>
        </div>
    );
}
