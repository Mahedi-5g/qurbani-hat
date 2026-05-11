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
import { GrGoogle } from "react-icons/gr";

export default function SignInPage() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log({ data, error });
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: 'google'
    })
  }



  return (
    <div className="px-4 py-8">
    <Card className="border w-full max-w-md md:max-w-lg mx-auto py-8 md:py-10 px-5 md:px-8 shadow-xl rounded-3xl">
      <h1 className="text-center text-3xl font-bold text-taupe-500 mb-6">Sign In</h1>

      <Form className="flex w-full flex-col gap-5" onSubmit={onSubmit}>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }

            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" className="w-full"/>
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }

            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" className="w-full" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">
          <Button type="submit" className="w-full bg-lime-500 text-white">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary" className="w-full">
            Reset
          </Button>
        </div>
      </Form>

      <div className="my-6 flex items-center gap-3">

        <p className="text-gray-500 text-sm">
          OR
        </p>

      </div>

      <Button
        type="button"
        onClick={handleGoogleSignIn}
        className="w-full"
      >
        <GrGoogle className="text-fuchsia-500" />
        Sign In With Google
      </Button>
    </Card>
    </div>
  );
}