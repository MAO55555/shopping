<template>
    <div>
        <Topbar />
        <Header />
        <router-view></router-view>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import Topbar from "./components/Topbar/index.vue";
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";
</script>

<style scoped>

</style>