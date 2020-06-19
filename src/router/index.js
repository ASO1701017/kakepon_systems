import Vue from 'vue'
import Router from 'vue-router'

//importするコンポーネント
import Top from "../components/Top";
import Save_calorie from "../components/Save_calorie";

Vue.use(Router)

export default new Router({
    routes:[
        // {
        //     path: '/sample', <-パス
        //     component: sample <-コンポーネント
        // },
        {
            path: '/Top',
            component: Top
        },
        {
            path: '/Save_calorie',
            component: Save_calorie,
        }
    ]
})