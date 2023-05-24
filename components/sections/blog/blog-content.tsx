"use client";

import "~/styles/prism-theme.css";
import styles from "./blog-content.module.scss";
import type { MDXComponents } from "mdx/types";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";

interface BlogContentProps {
  bodyCode: string;
}

export function BlogContent({ bodyCode }: BlogContentProps) {
  const MDXContent = useMDXComponent(bodyCode);
  return (
    <div className={styles.markup}>
      <MDXContent components={mdxComponents} />
    </div>
  );
}

const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ children, ...props }) => {
    // check if external
    let isExternal = false;
    if (props.href?.startsWith("http")) {
      isExternal = true;
    }

    return (
      // @ts-expect-error legacy refs
      <Link
        {...props}
        href={props.href || ""}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  },
};
