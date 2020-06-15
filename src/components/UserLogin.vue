<template>
    <div id="#app" class="page">
        <div id="login">
            acsys にログイン
            <div>
                <label for="Mail"><input type="text" id="Mail" placeholder="メールアドレス" v-model="MailAddress"></label>
            </div>
            <div>
                <label for="Pass"><input type="Password" id="Pass" placeholder="パスワード" v-model="Password"></label>
            </div>
            <button @click="login">ログイン</button>
            <UserLogin />
        </div>
    </div>
</template>

<script>

    import UserLogin from './UserLogin.vue'

    export default {
        components:{
            UserLogin
        },
    }
</script>

<style scoped>
    .page{
        font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    #login{
        text-align: center;
        font-size: 40px;
        margin-top: 100px;
        margin-left: 10px;
        margin-right:10px;
    }

    input {
        width: 25em;
        font-size: 20px;
        margin-top: 40px;
        font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
    }

    button {
        width: 25em;
        font-size: 20px;
        margin-top: 30px;
        padding:5px;
        line-height: normal;
        display:inline-block;
        font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;

    }

    @media only screen and (max-device-width : 850px) {
        /* スマートフォンだけ以下を適用 */
        input {
            width: 95%;
            font-size: 20px;
            margin-top: 40px;
            font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
        }

        button {
            width: 95%;
            font-size: 20px;
            margin-top: 30px;
            font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
        }
    }
</style>