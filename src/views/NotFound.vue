<template>
  <h1> Error!!! Page Does Not Exist.</h1>

  <div class="not-found">
   <h3>Go back to </h3>

   <ul>
      <li><router-link :to="{name: 'Home'}">Home</router-link></li>
      <li><router-link :to="{name: 'Counter'}">Counter</router-link></li>
    </ul>
  
    

  </div>
  
</template>

<script>

</script>

<style scoped>



  .not-found {
    margin: 20px auto;
    max-width: 600px;
    text-align: center;
  }
  
  h1 {
    font-size: 3rem;
    margin-bottom: 10px;
    color: red;
  }
  

  
  ul {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }
  
  li {
    margin-right: 20px;
  }
  
  a {
    
    border: whitesmoke 1px solid;
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    font-size: 1.2rem;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
  }
  
  a:hover {
    background-color: gray;
  } 

   

   h3{
    color: whitesmoke;
   }

</style>





