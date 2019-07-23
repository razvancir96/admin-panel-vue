<template>
  <div id="app">
    <AddEmployee/>
    <EmployeeList />
  </div>
</template>

<script>
import AddEmployee from './components/AddEmployee';
import EmployeeList from './components/EmployeeList';

export default {
  name: 'app',
  components: {
    AddEmployee,
    EmployeeList
  }
}
</script>

<style>

</style>
