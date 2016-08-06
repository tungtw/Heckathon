import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {ChartData} from "../data/chart-data";

@Injectable()
export class ChartDataService {
    // private chartData1Url = 'app/shared/data/chart-data1.json';  // URL to web API
    private chartDataBaseUrl = 'http://localhost:11992/api/ChartData';  // URL to web API
    constructor(private http: Http) {
    }

    getChartData(chartNo: number): Observable<ChartData[]> {
        let chartDataUrl = this.chartDataBaseUrl + '/' + chartNo;//id == 1 ? this.chartData1Url : this.chartDataBaseUrl;
        return this.http.get(chartDataUrl)
            .map((res: Response) => ChartDataService.extractData(res))
            .catch(ChartDataService.handleError);
    }

    private static extractData(res: Response) {
        let body = res.json(); //parse the response data into a JSON object
        return body.data || {};
    }

    private static handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}