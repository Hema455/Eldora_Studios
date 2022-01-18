<template>
      <div class="row">
    <div class = "col">   <About/> </div>
    <div  class = "col"> <carousel/> </div>
</div>
</template>
<script>
import carousel from "../components/carousel";
import About from "../components/About";

export default {
  components: {
    carousel,
    About
  }
}
</script>>