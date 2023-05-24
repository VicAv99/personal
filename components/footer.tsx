"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";

interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="w-full">
      <div className="bottom-0 float-right mb-5 mr-8">
        <Button asChild variant="outline" className="mx-1.5 bg-white">
          <Link target="_blank" href="https://twitter.com/victoravila__">
            <Icon name="Twitter" />
          </Link>
        </Button>
        <Button asChild variant="outline" className="ml-1.5 bg-white">
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/victoravila-dev/"
          >
            <Icon name="Linkedin" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
