import { computed } from "vue";
import { useStore } from "vuex";

const useCount = () => {
    const store = useStore()

    const myCount = computed( () => store.state.count)

    const myhistory = computed( () => store.state.history)


    const myIncrement = () => {
      store.commit('increment')
    }
    
    const myDecrement = () => {
        store.commit('decrement')
      }
    
      const myReset = () => {
        store.commit('reset')
      }

      const mySetInput = () => {
        store.commit('setValue')
      }




    return { myCount, myhistory, myIncrement, myDecrement, myReset, mySetInput}

}


export default useCount