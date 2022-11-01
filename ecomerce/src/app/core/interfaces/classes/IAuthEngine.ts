export interface IAuthEngine{
  login(data: FormData): void;
  register(data: FormData): void;
  logout(): void;
}
