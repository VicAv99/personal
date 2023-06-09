import { NavLink } from "./nav-link";
import Image from "next/image";

export function Toolbar() {
  return (
    <div className="my-5">
      <nav className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-12 h-12">
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
          <NavLink href="/posts">Posts</NavLink>
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
