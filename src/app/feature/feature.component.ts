import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'vidify-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  expanded: boolean;
  @Input() feature;
  @Input() features;

  constructor() {
  }

  ngOnInit() {
    this.expanded = false;
  }

  addScenario() {
    this.feature.scenarios.push({
      'name': '',
      'steps': [
        {
          'number': 1,
          'result': '',
          'message': ''
        }
      ]
    });
  }

  deleteFeature(featureId: any) {
    this.features.splice(this.features.findIndex(element => element.id === featureId), 1);
  }
}
