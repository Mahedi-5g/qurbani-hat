"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathName = usePathname();
  const isHome = pathName === "/";
  const isAnimals = pathName === "/allAnimals";
  const isCart = pathName === "/cart";

  const userData = authClient.useSession()
  const user = userData.data?.user

  const handleSignOut = async()=>{
    await authClient.signOut()
  }

  return (
    <div className="border-b px-2">
      <nav className=" flex justify-between items-center  py-3 px-6 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
          <Link href={"/"}><Image
            src={"/web-app-manifest-192x192.png"}
            alt="logo"
            loading="eager"
            width={60}
            height={60}
            className="object-cover h-auto w-auto"
          />

          </Link>

          <Link href={"/"}><h3 className="font-bold text-3xl text-taupe-500">Qurbani <span className="text-lime-500">Hat</span></h3></Link>

        </div>

        <ul className="flex items-center gap-5 text-sm">
          <li>
            <Button className={`text-neutral-50 text-lg font-medium rounded-2xl ${isHome ? "bg-lime-500" : "bg-taupe-400"
              }`}><Link href={"/"}>Home</Link></Button>
          </li>
          <li>
            <Button className={`text-neutral-50 text-lg font-medium rounded-2xl ${isAnimals ? "bg-lime-500" : "bg-taupe-400"
              }`}><Link href={"/allAnimals"}>All Animals</Link></Button>
          </li>
          <li >
            <Button className={`text-neutral-50 text-lg font-medium rounded-2xl ${isCart ? "bg-lime-500" : "bg-taupe-400"
              }`}><Link href={"/cart"}>Cart</Link></Button>

          </li>
        </ul>

        <div className="flex gap-4">
          {!user && <ul className="flex items-center  text-sm gap-3">
            <li>
              <Button className="text-neutral-50 bg-lime-400 text-lg font-medium rounded-2xl"><Link href={"/signUp"}>SignUp</Link></Button>
            </li>
            <li>
              <Button className="text-neutral-50 bg-lime-400 text-lg font-medium rounded-2xl"><Link href={"/signIn"}>SignIn</Link></Button>
            </li>
          </ul>}

          {
            user && <div className="flex gap-3">
              <Avatar>
                <Avatar.Image alt="John Doe" src={user?.image}
                referrerPolicy="no-referrer" 
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <Button onClick={handleSignOut} size="md" variant="danger">SignOut</Button>
            </div>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;