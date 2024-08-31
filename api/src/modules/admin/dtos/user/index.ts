export interface UserLoginDTO {
  email: string;
  password: string;
}

export interface UserCreateDTO {
  email: string;
  password: string;
  name: string;
}

export interface UserDTO {
  id?: number;
  email: string;
  password: string;
  name: string;
  role?: "user" | "doctor";
  created_at?: Date;
  updated_at?: Date;
}

export interface IUserTokenDTO {
  user_id: number;
  expires_date: Date;
  refresh_token: string;
}
