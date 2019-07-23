import Vue from 'vue';
import Vuex from 'vuex';
import {employees} from './modules/employees';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        employees
    }
})