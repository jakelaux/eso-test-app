import { GlideRecord, gs } from '@servicenow/glide'
import { TestingLogFunction } from './utility/utility.js';
import moment from 'moment';

export function showUpdate (current: GlideRecord, _prev: GlideRecord) {
    let a = moment('2024-02-12');
    let b = a.clone().add(1, 'week');
    a.format();
    b.format();
    TestingLogFunction(current.getValue('test_field'), current.getValue('deadline'));
}