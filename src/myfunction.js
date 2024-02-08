import { gs } from '@servicenow/glide'

/*export const showStatusUpdate = function (newStatus, oldStatus) {
    gs.addInfoMessage(`Record updated. Old Status: ${oldStatus}`)
    gs.addInfoMessage(`New Status: ${newStatus}`)
}*/
export const testFunction = function () {
    gs.addInfoMessage('testing123 > coming from our sdk test');
}