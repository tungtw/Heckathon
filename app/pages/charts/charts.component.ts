import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {UIChart, Message} from 'primeng/primeng';
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

    chartId:number;
    chartData:any;

    private sub:any;
    data:any;
    msgs:Message[];
    //Observable<string>;
    constructor(private route:ActivatedRoute, private chartDataService:ChartDataService) {
        this.route.params.subscribe(params => {
            this.chartId = +params['id'];
        });
    }

    ngOnInit():any {
        this.sub = this.route.params.subscribe(params => {
            this.chartId = +params['id'];
            this.chartData = this.chartDataService.getChartData(this.chartId);
        });

        // this.sub = this.route.params.subscribe(params => {
        //     this.chartId = +params['id'];
        //     this.chartDataService.getChartData(this.chartId)
        //         .then((data:any)=> {
        //             this.chartData = data;
        //         });
        // });
    }

    selectData(event:any) {
        this.msgs = [];
        this.msgs.push({
            severity: 'info',
            summary: 'Data Selected',
            'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]
        });
    }

}
