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

    await authClient.signIn.social({
      provider: "google",
    });

  };

  return (

    <div className="px-4 py-8">

      <Card className="border w-full max-w-md md:max-w-lg mx-auto py-8 md:py-10 px-5 md:px-8 shadow-xl rounded-3xl">

        <h1 className="text-center text-3xl font-bold text-taupe-500 mb-6">

          Sign Up

        </h1>

        <Form
          className="flex w-full flex-col gap-5"
          onSubmit={onSubmit}
        >

          <TextField isRequired name="name">

            <Label>Name</Label>

            <Input
              placeholder="Enter your name"
              className="w-full"
            />

            <FieldError />

          </TextField>

          <TextField isRequired name="image">

            <Label>Image URL</Label>

            <Input
              placeholder="Image URL"
              className="w-full"
            />

            <FieldError />

          </TextField>

          <TextField
            isRequired
            name="email"
            type="email"
          >

            <Label>Email</Label>

            <Input
              placeholder="john@example.com"
              className="w-full"
            />

            <FieldError />

          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
          >

            <Label>Password</Label>

            <Input
              placeholder="Enter your password"
              className="w-full"
            />

            <Description>
              Must be 8+ chars with 1 uppercase & 1 number
            </Description>

            <FieldError />

          </TextField>

          <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">

            <Button
              type="submit"
              className="w-full bg-lime-500 text-white"
            >
              <Check />
              Submit
            </Button>

            <Button
              type="reset"
              variant="secondary"
              className="w-full"
            >
              Reset
            </Button>

          </div>

        </Form>

        <div className="my-6 flex items-center gap-3">

          <div className="h-0.5 bg-gray-300 flex-1"></div>

          <p className="text-gray-500 text-sm">
            OR
          </p>

          <div className="h-0.5 bg-gray-300 flex-1"></div>

        </div>

        <Button
          type="button"
          onClick={handleGoogleSignUp}
          className="w-full border border-gray-300 bg-white hover:bg-gray-100 text-black"
        >

          <GrGoogle className="text-fuchsia-500 text-lg" />

          Sign Up With Google

        </Button>

      </Card>

    </div>

  );
}