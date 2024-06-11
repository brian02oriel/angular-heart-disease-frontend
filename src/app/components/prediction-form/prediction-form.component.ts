import { Component, OnDestroy, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChestPainType, HavePresence, FormFields, RestingElectrocardiographicResults, Sex, Thal } from '../../interfaces/main.interface';
import { ChestPainTypeOptions, ExerciseInducedAnginaOptions, FastingBloodSugarOptions, RestingElectrocardiographicResultsOptions, SexOptions, ThalOptions } from './load-options';

@Component({
  selector: 'app-prediction-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule
  ],
  templateUrl: './prediction-form.component.html',
  styleUrl: './prediction-form.component.scss'
})
export class PredictionFormComponent implements OnInit, OnDestroy {
  form: FormGroup<FormFields>
  sexOptions: Sex[] = SexOptions
  chestPainTypeOptions: ChestPainType[] = ChestPainTypeOptions
  fastingBloodSugarOptions: HavePresence[] = FastingBloodSugarOptions
  restingElectrocardiographicResultsOptions: RestingElectrocardiographicResults[] = RestingElectrocardiographicResultsOptions
  exerciseInducedAnginaOptions: HavePresence[] = ExerciseInducedAnginaOptions
  thalOptions: Thal[] = ThalOptions

  constructor(){

  }
  ngOnInit(){
    this.form = new FormGroup<FormFields>({
      age: new FormControl(15, Validators.required),
      sex: new FormControl(null, Validators.required),
      chestPainType: new FormControl(null, Validators.required),
      restingBloodPressure: new FormControl(0, Validators.required),
      serumCholestoral: new FormControl(0, Validators.required),
      fastingBloodSugar: new FormControl(null, Validators.required),
      restingElectrocardiographicResults: new FormControl(null, Validators.required),
      maxHeartRate: new FormControl(0, Validators.required),
      exerciseInducedAngina: new FormControl(null, Validators.required),
      oldpeak: new FormControl(0, Validators.required),
      STSegment: new FormControl(0, Validators.required),
      majorVessels: new FormControl(0, Validators.required),
      thal: new FormControl(null, Validators.required),
    })
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  async onSubmit(){
    console.log(this.form.getRawValue())
  }

}
