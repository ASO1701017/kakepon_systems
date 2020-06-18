<template>
    <div id="#app">
        <section>
            <div>
                <div id="title-login">
                    acsys にログイン
                </div>
                <div id="error-login" v-if="!ErrorMessage">
                    メールアドレスかパスワードが間違っています
                </div>
                <div>
                    <label for="Mail"><input type="email" id="Mail" placeholder="メールアドレス" v-model="MailAddress"></label>
                </div>
                <div>
                    <label for="Pass"><input type="Password" id="Pass" placeholder="パスワード" v-model="Password"></label>
                </div>
                <button @click="login" :disabled="!isValidated">ログイン</button>
                <UserLogin />
            </div>
            <div id="new-account">
                <router-link to="/signin">アカウントの新規作成</router-link>
            </div>
        </section>
    </div>
</template>

<script>

    import UserLogin from './UserLogin.vue'

    const auth = {
        login:function (mail,pass) {
            window.alert("mailaddress:" + mail + "\n" + "password:" + pass)
            if (mail === "こんばんわ"){
                window.alert("成功")
                this.$router.replace("/")
            }else {
                this.ErrorMessage = false
            }
        }
    };



    export default {
        components:{
            UserLogin
        },
        data(){
          return{
              MailAddress : "",
              Password: "",
              ErrorMessage:true,
          }
        },
        methods:{
            login:function () {
                // eslint-disable-next-line no-unused-vars
                this.ErrorMessage = auth.login(this.MailAddress, this.Password);
            },
        },
        computed: {
            isValidated() {
                return this.MailAddress !== "" && this.Password !== ""
            }
        },
    }</script>

<style scoped>

    button, input,div{
        font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
    }

    #title-login{
        font-size: 40px;
        margin-top: 100px;
    }

    #new-account{
        font-size: 20px;
        margin-top: 15px;
    }

    input {
        width: 25em;
        font-size: 20px;
        margin-top: 40px;
    }

    button {
        width: 25em;
        font-size: 20px;
        margin-top: 40px;
        padding:5px;
        line-height: normal;
        display:inline-block;
    }

    @media only screen and (max-device-width : 850px) {
        /* スマートフォンだけ以下を適用 */
        input {
            width: 95%;
            font-size: 20px;
            margin-top: 40px;
        }

        button {
            width: 95%;
            font-size: 20px;
            margin-top: 40px;
        }
    }
</style>