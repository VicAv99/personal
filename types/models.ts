import { Database } from "./supabase";

export type ViewsTable = Database["public"]["Tables"]["views"];

export type View = ViewsTable["Row"];
