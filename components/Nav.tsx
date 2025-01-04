import Link from "next/link";
import { useRouter } from "next/router";

export const MyNav = () => {
  const router = useRouter();

  return (
    <ul>
      <li className={router.asPath == "/#products" ? "active" : ""}>
        <Link href="/#products">Products</Link>
      </li>
      <li className={router.asPath == "/#about" ? "active" : ""}>
        <Link href="/#about">about</Link>
      </li>
    </ul>
  );
};
