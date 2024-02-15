import { GlideRecord } from '@servicenow/glide'
import { TestingLogFunction } from './utility/utility'

export const testFunction = function (current: GlideRecord, _prev: GlideRecord) {
    TestingLogFunction(current.getValue('deadline'), current.getValue('test_field'));
}