<template>
  <v-container>
    <v-row align="center">
      <v-col class="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
        <v-card elevation="10">
          <v-form>
            <!-- title -->
            <v-row>
              <v-col class="text-center">
                <span class="display-1">Sign In</span>
              </v-col>
            </v-row>
            <!-- email input -->
            <v-row class="mx-12">
              <v-icon>mdi-email</v-icon>
              <v-text-field
                v-model="email"
                :error-messages="emailErrors"
                label="E-mail"
                required
                @blur="$v.email.$touch()"
              />
            </v-row>
            <!-- password input -->
            <v-row class="mx-12">
              <v-icon>mdi-lock</v-icon>
              <v-text-field
                type="password"
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              />
            </v-row>
            <!-- password reset link-->
            <v-row class="mx-12">
              <v-col class="text-right">
                <a href="/#/forget">Forget password?</a>
              </v-col>
            </v-row>
            <!-- submit button -->
            <v-row class="mx-12 pb-5">
              <v-btn block color="primary" @click.prevent="submit" type="submit">Sign in</v-btn>
            </v-row>
          </v-form>
          <!-- social media login -->
          <v-row>
            <v-col class="text-center pa-0">or</v-col>
          </v-row>
          <v-row class="mx-12">
            <v-col class="px-0 col-4">
              <a>
                <v-img src="../assets/Facebook-btn.png" max-height="26" contain />
              </a>
            </v-col>
            <v-col class="px-0 col-4">
              <a>
                <v-img src="../assets/Google-btn.png" max-height="26" contain />
              </a>
            </v-col>
            <v-col class="px-0 col-4">
              <a>
                <v-img src="../assets/Linkedin-btn.png" max-height="26" contain />
              </a>
            </v-col>
          </v-row>

          <!-- Redirect to Registration page -->
          <v-col class="text-right pr-12">
            Don't have an account?
            <a href="/#/register">Register</a>
          </v-col>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email } from "vuelidate/lib/validators";
export default {
  mixins: [validationMixin],
  validations: {
    password: { required },
    email: { required, email }
  },
  data: () => ({
    password: "",
    email: ""
  }),
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Must be valid e-mail");
      !this.$v.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        //send login request to backend

        //this is for test, locally change the login state
        this.$store.commit("login");
        this.$router.push("/");
      }
    }
  },
  mounted() {
    if (this.$store.state.loginState) {
      this.$router.push("/");
    }
  }
};
</script>