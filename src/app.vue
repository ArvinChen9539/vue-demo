<template>
    <div class="sys-main">
        <main-header></main-header>
        <main-body></main-body>
        <main-footer></main-footer>
    </div>
</template>
<script>
    import {MainHeader, MainBody, MainFooter} from "./components/layout/"

    export default {
        components: {
            MainHeader,
            MainBody,
            MainFooter
        },
        methods: {}
    };
</script>

<style>
.sys-main{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content:center;
    flex-direction: column;
}
</style>