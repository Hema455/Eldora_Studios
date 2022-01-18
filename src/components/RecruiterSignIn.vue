<template>
  <div class = "container-fluid">
     <v-layout row wrap justify-center>
      <v-flex xs12 md4 lg>
        <v-card flat class="mx-auto">
          <br />
          <v-card-text class="headline">We help you find the right candidates for your business.</v-card-text>
          <br />
          <v-card-text class="subtitle-2">Register and start posting jobs with Eldora today.</v-card-text>
        </v-card>
      </v-flex>
      <!-- sign-in and register tabs -->
      <v-flex xs12 sm6 md6 lg6>
        <v-card flat>
        <v-tabs grow slider-color="success" active-class="success--text">
          <!-- card headline and text -->
          <v-tab>Register</v-tab>
          <v-tab>Sign In</v-tab>
          <!-- registration tab -->
          <v-tab-item>
            <v-form>
              <v-row class="mx-12">
                <v-text-field
                  v-model="register.email"
                  :error-messages="reg_emailErrors"
                  label="Email"
                  required
                  @blur="$v.register.email.$touch()"
                />
              </v-row>
              <v-row class="mx-12">
                <v-text-field
                  v-model="register.password"
                  :error-messages="reg_passwordErrors"
                  label="Password"
                  type="password"
                  required
                  @blur="$v.register.password.$touch()"
                />
              </v-row>
              <v-row class="mx-12">
                <v-btn block color="success" @click.prevent="onRegister">Register</v-btn>
              </v-row>
            </v-form>
          </v-tab-item>
          <!-- sign-in tab -->
          <v-tab-item>
            <v-form>
              <v-row class="mx-12">
                <v-text-field
                  v-model="signIn.email"
                  :error-messages="emailErrors"
                  label="Email"
                  required
                  @blur="$v.signIn.email.$touch()"
                />
              </v-row>
              <v-row class="mx-12">
                <v-text-field
                  v-model="signIn.password"
                  :error-messages="passwordErrors"
                  label="Password"
                  type="password"
                  required
                  @blur="$v.signIn.password.$touch()"
                />
              </v-row>
              <v-row class="mx-12">
                <v-btn block color="success" @click.prevent="onSignIn">Sign In</v-btn>
              </v-row>
            </v-form>
          </v-tab-item>
        </v-tabs>
        </v-card>
      </v-flex>
    </v-layout> 
  </div>
</template>
<script>
import { validationMixin } from "vuelidate";
import { Base64 } from "js-base64";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    signIn: {
      password: { required },
      email: { required, email }
    },
    register: {
      password: { required, minLength: minLength(6) },
      email: { required, email }
    }
  },
  data: () => ({
    signIn: {
      email: "",
      password: ""
    },
    register: {
      email: "",
      password: ""
    }
  }),
  computed: {
    passwordErrors() {
      const errors = [];
      if (!this.$v.signIn.password.$dirty) return errors;
      !this.$v.signIn.password.required && errors.push("Password is required.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.signIn.email.$dirty) return errors;
      !this.$v.signIn.email.email && errors.push("Must be valid e-mail");
      !this.$v.signIn.email.required && errors.push("E-mail is required");
      return errors;
    },
    reg_passwordErrors() {
      const errors = [];
      if (!this.$v.register.password.$dirty) return errors;
      !this.$v.register.password.minLength &&
        errors.push(
          "Password must have at least " +
            this.$v.register.password.$params.minLength.min +
            " letters."
        );
      !this.$v.register.password.required &&
        errors.push("Password is required.");
      return errors;
    },
    reg_emailErrors() {
      const errors = [];
      if (!this.$v.register.email.$dirty) return errors;
      !this.$v.register.email.email && errors.push("Must be valid e-mail");
      !this.$v.register.email.required && errors.push("E-mail is required");
      return errors;
    }
  },
  methods: {
    onSignIn() {
      this.$v.signIn.$touch();
      if (!this.$v.signIn.$invalid) {
        this.$store.commit("login");
        this.$router.push("/");
      }
    },
    onRegister() {
      this.$v.register.$touch();
      // jump to the register form, and pass the encoded input data
      if (!this.$v.register.$invalid) {
        this.$router.push({
          path: "register",
          query: {
            key: Base64.encode(
              JSON.stringify({
                email: this.register.email,
                password: this.register.password
              })  
            )
          }
        });
      }
    }
  }
};
</script>
<style scoped>
.rounded-bar {
  border-radius: 20px !important;
}

a {
  text-decoration: none;
  color: inherit !important;
}
</style>
