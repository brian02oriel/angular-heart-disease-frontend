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
import { getErrorMessage } from '../../helpers/general.helpers';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-prediction-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DropdownModule,
    InputNumberModule,
    ButtonModule,
    ProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [
    PredictionFormDataHandler
  ],
  templateUrl: './prediction-form.component.html',
  styleUrl: './prediction-form.component.scss'
})
export class PredictionFormComponent implements OnInit {
  getErrorMessage = getErrorMessage
  form: FormGroup<FormFields>
  formInitialValues: any
  sexOptions: Sex[] = SexOptions
  chestPainTypeOptions: ChestPainType[] = ChestPainTypeOptions
  fastingBloodSugarOptions: HavePresence[] = FastingBloodSugarOptions
  restingElectrocardiographicResultsOptions: RestingElectrocardiographicResults[] = RestingElectrocardiographicResultsOptions
  exerciseInducedAnginaOptions: HavePresence[] = ExerciseInducedAnginaOptions
  thalOptions: Thal[] = ThalOptions
  loading = false
  res: number | undefined = undefined

  constructor(
    private dialogRef: DynamicDialogRef,
    private dataHandler: PredictionFormDataHandler
  ){

  }
  ngOnInit(){
    this.form = new FormGroup<FormFields>({
      age: new FormControl(null, [Validators.required, Validators.min(10), Validators.max(120)]),
      sex: new FormControl(null, Validators.required),
      chestPainType: new FormControl(null, Validators.required),
      restingBloodPressure: new FormControl(null, [Validators.required, Validators.min(120), Validators.max(190)]),
      serumCholestoral: new FormControl(null, [Validators.required, Validators.min(140), Validators.max(400)]),
      fastingBloodSugar: new FormControl(null, Validators.required),
      restingElectrocardiographicResults: new FormControl(null, Validators.required),
      maxHeartRate: new FormControl(null, [Validators.required, Validators.min(120), Validators.max(220)]),
      exerciseInducedAngina: new FormControl(null, Validators.required),
      oldpeak: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(4)]),
      STSegment: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(3)]),
      majorVessels: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(3)]),
      thal: new FormControl(null, Validators.required),
    })
    this.formInitialValues = this.form.value
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
        this.res = await this.dataHandler.Submit({
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
          this.form.reset(this.formInitialValues)
          //this.dialogRef.close()
  }

  onFill(){
    this.form.controls.age.setValue(63)
    this.form.controls.sex.setValue({
      id: '1',
      text: 'Femenino',
      value: 1
    })
    this.form.controls.chestPainType.setValue({
      id: '4',
      text: 'Tipo 4',
      value: 4
    })
    this.form.controls.restingBloodPressure.setValue(130)
    this.form.controls.serumCholestoral.setValue(330)
    this.form.controls.fastingBloodSugar.setValue({
      id: '1',
      text: 'Mayor a 120mg/dl',
      value: 1
    })
    this.form.controls.restingElectrocardiographicResults.setValue({
      id: '2',
      text: 'Tipo 2',
      value: 2
    })
    this.form.controls.maxHeartRate.setValue(132)
    this.form.controls.exerciseInducedAngina.setValue({
      id: '1',
      text: 'Detectado',
      value: 1
    })
    this.form.controls.oldpeak.setValue(1.8)
    this.form.controls.STSegment.setValue(1)
    this.form.controls.majorVessels.setValue(3)
    this.form.controls.thal.setValue({
      id: '7',
      text: 'Defecto reversible',
      value: 7
    })

  }

  onRepeat(){
    this.res = undefined
  }

}
