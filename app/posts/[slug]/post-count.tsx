"use client";

import { useEffect, useState } from "react";
import { supabase } from "~/lib/supabase";

interface PostCountProps {
  slug: string;
}

export function PostCount({ slug }: PostCountProps) {
  const [views, setViews] = useState(0);

  console.log({ views });

  useEffect(() => {
    const analytics = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "analytics" },
        (payload) => {
          console.log("Change received!", payload.commit_timestamp);
          setViews(views + 1);
        }
      )
      .subscribe();

    return () => {
      analytics.unsubscribe();
    };
  }, [slug]);

  return (
    <div>
      {views} {views === 1 ? "view" : "views"}
    </div>
  );
}
