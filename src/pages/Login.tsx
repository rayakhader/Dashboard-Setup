import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Message from "@/components/Message";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({ username: "", password: "" });
    const [success, setSuccess] = useState(false);
    const [hasAttemptedLogin, setHasAttemptedLogin] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setLoading(true);

        // Simulate async login
        setTimeout(() => {
            const isValid = username === "test" && password === "1234";
            setHasAttemptedLogin(true);
            setSuccess(isValid);
            setLoading(false);

            if (isValid) {
                setTimeout(() => {
                    navigate("/dashboard");
                }, 1500);
            }
        }, 1000);
    }

    function validateUsername(username: string) {
        if (username.length < 4) {
            setErrors((prev) => ({ ...prev, username: "Username must be at least 4 characters" }));
        } else if (username.length > 15) {
            setErrors((prev) => ({ ...prev, username: "Username must be less than 15 characters" }));
        } else if (!/^[a-zA-Z0-9]+$/.test(username)) {
            setErrors((prev) => ({ ...prev, username: "Username can only contain letters/numbers" }));
        } else {
            setErrors((prev) => ({ ...prev, username: "" }));
        }
    }

    function validatePassword(password: string) {
        if (password.length < 4) {
            setErrors((prev) => ({ ...prev, password: "Password must be at least 4 characters" }));
        } else {
            setErrors((prev) => ({ ...prev, password: "" }));
        }
    }

    useEffect(() => {
        if (username) validateUsername(username);
    }, [username]);

    useEffect(() => {
        if (password) validatePassword(password);
    }, [password]);

    return (
        <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-4">
            <Card className="w-full max-w-md shadow-xl border border-gray-200 rounded-lg animate-fade-in">
                <CardHeader className="text-center">
                    <CardTitle className="text-2xl font-semibold">Login</CardTitle>
                    <p className="text-muted-foreground text-sm mt-1">Please log in to your account</p>
                </CardHeader>
                <CardContent>
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <Label htmlFor="username" className="mb-1">Username</Label>
                            <Input
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder="Enter your username..."
                                className={errors.username ? "border-red-500" : ""}
                            />
                            {errors.username && (
                                <p className="text-red-600 text-xs mt-1">{errors.username}</p>
                            )}
                        </div>

                        <div>
                            <Label htmlFor="password" className="mb-1">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className={errors.password ? "border-red-500" : ""}
                            />
                            {errors.password && (
                                <p className="text-red-600 text-xs mt-1">{errors.password}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full"
                            disabled={
                                !username || !password || Boolean(errors.username) || Boolean(errors.password) || loading
                            }
                        >
                            {loading ? "Logging in..." : "Login"}
                        </Button>
                    </form>

                    {hasAttemptedLogin && (
                        <div className="mt-4">
                            <Message
                                message={success ? "✅ Login successful!" : "❌ Invalid username or password"}
                                type={success ? "success" : "error"}
                            />
                        </div>
                    )}
                </CardContent>
            </Card>
        </main>
    );
}

export default Login;
