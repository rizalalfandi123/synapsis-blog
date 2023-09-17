export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface PaginationParams {
  perPage: number;
  page: number;
}

export interface Comment {
  id: number;
  post_id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  gender: "female" | "male";
  status: "inactive" | "active";
}

export type UserForm = Omit<User, "id" | "status">;
