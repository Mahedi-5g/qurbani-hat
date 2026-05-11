// "use client";
// import { authClient } from "@/lib/auth-client";
// import { Avatar, Button } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";

// const Navbar = () => {

//   const pathName = usePathname();
//   const isHome = pathName === "/";
//   const isAnimals = pathName === "/allAnimals";
//   const isCart = pathName === "/cart";
//   const isProfile = pathName === "/profilePage";
//   const isSignIn = pathName === "/signIn";
//   const isSignUp = pathName === "/signUp"

//   const userData = authClient.useSession()
//   const user = userData.data?.user

//   const handleSignOut = async () => {
//     await authClient.signOut()
//   }

//   return (
//     <div className="border-b px-2">
//       <nav className=" flex justify-between items-center  py-3 px-6 max-w-7xl mx-auto w-full">
//         <div className="flex gap-2 items-center">
//           <Link href={"/"}><Image
//             src={"/web-app-manifest-192x192.png"}
//             alt="logo"
//             loading="eager"
//             width={60}
//             height={60}
//             className="object-cover h-auto w-auto"
//           />

//           </Link>

//           <Link href={"/"}><h3 className="font-bold text-3xl text-taupe-500">Qurbani <span className="text-lime-500">Hat</span></h3></Link>

//         </div>

//         <ul className="flex items-center gap-5 text-sm">
//           <li>
//             <Button className={`text-neutral-50 text-lg font-medium rounded-2xl transition duration-300 ease-in-out 
//     hover:scale-105 hover:shadow-lg ${isHome ? "bg-lime-500" : "bg-taupe-400"
//               }`}><Link href={"/"}>Home</Link></Button>
//           </li>
//           <li>
//             <Button className={`text-neutral-50 text-lg font-medium rounded-2xl transition duration-300 ease-in-out 
//     hover:scale-105 hover:shadow-lg ${isAnimals ? "bg-lime-500" : "bg-taupe-400"
//               }`}><Link href={"/allAnimals"}>All Animals</Link></Button>
//           </li>
//           <li >
//             <Button className={`text-neutral-50 text-lg font-medium rounded-2xl transition duration-300 ease-in-out 
//     hover:scale-105 hover:shadow-lg ${isCart ? "bg-lime-500" : "bg-taupe-400"
//               }`}><Link href={"/cart"}>Cart</Link></Button>

//           </li>
//           <li >
//             <Button className={`text-neutral-50 text-lg font-medium rounded-2xl transition duration-300 ease-in-out 
//     hover:scale-105 hover:shadow-lg ${isProfile ? "bg-lime-500" : "bg-taupe-400"
//               }`}><Link href={"/profilePage"}>Profile</Link></Button>

//           </li>
//         </ul>

//         <div className="flex gap-4">
//           {!user && <ul className="flex items-center  text-sm gap-3">
//             <li>
//               <Button className={`text-neutral-50 text-lg font-medium rounded-2xl transition duration-300 ease-in-out 
//     hover:scale-105 hover:shadow-lg ${isSignUp ? "bg-lime-500" : "bg-taupe-400"
//                 }`}><Link href={"/signUp"}>SignUp</Link></Button>
//             </li>
//             <li>
//               <Button className={`text-neutral-50 text-lg font-medium rounded-2xl transition duration-300 ease-in-out 
//     hover:scale-105 hover:shadow-lg ${isSignIn ? "bg-lime-500" : "bg-taupe-400"
//                 }`}><Link href={"/signIn"}>SignIn</Link></Button>
//             </li>
//           </ul>}

//           {
//             user && <div className="flex gap-3">
//               <Avatar>
//                 <Avatar.Image alt="John Doe" src={user?.image}
//                   referrerPolicy="no-referrer"
//                 />
//                 <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
//               </Avatar>

//               <Button onClick={handleSignOut} size="md" variant="danger">SignOut</Button>
//             </div>
//           }
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;



"use client";
import { useState } from "react"; // স্টেট যোগ করা হয়েছে
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // আইকন এর জন্য (npm install lucide-react)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু কন্ট্রোল করার জন্য
  const pathName = usePathname();

  const navLinks = [
    { name: "Home", href: "/", active: pathName === "/" },
    { name: "All Animals", href: "/allAnimals", active: pathName === "/allAnimals" },
    { name: "Cart", href: "/cart", active: pathName === "/cart" },
    { name: "Profile", href: "/profilePage", active: pathName === "/profilePage" },
  ];

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-2 bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 px-4 md:px-6 max-w-7xl mx-auto w-full">
        
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
          <Link href={"/"}>
            <Image
              src={"/web-app-manifest-192x192.png"}
              alt="logo"
              loading="eager"
              width={50}
              height={50}
              className="object-cover h-auto w-auto"
            />
          </Link>
          <Link href={"/"}>
            <h3 className="font-bold text-xl md:text-3xl text-taupe-500">
              Qurbani <span className="text-lime-500">Hat</span>
            </h3>
          </Link>
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <ul className="hidden lg:flex items-center gap-4 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Button
                className={`text-neutral-50 text-lg font-medium rounded-2xl transition duration-300 
                hover:scale-105 ${link.active ? "bg-lime-500" : "bg-taupe-400"}`}
              >
                <Link href={link.href}>{link.name}</Link>
              </Button>
            </li>
          ))}
        </ul>

        {/* Auth Buttons & Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* Auth Section Desktop */}
          <div className="hidden sm:flex gap-3">
            {!user ? (
              <>
                <Link href="/signUp">
                  <Button className={`text-white ${pathName === '/signUp' ? 'bg-lime-500' : 'bg-taupe-400'}`}>SignUp</Button>
                </Link>
                <Link href="/signIn">
                  <Button className={`text-white ${pathName === '/signIn' ? 'bg-lime-500' : 'bg-taupe-400'}`}>SignIn</Button>
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-3">
                <Avatar src={user?.image} name={user?.name} />
                <Button onClick={handleSignOut} color="danger" variant="flat">SignOut</Button>
              </div>
            )}
          </div>

          {/* Hamburger Icon - Only Visible on Mobile */}
          <button 
            className="lg:hidden p-2 text-taupe-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t p-4 space-y-4 shadow-lg">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href} onClick={() => setIsOpen(false)}>
                <Link 
                  href={link.href}
                  className={`block p-3 rounded-xl font-medium ${link.active ? "bg-lime-500 text-white" : "bg-gray-100"}`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Mobile Auth Buttons */}
          {!user ? (
            <div className="flex flex-col gap-2 pt-4 border-t">
              <Link href="/signUp" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-taupe-400 text-white">SignUp</Button>
              </Link>
              <Link href="/signIn" onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-lime-500 text-white">SignIn</Button>
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3 pt-4 border-t">
              <div className="flex items-center gap-3">
                <Avatar src={user?.image} />
                <span className="font-medium">{user?.name}</span>
              </div>
              <Button onClick={handleSignOut} color="danger" className="w-full">SignOut</Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;