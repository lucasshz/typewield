import { Cache } from "@/domain/models/cache";

export interface CacheDatabase {
  get(key: string): Cache
  has(key: string): boolean
  getAll(): Map<string, Cache>
  delete(key: string): boolean
  set(key: string, data: Cache): void
  deleteExpired(): boolean
  isExpired(cache: Cache): boolean
}
