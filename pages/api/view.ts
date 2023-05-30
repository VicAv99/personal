import { NextApiRequest, NextApiResponse } from "next";
import { supabasePrivate } from "~/lib/supabase-private";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    await supabasePrivate.rpc("increment_views", { page_slug: req.body.slug });
    return res.status(200).send("Success");
  } else {
    return res.status(400).send("Invalid request method");
  }
}
