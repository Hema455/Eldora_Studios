<template>

  <v-container id="mainbox" class = " w-100" >
    <v-card v-for="i in [index]" :key="i">
      <v-row>
        <v-col align="left" cols="1" class="pt-12">
          <a class="common" @click="prev" href="#">&#10094;</a>
        </v-col>
        <v-col align="center" cols="3">
          <v-img :src="showCard.src" max-height="100" contain />
        </v-col>
        <v-col align="center" cols="6">
          <v-card-text align="center" justify-center>{{showCard.desc}}</v-card-text>
        </v-col>
        <v-col align="right" class="pt-12">
          <a class="common" @click="next" href="#">&#10095;</a>
        </v-col>
      </v-row>
    </v-card>
  </v-container>

</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          src: require("../assets/badges/Afternoon Shift.png"),
          desc: `Badge 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
          src: require("../assets/badges/Night Shift.png"),
          desc: `Badge 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        },
        {
          src: require("../assets/badges/Morning Shift.png"),
          desc: `Badge 3Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
        }
      ],
      timer: null,
      index: 0
    };
  },

  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.index += 1;
    },
    prev: function() {
      this.index -= 1;
    }
  },

  computed: {
    showCard: function() {
      return this.cards[Math.abs(this.index) % this.cards.length];
    }
  }
};
</script>

<style scoped>
#mainbox {
  height: 40%;
  width: 50%;
  float: right;
}
.common {
  cursor: pointer;
  width: auto;
  padding: 16px;
  color: rgb(124, 119, 119);
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.common:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
