import { gs } from '@servicenow/glide'

export function TestingLogFunction(testValue, dateValue){
   gs.addInfoMessage(`testValue: ${testValue}, dateValue: ${ dateValue }`);
}