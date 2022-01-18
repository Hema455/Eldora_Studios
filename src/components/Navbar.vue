<template>
  <v-app-bar color="primary" fixed app>
    <!-- Eldora Logo -->
    <v-toolbar-title>
      <a href="/#/">
        <v-img
          src="../assets/Logo.png"
          position="left"
          aspect-ratio
          max-height="30"
          max-width="300"
        ></v-img>
      </a>
    </v-toolbar-title>
    <!-- Menu -->
    <v-toolbar-items>
      <v-btn
        class="font-weight-light"
        text
        color="background"
        v-for="item in menuitems"
        :key="item.title"
        router
        :to="item.route"
      >
        <v-icon small>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>

    <!-- flex space area in the middle -->
    <div class="flex-grow-1"></div>
    <!-- Signin section, will be changed based on the login state(user token from backend)  -->
    <!-- dashboard and user icon -->
    <v-toolbar-items v-if="loginState()">
      <!-- the test button to mannully switch usertype -->
      <v-btn color="primary" depressed class="mr-4" @click="switchUser">
        <v-icon large>mdi-account-switch</v-icon>
      </v-btn>
      <v-btn color="primary" depressed class="mr-4" href="/#/dashboard">
        <v-icon large>mdi-view-dashboard</v-icon>
      </v-btn>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" v-on="on" depressed class="mr-4">
            <v-icon large>mdi-account</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <a @click="$router.push('/dashboard')">Dashboard</a>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item>
            <a @click="logout">Sign out</a>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <!-- sign in and register link -->
    <v-toolbar-items v-if="!loginState()">
      <v-btn class="font-weight-light" href="/#/login" text color="background">Sign in</v-btn>
      <v-btn class="font-weight-light" href="/#/register" text color="background">Register</v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    menuitems: [
      {
        icon: "mdi-magnify",
        title: "Search Jobs",
        route: "/search",
      },
      {
        icon: "",
        title: "Employers",
        route: "/recruiter",
      },
      {
        icon: "",
        title: "Career Services",
        route: "/careerService",
      },
      {
        icon: "",
        title: "Contact Us",
        route: "/contact",
      },
      {
        icon: "",
        title: "FAQ",
        route: "/faq",
      },
    ],
  }),
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/");
    },
    loginState() {
      return this.$store.state.loginState;
    },
    switchUser() {
      this.$store.commit("switchUser");
    },
  },
};
</script>
