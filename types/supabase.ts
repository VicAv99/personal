export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      views: {
        Row: {
          created_at: string | null;
          id: number;
          slug: string;
          view_count: number;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          slug: string;
          view_count?: number;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          slug?: string;
          view_count?: number;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
