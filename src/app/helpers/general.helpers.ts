import { ValidationErrors } from "@angular/forms"

export const getErrorMessage = (object: ValidationErrors | null | undefined) => {
  if(object?.['required']){
    return 'Este campo es obligatorio'
  } else if(object?.['max'] !== undefined){
    return `Introduzca un valor menor a ${object?.['max']?.max}`
  } else if(object?.['min'] !== undefined){
    return `Introduzca un valor mayor a ${object?.['min']?.min}`
  } else {
    return ''
  }
}
