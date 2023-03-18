<template>

<div class="container">
  
    <div class="counter">
        <h1>COUNTER: {{ myCount }}</h1>
        </div>
  


  <input class="text-input"
    type="number"
    placeholder="enter number"
    v-model="$store.state.inputField"
  />
  
  
  <div >
  <button class="all-buttons" @click="myIncrement">+</button>
  <button class="all-buttons" @click="myDecrement">-</button>
  <button class="all-buttons" @click="myReset">Reset</button>
  <button class="all-buttons" @click="mySetInput">Set-num</button>
  </div>

  <div class="history-box">
    <h2>History Of Your set Values</h2>
    <p v-for="(num, index) in myhistory" :key="index" class="history-items">
      {{ num }}
    </p>
  </div>
  
  </div>

</template>



<script>
import useCount from "../Composables/cccount";

//import {mapMutations} from 'vuex'

export default {
  setup() {
    const {
      myCount,
      myhistory,
      myIncrement,
      myDecrement,
      myReset,
      mySetInput,
    } = useCount();

    return {
      myCount,
      myhistory,
      myIncrement,
      myDecrement,
      myReset,
      mySetInput,
    };
  },

  //methods: {
  //...mapMutations(['increment', 'decrement', 'reset', 'setValue'])
  //}
};
</script>


<style >


body {
  background-image: linear-gradient(to right, #434343 0%, black 100%);
}

.container{

    display: flex;
    flex-direction: column;
    align-items: center;
    

}

.text-input {
    padding: 8px;
  font-size: 18px;
  border-radius: 8px;
  border: 2px solid #ccc;
  margin-bottom: 16px;
}



Button{
  display: flex;
  margin: 30px;
  width: 70%;
  padding: 12px 24px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  
  

}

Button:hover {
  background-color: red;
  color: whitesmoke;
}

p{
    display: inline-block;
    padding: 10px;
    margin: 10px;
    background: gray;
    color: white;
    border-radius: 50%;

}

h2{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  
}
</style>
