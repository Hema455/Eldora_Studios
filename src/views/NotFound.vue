<template>
  <v-overlay absolute opacity="0.8">
    <v-row>
      <v-col class="text-center display-1">Page Not Found!</v-col>
    </v-row>
    <v-row>
      <v-col inline>will automatically redirect to home page in {{countdown}} s</v-col>
    </v-row>
  </v-overlay>
</template>

<script>
export default {
  data: () => ({
    countdown: 5,
    timer:[]
  }),
  mounted() {
    this.timer[0] = setInterval(() => {
      if (this.countdown > 0) this.countdown--;
    }, 1000);
    this.timer[1] = setTimeout(() => {
      this.$router.push("/");
    }, 5000);
  },
  destroyed() {
    clearInterval(this.timer[0]);
    clearTimeout(this.timer[1]);
  }
};
</script>