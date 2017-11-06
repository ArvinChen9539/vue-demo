<template>
    <div class="main-body">
        <div class="container">主体内容测试
            <button @click="test()">测试网络请求</button>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import api from '../api/index'

    export default {
        methods: {
            test() {
                console.log('测试');
                console.log(api);
                api('/user/login', {loginName: 'admin', password: '1'}).then(data => {
                    console.log(data);
                });

                api('/user/getLoginInfo', {loginName: 'admin', password: '1'}).then(data => {
                    console.log(data);
                });
            }
        }
    };
</script>
<style scoped>
    .main-body {
        display: flex;
        justify-content: center;

        flex-grow: 2;
        overflow-y: auto;
        overflow-x: hidden;
        align-self: center;
        order: 1;
        /*align-items: stretch;*/

        background-color: #F5F8FB;
        width: 100%;
        /*height: 0px;*/
    }

    .container {
        width: 1200px;
        background-color: gold;
    }
</style>