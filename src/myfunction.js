import { gs } from '@servicenow/glide'
import moment from 'moment'

/*export const showStatusUpdate = function (newStatus, oldStatus) {
    gs.addInfoMessage(`Record updated. Old Status: ${oldStatus}`)
    gs.addInfoMessage(`New Status: ${newStatus}`)
}*/
export const testFunction = function (testValue, dateValue) {
    var a = moment('2024-02-12'); 
    var b = a.clone().add(1, 'week'); 
    a.format();
    b.format();
    gs.addInfoMessage(`testing123 > coming from our sdk test ${ testValue }  >> and now here's the date value from the todo ${ dateValue } >> value of date a ${ a } -- value of date b (should be a week later) ${ b }`)
}