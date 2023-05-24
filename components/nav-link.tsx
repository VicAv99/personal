"use client";

import Link, { LinkProps } from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { PropsWithChildren } from "react";
import { Button, ButtonProps } from "./ui/button";
import { cn } from "~/lib/cn";

type NavLinkProps = PropsWithChildren<
  { buttonProps?: ButtonProps } & LinkProps
>;

export const NavLink = ({ children, buttonProps, ...props }: NavLinkProps) => {
  const segment = useSelectedLayoutSegment();
  const active = props.href === `/${segment}`;

  return (
    <Button asChild variant="link" size="sm" {...buttonProps}>
      <Link
        className={cn(
          "relative h-7 text-base",
          active && "text-red-900 font-bold",
          "hover:no-underline hover:after:scale-x-100",
          "relative inline-flex text-sm before:absolute before:left-0 before:bottom-0 before:h-[0.05rem] before:w-full before:origin-right before:scale-x-0 before:bg-cyan-500 before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100"
        )}
        {...props}
      >
        {children}
      </Link>
    </Button>
  );
};
