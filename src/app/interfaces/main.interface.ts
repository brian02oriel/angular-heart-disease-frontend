import {  FormControl, FormGroup } from "@angular/forms"

export interface Dataset {
  age?: number
  sex?: Sex
  chestPainType?: ChestPainType
  restingBloodPressure?: number
  serumCholestoral?: number
  fastingBloodSugar?: HavePresence
  restingElectrocardiographicResults?: RestingElectrocardiographicResults
  maxHeartRate?: number
  exerciseInducedAngina?: HavePresence
  oldpeak?: number
  STSegment?: number
  majorVessels?: number
  thal?: Thal
}

export interface FormFields {
  age: FormControl<number | null>
  sex: FormControl<Sex | null>
  chestPainType: FormControl<ChestPainType | null>
  restingBloodPressure: FormControl<number | null>
  serumCholestoral: FormControl<number | null>
  fastingBloodSugar: FormControl<HavePresence | null>
  restingElectrocardiographicResults: FormControl<RestingElectrocardiographicResults | null>
  maxHeartRate: FormControl<number | null>
  exerciseInducedAngina: FormControl<HavePresence | null>
  oldpeak: FormControl<number | null>
  STSegment: FormControl<number | null>
  majorVessels: FormControl<number | null>
  thal: FormControl<Thal | null>
}

export interface Select {
  id: string
  text: string
}

export interface Sex extends Select {
  value: 0 | 1 // male = 1, female = 0
}

export interface ChestPainType extends Select {
  value: 1 | 2 | 3 | 4
}

export interface HavePresence extends Select {
  value: 0 | 1
}

export interface RestingElectrocardiographicResults extends Select {
  value: 0 | 1 | 2
}

export interface Thal extends Select {
  value: 3 | 6 | 7 // normal = 3, fixed defect = 6, reversable defect = 7
}
