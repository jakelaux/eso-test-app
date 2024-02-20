import { GlideRecord, gs } from '@servicenow/glide'
import { TestingLogFunction } from './utility/utility'

export const testFunction = function (current: GlideRecord, _prev: GlideRecord) {
    gs.addInfoMessage('testing in the myfunction: hello!');
    TestingLogFunction(current.getValue('deadline'), current.getValue('test_field'));
}