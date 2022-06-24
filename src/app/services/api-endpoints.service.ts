import { Injectable } from '@angular/core';
import { Constants } from '../config/constants';
import { QueryStringParameters } from '../_helpers/classes/query-string-parameters';
import { UrlBuilder } from '../_helpers/classes/url-builder';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointsService {

  constructor(private constants: Constants) { }

  private createUrl(action: string): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }

  private createUrlWithQueryParameters(
    action: string,
    queryStringHandler?: (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  private createUrlWithPathVariables(
    action: string,
    pathVariables: any[] = []
  ): string {
    let encodedPathVariablesUrl: string = '';
    for (const pathVariable of pathVariables) {
      if (pathVariable !== null) {
        encodedPathVariablesUrl += `/${encodeURIComponent(
          pathVariable.toString()
        )}`;
      }
    }
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      `${action}${encodedPathVariablesUrl}`
    );
    return urlBuilder.toString();
  }

  // getHotels = (): string => this.createUrl('hotels');

  getHotels = (): string => this.constants.API_ENDPOINT + '/hotels';

  getHotelById(id: any): string {
    return this.constants.API_ENDPOINT + '/hotels/' + id;
  }
}
