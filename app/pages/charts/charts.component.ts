import {Component, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {UIChart, Message} from 'primeng/primeng';
import {ChartDataService} from "../../shared/services/chart-data.service";

@Component({
    moduleId: module.id,
    selector: 'chart-cmp',
    templateUrl: 'chart.component.html',
    directives: [ROUTER_DIRECTIVES, UIChart],
    providers: [ChartDataService]
})

export class ChartComponent implements OnInit, OnDestroy {

    chartNo:number;
    chartData:any;
    errorMessage:any;

    private sub:any;
    msgs:Message[];

    constructor(private route:ActivatedRoute, private chartDataService:ChartDataService) {
    }

    ngOnInit():any {
        this.sub = this.route.params.subscribe(params => {
            this.chartNo = +params['chartNo'];
            this.chartDataService.getChartData(this.chartNo).subscribe(
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
