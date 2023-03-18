import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'
//import store from './store'


const store = createStore ({
    state(){
      return {
        count: 0,
        inputField: '',
        history : ['0'],
      }
    },
  
    mutations: {
       increment (state) { 
         state.count++
        },
      decrement (state){ state.count--}, 
      reset(state) {state.count = state.count * 0},
      setValue (state) {
        if (state.inputField !== '' ){
          state.history.push(state.inputField)
        }
      
        
        if(state.count && state.inputField === ''){
           return
        } if (state.count === 0 && state.inputField!== '' ){
          state.count = state.inputField
         state.inputField = ''
        } if (state.count!== 0 && state.inputField!== ''){
          state.count = state.inputField
         state.inputField = ''
        }
        
        
      }
    }
  
  
  })



createApp(App)
.use(store)
.use(router)
.mount('#app')
