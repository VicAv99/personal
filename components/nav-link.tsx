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
  const segment = useSelectedLayoutSegment() ?? "/";
  const active = props.href === `${segment}`;

  return (
    <Button asChild variant="link" size="sm" {...buttonProps}>
      <Link
        className={cn(
          "relative h-7 text-base",
          active && "text-red-900 font-bold",
          "hover:no-underline hover:after:scale-x-100",
          "after:absolute after:bottom-0 after:left-0 after:w-full after:scale-x-0",
          "after:transition-all after:origin-left after:h-[1px] after:bg-slate-200"
        )}
        {...props}
      >
        {children}
      </Link>
    </Button>
  );
};
