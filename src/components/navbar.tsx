import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-x-2">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
      </ul>
    </nav>
  );
}
