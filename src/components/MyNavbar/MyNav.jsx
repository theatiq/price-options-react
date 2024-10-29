import React, { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const MyNav = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/profile/:id", name: "Profile" },
    { id: 4, path: "/products/:id", name: "ProductDetails" },
    { id: 5, path: "/settings/:id", name: "Settings" },
  ];

  return (
    <nav>
      <div onClick={() => setOpen(!open)} className="md:hidden text-xl p-5">
        {open === true ? <IoClose /> : <RiMenu2Line className="" />}
      </div>
      <ul className={`md:flex duration-1000 absolute md:static ${open?"top-12": "-top-60"} bg-yellow-300 px-6`}>
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default MyNav;
