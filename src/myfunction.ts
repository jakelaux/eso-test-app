import { GlideRecord, gs } from '@servicenow/glide'
import { TestingLogFunction } from './utility/utility.js';

export function showUpdate (current: GlideRecord, _prev: GlideRecord) {
    TestingLogFunction(current.getValue('test_field'), current.getValue('deadline'));
}