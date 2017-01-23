import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'vidify-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  @Input() step;
  @Input() features;
  @Input() featureId;
  @Input() scenarioId;

  constructor() {
  }

  ngOnInit() {
  }

  deleteStep() {
    const foundFeature = this.features.find(feature => feature.id === this.featureId);
    const foundScenario = foundFeature.find(scenario => scenario.id === this.scenarioId);
    foundScenario.steps.splice(foundScenario.steps.findIndex(step => step.id === this.step.id), 1);
  }
}
