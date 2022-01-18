<template>


   
<div class = "container-fluid">
 
           <h3 style = "color : black; align : center; "  > TRENDING BADGES</h3>
<slider/>
      
 
</div>

</template>
<script>
import News from "../components/News";
import slider from "../components/slider";

export default {
  components: {
    
    News,
    slider
    
  }
}
</script>



<style>
.carousel img {
    height: 330px;
}
my2{
 padding: 0px;
}

</style>
