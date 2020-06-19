<template>
    <div id="#app">
        <section>
            <div id="login-back">
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
                    <label for="Pass"><input type="Password" id="Pass" placeholder="パスワード" v-model="Password" ></label>
                </div>
                <button @click="login"  class="btn-flat-vertical-border">ログイン</button>
                <UserLogin />
            <div id="new-account" >
                <router-link to="/signin" class="cp_link">アカウントの新規作成</router-link>
            </div>
            </div>
        </section>
    </div>
</template>

<script>

    import UserLogin from './UserLogin.vue'

    const auth = {
        login:function (mail,pass) {
            window.alert("mailaddress:" + mail + "\n" + "password:" + pass)
            return 2
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
                const check = auth.login(this.MailAddress, this.Password);
                if (check === 1){
                    this.$router.replace("/")
                }else {
                    this.ErrorMessage = false
                }
            },
        },
    }</script>

<style scoped>

    button, input,div{
        font-family: "Montserrat","游ゴシック",YuGothic,"ヒラギノ角ゴ ProN W3","Hiragino Kaku Gothic ProN","メイリオ",Meiryo,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        margin: 10px;
    }

    #title-login{
        font-size: 40px;
        margin-bottom: 10px;
    }

    #new-account{
        font-size: 20px;
        margin-top: 15px;
    }

    #login-back{
        margin-top: 100px;
        /*background: white;*/
        /*display: inline-block;*/
    }

    #error-login{
        font-size: 25px;
        margin-top: 20px;
        color: #ff7d6e;
        background: #ffebe9;
        border-top: solid 10px #ff7d6e;
        padding: 0.5em 1em;
        display: inline-block;
    }

    input {
        width: 25em;
        font-size: 20px;
        margin-top: 40px;
    }

    input:focus{
        border: 2px solid #1e4000;
        z-index: 10;
        outline: 0;
    }


    button {
        width: 25em;
        font-size: 20px;
        margin-top: 40px;
        padding:5px;
        line-height: normal;
        display:inline-block;
    }

    .btn-flat-vertical-border {
      position: relative;
      display: inline-block;
      font-weight: bold;
      padding: 0.5em 1em;
      text-decoration: none;
      border-left: solid 4px #6cbb00;
      border-right: solid 4px #6cbb00;
      color: #6cbb00;
      background: #fafff6;
      transition: .4s;
    }

    .btn-flat-vertical-border:hover {
      background: #6cbb00;
      color: #FFF;
    }

    .cp_link {
        padding: 0.1em 0.3em;
        background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 50%, rgb(131, 144, 7) 50%);
        background-position: 0 0;
        background-size: 200% auto;
        transition: .3s;
        color: #016500;
        text-decoration: none;
    }
    .cp_link:hover {
        background-position: -100% 0;
        color: #fff;
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