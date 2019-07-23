<template>
    <div class="person-info">
        <p><strong>Nume:</strong> {{name}}</p>
        <p><strong>Email:</strong> {{email}}</p>
        <p><strong>Telefon:</strong> {{phone}} </p>
        <p v-if="isGold"><em>Client GOLD</em></p>
    </div>
</template>

<script>
export default {
    name: 'Employee',
    props: {
        id: Number,
        name: String,
        email: String,
        phone: String,
        isGold: Boolean
    }
}
</script>

<style>

</style>
