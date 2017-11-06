<template>
    <div class="main-header">菜单:
        <router-link to="/page1">Go to page1</router-link>
        <router-link to="/page2">Go to page2</router-link>
    </div>
</template>

<script>
    export default {};
</script>
<style scoped>
    .main-header {
        flex: 0 0 auto;
        align-self: center;
        order: 0;
        align-content: flex-start;

        background-color: #ffffff;
        height: 70px;
    }
</style>