"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";

export default function SignUpPage() {
    const router = useRouter();

    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const image = formData.get("image");
        const email = formData.get("email");
        const password = formData.get("password");

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        console.log({ data, error });

        if (!error) {
            router.push("/");
        }
    };

    const handleGoogleSignUp = async () => {
        await authClient.signUp.social({
            provider: "google",
        });
    };

    return (
        <Card className="border mx-auto w-125 py-10 mt-5 mb-8">
            <h1 className="text-center text-2xl font-bold">Sign Up</h1>

            <Form className="flex w-96 mx-auto flex-col gap-4" onSubmit={onSubmit}>
                <TextField isRequired name="name">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="image">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="email" type="email">
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField isRequired name="password" type="password">
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>
                        Must be 8+ chars with 1 uppercase & 1 number
                    </Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Submit
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>

            <p className="text-center">Or</p>

            <Button
                type="button"
                onClick={handleGoogleSignUp}
                className="w-full"
            >
                <GrGoogle className="text-fuchsia-500" />
                Sign Up With Google
            </Button>
        </Card>
    );
}