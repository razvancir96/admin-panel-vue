<template>
    <form @submit.prevent="addEmployee">
        <label for="name">Nume:</label>
        <input v-model="name" type="text" id="name">
        <label for="email">Email:</label>
        <input v-model="email" type="text" id="email">
        <label for="phone">Phone:</label>
        <input v-model="phone" type="text" id="phone">
        <label for="isGold">Client GOLD</label>
        <input v-model="isGold" type="checkbox" id="isGold">
        <input type="submit" name="submit">
    </form>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'AddEmployee',
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            isGold: false
        }
    }, 
    computed: {
        ...mapState('employees', ['employees']),
    },
    methods: {
        maxId() {
            let maxId;
            if (this.employees.length) {
                maxId = this.employees[this.employees.length - 1].id + 1;
            } else {
                maxId = 1;
            }
            return maxId;
        },
        addEmployee() {
            // here we submit our data
            let id = this.maxId();
            const {name, email, phone, isGold} = this;
            this.$store.dispatch('employees/addEmployee', {
                id,
                name,
                email,
                phone,
                isGold,
            });
            this.name = '';
            this.email = '';
            this.phone = '';
            this.isGold = false;
        }
    }
}
</script>

<style scoped>
    form {
        display: flex;
        flex-flow: column nowrap;
    }

    label, input {
        width: 50%;
    }

</style>
