import { CacheOptions } from "@/domain/models/cache";
import { CacheAdapter } from "@/app/adapters/cache-adapter";

export function Cache(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
  const originalFunction = descriptor.value;
  descriptor.value = CacheAdapter.createCacheAdapter(propertyKey, originalFunction);
}

export function CacheParam(cacheOptions: CacheOptions): Function {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor): void {
    const originalFunction = descriptor.value;
    descriptor.value = CacheAdapter.createCacheParamAdapter(propertyKey, cacheOptions, originalFunction);
  };
}
