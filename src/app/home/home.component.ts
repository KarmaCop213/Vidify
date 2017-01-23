import {Component, OnInit} from '@angular/core';
import {FeaturesService} from '../features.service';

@Component({
  selector: 'vidify-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  features: any[];
  errorMessage: string;

  constructor(private featuresService: FeaturesService) {
  }

  ngOnInit() {
    this.getFeatures();
  }

  getFeatures() {
    this.featuresService.getFeatures()
        .subscribe(
            features => this.features = features,
            error => this.errorMessage = <any>error);
  }

  addFeature() {
    this.features.push({
      'name': '',
      'scenarios': [
        {
          'name': '',
          'steps': [
            {
              'number': 1,
              'result': '',
              'message': ''
            }
          ]
        }
      ]
    });
  }

  save() {
    this.featuresService.setFeatures(this.features).then(() => {
      alert('Saved!');
    });
  }

}
