<template>
  <v-container>
    <v-row align="center">
      <v-col class="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
        <v-card elevation="10">
          <v-form>
            <!-- title -->
            <v-row class="mx-12">
              <v-col
                class="text-center"
              >Forget password? we'll send you a link to reset your password.</v-col>
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
            <!-- submit button -->
            <v-row class="mx-12 pb-5">
              <v-btn block color="primary" @click.prevent="submit" type="submit">Reset Password</v-btn>
            </v-row>
            <!-- snackbar to display success prompt -->
            <v-snackbar v-model="snackbar" top color="success" class="text-center">
              A link has been sent to you email address
              <br />
              will automatically redirect to sign in page in {{countdown}} s
            </v-snackbar>
          </v-form>
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
    email: { required, email }
  },
  data: () => ({
    email: "",
    snackbar: false,
    countdown: 5,
    timer: []
  }),
  computed: {
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
        //send reset password request to backend

        //display a prompt to user and disappear after 5s then redirect to login page
        this.snackbar = "true";

        this.timer[0] = setInterval(() => {
          if (this.countdown > 0) this.countdown--;
        }, 1000);
        this.timer[1] = setTimeout(() => {
          this.$router.push("/login");
        }, 5000);
      }
    }
  },
  destroyed() {
    clearInterval(this.timer[0]);
    clearTimeout(this.timer[1]);
  }
};
</script>