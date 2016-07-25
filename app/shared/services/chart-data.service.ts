///<reference path="../data/chart-data.ts"/>
import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {ChartData} from "../data/chart-data";

@Injectable()
export class ChartDataService {
    constructor(private _http:Http) {
    }

    private chartDataUrl = 'app/shared/data/chart-data.json';  // URL to web API

    getChartData(chartId:number):any {
        if(chartId == 1) {
            return {
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                datasets: [
                    {
                        label: 'First Dataset',
                        fill: false,
                        borderColor: '#4bc0c0',
                        data: [65, 59, 80, 81, 56, 55, 40]
                    },
                    {
                        label: 'Second Dataset',
                        fill: false,
                        borderColor: '#565656',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };
        }
        else if(chartId == 2){
            return {
                labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jly'],
                datasets: [
                    {
                        label: 'First Dataset',
                        fill: false,
                        borderColor: '#4bc0c0',
                        data: [650, 590, 800, 810, 560, 550, 400]
                    },
                    {
                        label: 'Second Dataset',
                        fill: false,
                        borderColor: '#565656',
                        data: [28, 48, 40, 19, 86, 27, 90]
                    }
                ]
            };
        }

    }

    // getChartData(chartId:number):Promise<any> {
    //
    //     return this._http.get(this.chartDataUrl)
    //         .map((response:Response)=>response.json())
    //         .toPromise()
    //         .catch((err:any)=> {
    //             console.log(err);
    //             return Promise.reject(err);
    //         });
    // }
}
