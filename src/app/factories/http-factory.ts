import { HttpService } from "@/domain/services/http-service";
import { HttpFetchImpl } from "@/infra/http/http-fetch-impl";
import { HttpUseCase } from "@/domain/usecases/http-usecase";
import { HttpAxiosImpl } from "@/infra/http/http-axios-impl";
import { HttpClientOptions } from "@/domain/models/http";
import { LoggerImpl } from "@/infra/logger/logger-impl";

export class HttpFactory {
  public static createHttpRequest(httpClientOptions: HttpClientOptions): HttpUseCase {
    const logger = new LoggerImpl();
    const httpClient = new HttpFetchImpl();
    const axiosApp = httpClientOptions.axiosInstance;
    const httpAxios = new HttpAxiosImpl(axiosApp);
    return new HttpService(httpClientOptions, axiosApp ? httpAxios : httpClient, logger);
  }
}
