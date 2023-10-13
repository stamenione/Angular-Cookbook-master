import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-vc-logs',
  templateUrl: './vc-logs.component.html',
  styleUrls: ['./vc-logs.component.scss']
})
export class VcLogsComponent implements OnInit {
  @Input() vName;
  logs: string[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.logs);
  }

  ngOnChanges(changes: SimpleChange){
    const currValue = changes.currentValue;
    if(changes.firstChange){
      this.logs.push(`initial version is ${currValue.trim()}`);
    }else{
      this.logs.push(`version changed to ${currValue.trim()}`);
    }
  }
}
