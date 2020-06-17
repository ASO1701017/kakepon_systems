<template>
    <div align="center">
        <div id="header">
            <h1>acsys</h1>
            <ul id="menu">
                <li><img src="../assets/カロリー貯金.png" width="80px" height="80px"><br></li>
                <li><img src="../assets/calendar.png" width="80px" height="80px"></li>
                <li><img src="../assets/training.png" width="80px" height="80px"></li>
                <li><img src="../assets/SNS.png" width="80px" height="80px"></li>
                <li>ログアウト</li>
            </ul>
        </div>

        <div id="body">
            <h2>
                運動不足から起因する生活習慣病や肥満の防止、<br>
                抵抗力の増加、正しいフォームでの運動を目的とした<br>
                そんなあなたへぴったりのシステムです。
            </h2>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Top"
    }
</script>

<style scoped>
    #header{
        display: flex;
        border-bottom: 1px solid #888888;
        width: 100%;
        position: relative;
    }
    #menu{
        list-style: none;
    }
    #menu li{
        text-align: center;
        background-color: #aaaaaa;
        display: inline-block;
        margin-right: 2px;
        width: 80px;
        height: 80px;
        line-height: 80px;
        border-radius: 50%;
        overflow: hidden;
    }
    #body{
        display: block;
        vertical-align: middle;
        text-align: center;
        background-image: url("../assets/background.png");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
    }
</style>