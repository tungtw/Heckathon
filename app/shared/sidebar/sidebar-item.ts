import {ChartData} from "../data/chart-data";

export class ChartItem {
    constructor(public label:string, public icon:string, public command :() =>void) {
    }
}

