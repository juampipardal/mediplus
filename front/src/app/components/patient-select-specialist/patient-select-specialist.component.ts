import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromPatientVIewState from '../../containers/reducers/index';
import * as PatientViewActions from '../../containers/actions/patient-view-status.actions';

@Component({
  selector: 'app-patient-select-specialist',
  templateUrl: './patient-select-specialist.component.html',
  styleUrls: ['./patient-select-specialist.component.scss']
})
export class PatientSelectSpecialistComponent implements OnInit {

  specialistArray = ['Traumatologo', 'Cirujano', 'Pediatra', 'Kinesiologo'];
  constructor(
    private patientViewStore: Store<fromPatientVIewState.State>
  ) { }

  ngOnInit() {
  }

  goToHome = () => {
    this.patientViewStore.dispatch(new PatientViewActions.Home);
  }

}
