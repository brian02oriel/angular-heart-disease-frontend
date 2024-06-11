import { Dataset } from "../../interfaces/main.interface";

export class PredictionFormDataHandler {
  constructor(){

  }
  async Submit(rawData: Dataset){
    const {
      sex,
      chestPainType,
      fastingBloodSugar,
      restingElectrocardiographicResults,
      exerciseInducedAngina,
      thal
    } = rawData

    const data = {
      ...rawData,
      sex: sex ? sex.value : 0,
      chestPainType: chestPainType ? chestPainType.value : 1,
      fastingBloodSugar: fastingBloodSugar ? fastingBloodSugar.value : 0,
      restingElectrocardiographicResults: restingElectrocardiographicResults ? restingElectrocardiographicResults.value : 0,
      exerciseInducedAngina: exerciseInducedAngina ? exerciseInducedAngina.value : 0,
      thal: thal ? thal.value : 3,
    }

    console.log('Sending data: ', data)

  }
}
