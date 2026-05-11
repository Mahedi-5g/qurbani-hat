"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  const isHome = pathName === "/";
  const isAnimals = pathName === "/allAnimals";
  const isCart = pathName === "/cart";
  const isProfile = pathName === "/profilePage";
  const isSignIn = pathName === "/signIn";
  const isSignUp = pathName === "/signUp";

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (

    <div className="border-b px-2 sticky top-0 bg-white z-50">

      <nav className="flex justify-between items-center py-3 px-2 md:px-6 max-w-7xl mx-auto w-full">


        <div className="flex items-center gap-3">


          <div className="md:hidden relative">

            <button
              className="p-2 text-taupe-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>


            {isOpen && (

              <div className="absolute left-0 top-14 w-56 bg-white border shadow-xl rounded-2xl p-4 z-50">

                <ul className="flex flex-col gap-3">

                  <li>
                    <Link
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-xl ${isHome
                          ? "bg-lime-500 text-white"
                          : "hover:bg-gray-100"
                        }`}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/allAnimals"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-xl ${isAnimals
                          ? "bg-lime-500 text-white"
                          : "hover:bg-gray-100"
                        }`}
                    >
                      All Animals
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/cart"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-xl ${isCart
                          ? "bg-lime-500 text-white"
                          : "hover:bg-gray-100"
                        }`}
                    >
                      Cart
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/profilePage"
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-2 rounded-xl ${isProfile
                          ? "bg-lime-500 text-white"
                          : "hover:bg-gray-100"
                        }`}
                    >
                      Profile
                    </Link>
                  </li>

                </ul>

              </div>

            )}

          </div>


          <Link href={"/"} className="hidden sm:block">

            <Image
              src={"/web-app-manifest-192x192.png"}
              alt="logo"
              width={55}
              height={55}
              className="object-cover"
            />

          </Link>


          <Link href={"/"}>

            <h3 className="block md:hidden lg:block font-bold text-2xl md:text-3xl lg:text-4xl text-taupe-500">

              Qurbani <span className="text-lime-500">Hat</span>

            </h3>

          </Link>

        </div>


        <ul className="hidden md:flex items-center gap-5 text-sm">

          <li>
            <Button
              className={`text-white text-lg font-medium rounded-2xl transition duration-300 hover:scale-105 hover:shadow-lg ${isHome ? "bg-lime-500" : "bg-taupe-400"
                }`}
            >
              <Link href={"/"}>Home</Link>
            </Button>
          </li>

          <li>
            <Button
              className={`text-white text-lg font-medium rounded-2xl transition duration-300 hover:scale-105 hover:shadow-lg ${isAnimals ? "bg-lime-500" : "bg-taupe-400"
                }`}
            >
              <Link href={"/allAnimals"}>All Animals</Link>
            </Button>
          </li>

          <li>
            <Button
              className={`text-white text-lg font-medium rounded-2xl transition duration-300 hover:scale-105 hover:shadow-lg ${isCart ? "bg-lime-500" : "bg-taupe-400"
                }`}
            >
              <Link href={"/cart"}>Cart</Link>
            </Button>
          </li>

          <li>
            <Button
              className={`text-white text-lg font-medium rounded-2xl transition duration-300 hover:scale-105 hover:shadow-lg ${isProfile ? "bg-lime-500" : "bg-taupe-400"
                }`}
            >
              <Link href={"/profilePage"}>Profile</Link>
            </Button>
          </li>

        </ul>

        <div className="flex gap-2 sm:gap-4 items-center">


          {!user && (

            <ul className="flex items-center text-sm gap-2">

              <li>

                <Button
                  size="sm"
                  className={`text-white text-xs sm:text-sm lg:text-lg font-medium rounded-2xl transition duration-300 hover:scale-105 hover:shadow-lg ${isSignUp ? "bg-lime-500" : "bg-taupe-400"
                    }`}
                >
                  <Link href={"/signUp"}>SignUp</Link>
                </Button>

              </li>

              <li>

                <Button
                  size="sm"
                  className={`text-white text-xs sm:text-sm lg:text-lg font-medium rounded-2xl transition duration-300 hover:scale-105 hover:shadow-lg ${isSignIn ? "bg-lime-500" : "bg-taupe-400"
                    }`}
                >
                  <Link href={"/signIn"}>SignIn</Link>
                </Button>

              </li>

            </ul>

          )}

          {user && (

            <div className="flex gap-3 items-center">

              <Avatar className="h-10 w-10">
                        <Avatar.Image
                          alt="John Doe"
                          src={user?.image}
                          referrerPolicy="no-referrer"
                        />
                        <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                      </Avatar>

              <Button
                onClick={handleSignOut}
                size="sm"
                color="danger"
              >
                SignOut
              </Button>

            </div>

          )}

        </div>

      </nav>

    </div>

  );
};

export default Navbar;
