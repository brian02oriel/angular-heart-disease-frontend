import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Dataset } from "../../interfaces/main.interface";
import { lastValueFrom } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class PredictionFormDataHandler {
  constructor(
    private http: HttpClient,
  ){

  }
  async Submit(rawData: Dataset): Promise<number>{
    const headers: HttpHeaders = new HttpHeaders({
      Accept: '*/*',
      'Content-Type': 'application/json'
    })

      const {
        sex,
        chestPainType,
        fastingBloodSugar,
        restingElectrocardiographicResults,
        exerciseInducedAngina,
        thal
      } = rawData

      const params = {
        ...rawData,
        sex: sex ? sex.value : 0,
        chestPainType: chestPainType ? chestPainType.value : 1,
        fastingBloodSugar: fastingBloodSugar ? fastingBloodSugar.value : 0,
        restingElectrocardiographicResults: restingElectrocardiographicResults ? restingElectrocardiographicResults.value : 0,
        exerciseInducedAngina: exerciseInducedAngina ? exerciseInducedAngina.value : 0,
        thal: thal ? thal.value : 3,
      }

      try {
        const data = await lastValueFrom(
          this.http.post<any>(
            'http://127.0.0.1:8080/',
            {
              params
            }, {
              headers
            })
        )
        console.log(Math.floor(Number(data.positive)))
        return Math.floor(Number(data.positive))
      } catch (error) {
        throw error
      }
    }
}
