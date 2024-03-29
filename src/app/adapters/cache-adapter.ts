import { CacheOptions } from "@/domain/models/cache";
import { CacheFactory } from "@/app/factories/cache-factory";

export class CacheAdapter {
  public static createCacheAdapter(functionName: string, originalFunction: Function): Function {
    return function(...args: Array<any>) {
      const bindOriginalFunction = originalFunction.bind(this);
      const cacheService = CacheFactory.createCache({ expire: 30_000 }); // 30 seconds to be expire
      return cacheService.cache(args, functionName, bindOriginalFunction);
    };
  }

  public static createCacheParamAdapter(functionName: string, cacheOptions: CacheOptions, originalFunction: Function) {
    return function(...args: Array<any>) {
      const bindOriginalFunction = originalFunction.bind(this);
      const cacheService = CacheFactory.createCache(cacheOptions);
      return cacheService.cache(args, functionName, bindOriginalFunction);
    };
  }
}
