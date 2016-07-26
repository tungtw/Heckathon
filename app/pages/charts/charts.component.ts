import {Component, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {UIChart, Message} from 'primeng/primeng';
import {ChartDataService} from "../../shared/services/chart-data.service";
import {TestService} from "../../shared/services/test.service";

@Component({
    moduleId: module.id,
    selector: 'chart-cmp',
    templateUrl: 'chart.component.html',
    directives: [ROUTER_DIRECTIVES, UIChart],
    providers: [ChartDataService, TestService]
})

export class ChartComponent implements OnInit, OnDestroy {

    chartId:number;
    chartData:any;
    errorMessage:any;

    private sub:any;
    msgs:Message[];

    constructor(private route:ActivatedRoute, private chartDataService:TestService) {
        this.route.params.subscribe(params => {
            this.chartId = +params['id'];
        });
    }

    ngOnInit():any {
        this.sub = this.route.params.subscribe(params => {
            this.chartId = +params['id'];
            this.chartDataService.getChartData(this.chartId).subscribe(
                data=>this.chartData = data,
                error=>this.errorMessage = <any>error);
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    selectData(event:any) {
        this.msgs = [];
        this.msgs.push({
            severity: 'info',
            summary: 'Data Selected',
            'detail': this.chartData.datasets[event.element._datasetIndex].data[event.element._index]
        });
    }
}
