import { gs } from '@servicenow/glide'
import * as lodash from 'lodash'

export function TestingLogFunction(testValue, dateValue){
   gs.addInfoMessage(`testValue: ${ lodash.toUpper(testValue) }, dateValue: ${ dateValue }`);
}