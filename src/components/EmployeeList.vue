<template>
    <div class="list">
        <div v-for="employee in employees" :key="employee.id" class="employees-container">
            <Employee :id="employee.id" 
                :name="employee.name" 
                :email="employee.email" 
                :phone="employee.phone" 
                :isGold="employee.isGold"/>
        </div>
    </div>
</template>

<script>
import Employee from './Employee';
import { mapState } from 'vuex'

export default {
    name: 'EmployeeList',
    components: {
        Employee
    }, 
    mounted() {
        this.$store.dispatch('employees/getEmployees');
    },
    computed: {
        ...mapState('employees', ['employees'])
    }
}
</script>

<style>

</style>
