import { gs } from '@servicenow/glide'
import moment from 'moment'

export function TestingLogFunction(dateValue: string, testValue: string){
    var a = moment('2024-02-12'); 
    var b = a.clone().add(1, 'week'); 
    a.format();
    b.format();
    var c = moment(dateValue).isValid();
    gs.addInfoMessage(`testing123 > coming from our sdk test ${ testValue } >> and now here's the date value from the todo ${ dateValue } and the date value after moment format ${ c } >> value of date a ${ a } -- value of date b (should be a week later) ${ b }`)
}