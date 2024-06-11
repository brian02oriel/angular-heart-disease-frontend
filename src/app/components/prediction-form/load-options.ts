import { ChestPainType, HavePresence, RestingElectrocardiographicResults, Sex, Thal } from "../../interfaces/main.interface";

export const SexOptions: Sex[] = [
  {
    id: '0',
    text: 'Masculino',
    value: 0
  },
  {
    id: '1',
    text: 'Femenino',
    value: 1
  }
]

export const ChestPainTypeOptions: ChestPainType[] = [
  {
    id: '1',
    text: 'Tipo 1',
    value: 1
  },
  {
    id: '2',
    text: 'Tipo 2',
    value: 2
  },
  {
    id: '3',
    text: 'Tipo 3',
    value: 3
  },
  {
    id: '4',
    text: 'Tipo 4',
    value: 4
  }
]

export const FastingBloodSugarOptions: HavePresence[] = [
  {
    id: '0',
    text: 'Menor a 120mg/dl',
    value: 0
  },
  {
    id: '1',
    text: 'Mayor a 120mg/dl',
    value: 1
  }
]

export const RestingElectrocardiographicResultsOptions: RestingElectrocardiographicResults[] = [
  {
    id: '0',
    text: 'No detectado',
    value: 0
  },
  {
    id: '1',
    text: 'Tipo 1',
    value: 1
  },
  {
    id: '2',
    text: 'Tipo 2',
    value: 2
  },
]

export const ExerciseInducedAnginaOptions: HavePresence[] = [
  {
    id: '0',
    text: 'No detectado',
    value: 0
  },
  {
    id: '1',
    text: 'Detectado',
    value: 1
  }
]

export const ThalOptions: Thal[] = [
  {
    id: '3',
    text: 'Normal',
    value: 3
  },
  {
    id: '6',
    text: 'Defecto fijo',
    value: 6
  },
  {
    id: '7',
    text: 'Defecto reversible',
    value: 7
  }
]
