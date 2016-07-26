import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable}     from 'rxjs/Observable';
import {ChartData} from "../data/chart-data";

@Injectable()
export class TestService {
    private chartData1Url = 'app/shared/data/chart-data1.json';  // URL to web API
    private chartData2Url = 'app/shared/data/chart-data2.json';  // URL to web API
    constructor(private http:Http) {
    }

    getChartData(id:number):Observable<ChartData[]> {
        let chartDataUrl = id == 1 ? this.chartData1Url : this.chartData2Url;
        return this.http.get(chartDataUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res:Response) {
        let body = res.json(); //parse the response data into a JSON object
        return body.data || {};
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}