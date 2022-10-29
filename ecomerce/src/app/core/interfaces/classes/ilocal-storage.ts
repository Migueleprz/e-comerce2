export interface ILocalStorage {
  set(key: string, data: any): string;

  get(key: string): string;

  gets(key: string): string;

  remove(key: string): void;

  clear(): void;
}
