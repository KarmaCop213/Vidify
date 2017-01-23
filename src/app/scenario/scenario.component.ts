import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'vidify-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.css']
})
export class ScenarioComponent implements OnInit {

  @Input() scenario;
  @Input() featureId;
  @Input() features;

  constructor() {
  }

  ngOnInit() {
  }

  addStep() {
    this.scenario.steps.push({
      'number': 1,
      'result': '',
      'message': ''
    });
  }

  deleteScenario() {
    const foundFeature = this.features.find(feature => feature.id === this.featureId);
    foundFeature.scenarios.splice(foundFeature.scenarios.findIndex(scenario => scenario.id === this.scenario.id), 1);
  }
}
