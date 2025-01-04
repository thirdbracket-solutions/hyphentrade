import Link from "next/link";

import { links } from "@/site";
import { Navbar, theme } from "flowbite-react";
import { usePathname } from "next/navigation";
// import { useRouter } from "next/router";

const NavLink: React.FC = () => {
  const pathname = usePathname();
  // const router = useRouter();
  return (
    // <nav>
    // <ul>
    <>
      {links.map((link) => (
        <Navbar.Link
          key={link.id}
          theme={{
            active: {
              on: "bg-black text-white dark:text-white md:bg-transparent md:text-primary-700",
              off: "border-b border-gray-100 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-primary-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
            },
          }}
          as={Link}
          href={link.to}
          className={`${pathname === link.to ? "active" : ""}`}
        >
          {link.name}
        </Navbar.Link>
      ))}
    </>
    //   </ul>
    //    </nav>
  );
};
export default NavLink;
