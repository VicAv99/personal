import { NavLink } from "./nav-link";
import Image from "next/image";

export default function Toolbar() {
  return (
    <div className="my-5">
      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-14 h-14">
          <Image
            fill
            src="/images/profile-birds.jpg"
            alt=""
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </div>
        <div>
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink buttonProps={{ disabled: true }} href="/portfolio">
            Portfolio
          </NavLink>
          <NavLink buttonProps={{ disabled: true }} href="/guest-book">
            GuestBook
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
