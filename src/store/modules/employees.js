import Vue from 'vue';
const axios = require('axios');

const namespaced = true;

const state = {
    employees: []
}

const getters = {

}

// actions are dispatched from components
const actions = {
    // actions have context as first param
    getEmployees(context) {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // commit the mutation
                context.commit('addInitialEmployees', response.data.filter(employee => employee.id < 5));
            })
    },
    addEmployee(context, employee) {
        context.commit('addEmployee', employee);
    }
}

// mutations are triggered with commit (from actions or directly from components)
const mutations = {
    addInitialEmployees(state, employees) {
        // with Vue.state you modify the state from store
        Vue.set(state, 'employees', employees);
    },
    addEmployee(state, employee) {
        const employees = state.employees;
        employees.push(employee);
        Vue.set(state, 'employees', employees);
    }
}

export const employees = {
    state,
    namespaced,
    getters,
    actions,
    mutations
};