import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChestPainType, HavePresence, FormFields, RestingElectrocardiographicResults, Sex, Thal } from '../../interfaces/main.interface';
import { ChestPainTypeOptions, ExerciseInducedAnginaOptions, FastingBloodSugarOptions, RestingElectrocardiographicResultsOptions, SexOptions, ThalOptions } from './load-options';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { PredictionFormDataHandler } from './prediction-form.data.handler';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-prediction-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule,
    ProgressSpinnerModule
  ],
  providers: [
    PredictionFormDataHandler
  ],
  templateUrl: './prediction-form.component.html',
  styleUrl: './prediction-form.component.scss'
})
export class PredictionFormComponent implements OnInit {
  form: FormGroup<FormFields>
  sexOptions: Sex[] = SexOptions
  chestPainTypeOptions: ChestPainType[] = ChestPainTypeOptions
  fastingBloodSugarOptions: HavePresence[] = FastingBloodSugarOptions
  restingElectrocardiographicResultsOptions: RestingElectrocardiographicResults[] = RestingElectrocardiographicResultsOptions
  exerciseInducedAnginaOptions: HavePresence[] = ExerciseInducedAnginaOptions
  thalOptions: Thal[] = ThalOptions
  loading = false

  constructor(
    private dialogRef: DynamicDialogRef,
    private dataHandler: PredictionFormDataHandler
  ){

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

  async onSubmit(){
    const {
      age,
      sex,
      chestPainType,
      restingBloodPressure,
      serumCholestoral,
      fastingBloodSugar,
      restingElectrocardiographicResults,
      maxHeartRate,
      exerciseInducedAngina,
      oldpeak,
      STSegment,
      majorVessels,
      thal
    } = this.form.getRawValue()
    try {
        this.loading = true
        const res = await this.dataHandler.Submit({
          age: age ?? undefined,
          sex: sex ?? undefined,
          chestPainType: chestPainType ?? undefined,
          restingBloodPressure: restingBloodPressure ?? undefined,
          serumCholestoral: serumCholestoral ?? undefined,
          fastingBloodSugar: fastingBloodSugar ?? undefined,
          restingElectrocardiographicResults: restingElectrocardiographicResults ?? undefined,
          maxHeartRate: maxHeartRate ?? undefined,
          exerciseInducedAngina: exerciseInducedAngina ?? undefined,
          oldpeak: oldpeak ?? undefined,
          STSegment: STSegment ?? undefined,
          majorVessels: majorVessels ?? undefined,
          thal: thal ?? undefined
          })
          } catch (error) {
            console.error(error)
            }
          this.loading = false
          this.dialogRef.close()
  }

}
