import LoadingComponent from  './Loading.vue'
import Login from '../../views/Login.vue'


export default{
    Loading : {
        install:function(Vue){
            Vue.component('Loading',LoadingComponent)
        }
    },
    
    
     Login : {
        install:function(Vue){
            Vue.component('Login',Login)
        }
    }
}



