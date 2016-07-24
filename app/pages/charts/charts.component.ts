import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {UIChart} from 'primeng/primeng';
import {ChartDataService} from "../../shared/services/chart-data.service";
import {ChartData} from "../../shared/data/chart-data";

@Component({
    moduleId: module.id,
    selector: 'chart-cmp',
    templateUrl: 'chart.component.html',
    directives: [ROUTER_DIRECTIVES, UIChart],
    providers: [ChartDataService]
})

export class ChartComponent implements OnInit {

    private sub:any;
    private chartId:number;
    private chartData:ChartData[];
    //Observable<string>;
    constructor(private route:ActivatedRoute, private chartDataService:ChartDataService) {
        this.route.params.subscribe(params => {
            this.chartId = +params['id'];
        });
        //Test Data
        this.data = {
            labels: ['1', '2', '3', '4', '5', '6', '7'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };

        //
    }

    ngOnInit():any {
        this.sub = this.route.params.subscribe(params => {
            this.chartId = +params['id'];
            this.chartDataService.getChartData(this.chartId)
                .then(data => {
                    this.chartData = data;
                });
        });
    }
}
