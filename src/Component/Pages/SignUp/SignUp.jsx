
import { Card, Input, Typography } from "@material-tailwind/react";
import { AwesomeButton } from "react-awesome-button";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const response = await fetch(
                "https://react-interview.crd4lc.easypanel.host/api/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: data.name,
                        email: data.email,
                        password: data.password,
                    }),
                }
            );

            if (response.ok) {
                Swal.fire({
                    title: "Success!",
                    text: "Registration completed successfully!",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });

                navigate("/login"); // Redirect to login page
            } else {
                const result = await response.json();
                throw new Error(result.message || "Registration failed.");
            }
        } catch (error) {
            Swal.fire({
                title: "Error!",
                text: error.message,
                icon: "error",
                timer: 2000,
                showConfirmButton: false,
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <Card
                color="transparent"
                shadow={false}
                className="mx-auto md:w-1/2 lg:w-1/3 bg-gray-800 p-8 rounded-lg"
            >
                <Typography
                    variant="h4"
                    color="white"
                    className="text-center font-extrabold"
                >
                    Registration
                </Typography>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-6"
                >
                    <div>
                        <Typography variant="h6" color="white">
                            Your Name
                        </Typography>
                        <Input
                            size="lg"
                            name="name"
                            type="text"
                            {...register("name", { required: true })}
                            placeholder="John Doe"
                            className="bg-gray-700 border-none text-white"
                        />
                        {errors.name && (
                            <p className="text-red-400 mt-2">
                                Please enter your name
                            </p>
                        )}
                    </div>
                    <div>
                        <Typography variant="h6" color="white">
                            Your Email
                        </Typography>
                        <Input
                            size="lg"
                            name="email"
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="name@example.com"
                            className="bg-gray-700 border-none text-white"
                        />
                        {errors.email && (
                            <p className="text-red-400 mt-2">
                                Please enter a valid email
                            </p>
                        )}
                    </div>
                    <div>
                        <Typography variant="h6" color="white">
                            Password
                        </Typography>
                        <Input
                            type="password"
                            name="password"
                            size="lg"
                            {...register("password", {
                                required: true,
                                minLength: 8,
                            })}
                            placeholder="********"
                            className="bg-gray-700 border-none text-white"
                        />
                        {errors.password && (
                            <p className="text-red-400 mt-2">
                                Password must be at least 8 characters long
                            </p>
                        )}
                    </div>
                    <div className="mt-10 text-center w-full">
                        <AwesomeButton
                            type="primary"
                            size="medium"
                            className="mt-6 w-full bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 text-white hover:scale-105 transition-transform mb-2"
                        >
                            Sign Up
                        </AwesomeButton>
                    </div>
                </form>
                <Typography color="white" className="my-4 text-center">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="font-medium text-blue-400 hover:underline"
                    >
                        Login
                    </Link>
                </Typography>
            </Card>
        </div>
    );
};

export default SignUp;
