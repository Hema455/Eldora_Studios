<template>
  <v-container>
    <v-row align="center">
      <v-col class="col-xl-4 offset-xl-4 col-md-6 offset-md-3">
        <v-card elevation="10">
          <!-- title -->
          <v-row>
            <v-col class="text-center">
              <span class="display-1">Register</span>
            </v-col>
          </v-row>
          <!-- tabs for job seeker and job recruiter -->
          <v-tabs v-model="tabs" grow slider-color="success" active-class="success--text">
            <v-tab>JOB SEEKER</v-tab>
            <v-tab>JOB RECRUITER</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabs">
            <!-- JOB SEEKER form -->
            <form>
              <v-tab-item>
                <v-row class="mx-12">
                  <v-icon>mdi-account</v-icon>
                  <v-text-field
                    v-model="jobSeeker.firstName"
                    :error-messages="js_firstNameErrors"
                    label="First Name"
                    required
                    @blur="$v.jobSeeker.firstName.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-account</v-icon>
                  <v-text-field
                    v-model="jobSeeker.lastName"
                    :error-messages="js_lastNameErrors"
                    label="Last Name"
                    required
                    @blur="$v.jobSeeker.lastName.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-email</v-icon>
                  <v-text-field
                    v-model="jobSeeker.email"
                    :error-messages="js_emailErrors"
                    label="Email"
                    required
                    @blur="$v.jobSeeker.email.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-lock</v-icon>
                  <v-text-field
                    v-model="jobSeeker.password"
                    :error-messages="js_passwordErrors"
                    label="Password"
                    type="password"
                    required
                    @blur="$v.jobSeeker.password.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-lock</v-icon>
                  <v-text-field
                    v-model="jobSeeker.rePassword"
                    :error-messages="js_rePasswordErrors"
                    label="Confirm Password"
                    type="password"
                    required
                    @blur="$v.jobSeeker.rePassword.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <p class="body-2">
                    By registering, you agree to Eldora's
                    <a>Terms of Service</a> and
                    <a>Privacy Policy</a>
                  </p>
                </v-row>
                <!-- submit button -->
                <v-row class="mx-12 pb-5">
                  <v-btn block color="primary" @click.prevent="js_submit" type="submit">Register</v-btn>
                </v-row>
                <v-col class="text-right pr-12 pt-0">
                  <p>
                    Already have an account?
                    <a href="/#/login">Sign In</a>
                  </p>
                </v-col>
              </v-tab-item>
            </form>

            <!-- JOB RECRUITER form -->
            <form>
              <v-tab-item>
                <v-row class="mx-12">
                  <v-icon>mdi-account</v-icon>
                  <v-text-field
                    v-model="jobRecruiter.firstName"
                    :error-messages="jr_firstNameErrors"
                    label="First Name"
                    required
                    @blur="$v.jobRecruiter.firstName.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-account</v-icon>
                  <v-text-field
                    v-model="jobRecruiter.lastName"
                    :error-messages="jr_lastNameErrors"
                    label="Last Name"
                    required
                    @blur="$v.jobRecruiter.lastName.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-email</v-icon>
                  <v-text-field
                    v-model="jobRecruiter.email"
                    :error-messages="jr_emailErrors"
                    label="Email"
                    required
                    @blur="$v.jobRecruiter.email.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-bank</v-icon>
                  <v-text-field
                    v-model="jobRecruiter.companyName"
                    :error-messages="jr_companyNameErrors"
                    label="Company Name"
                    required
                    @blur="$v.jobRecruiter.companyName.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-shield</v-icon>
                  <v-text-field
                    v-model="jobRecruiter.abn"
                    :error-messages="jr_abnErrors"
                    label="ABN number"
                    required
                    @blur="$v.jobRecruiter.abn.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-lock</v-icon>
                  <v-text-field
                    v-model="jobRecruiter.password"
                    :error-messages="jr_passwordErrors"
                    label="Password"
                    type="password"
                    required
                    @blur="$v.jobRecruiter.password.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <v-icon>mdi-lock</v-icon>
                  <v-text-field
                    v-model="jobRecruiter.rePassword"
                    :error-messages="jr_rePasswordErrors"
                    label="Confirm Password"
                    type="password"
                    required
                    @blur="$v.jobRecruiter.rePassword.$touch()"
                  />
                </v-row>
                <v-row class="mx-12">
                  <p class="body-2">
                    By registering, you agree to Eldora's
                    <a>Terms of Service</a> and
                    <a>Privacy Policy</a>
                  </p>
                </v-row>
                <!-- submit button -->
                <v-row class="mx-12 pb-5">
                  <v-btn block color="primary" @click.prevent="jr_submit" type="submit">Register</v-btn>
                </v-row>
                <v-col class="text-right pr-12 pt-0">
                  <p>
                    Already have an account?
                    <a href="/#/login">Sign In</a>
                  </p>
                </v-col>
              </v-tab-item>
            </form>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
    <!-- a overlay element to display register success info and link to login -->
    <v-overlay absolute :value="overlay" opacity="0.8">
      <v-row>
        <v-col class="text-center display-1">Registration Success!</v-col>
      </v-row>
      <v-row>
        <v-col inline>will automatically redirect to sign in page in {{countdown}} s</v-col>
      </v-row>
      <v-row class="d-inline">
        <v-col>
          Can't wait? click the button &nbsp;&nbsp;
          <v-btn href="/#/login">Sign In</v-btn>
        </v-col>
      </v-row>
    </v-overlay>
  </v-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import { Base64 } from "js-base64";
import {
  required,
  email,
  alpha,
  sameAs,
  minLength,
  maxLength,
  numeric
} from "vuelidate/lib/validators";

export default {
  // use vuelidate lib to validate the input - online doc https://vuelidate.netlify.com
  mixins: [validationMixin],
  validations: {
    jobSeeker: {
      firstName: { required, alpha },
      lastName: { required, alpha },
      email: {
        required,
        email
      },
      password: { required, minLength: minLength(6) },
      rePassword: { sameAsPassword: sameAs("password") }
    },
    jobRecruiter: {
      firstName: { required, alpha },
      lastName: { required, alpha },
      email: { required, email },
      companyName: { required },
      abn: {
        required,
        numeric,
        minLength: minLength(11),
        maxLength: maxLength(11)
      },
      password: { required, minLength: minLength(6) },
      rePassword: { sameAsPassword: sameAs("password") }
    }
  },
  data: () => ({
    tabs: null,
    overlay: false,
    countdown: 5,
    timer: [],
    jobSeeker: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: ""
    },
    jobRecruiter: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      jr_abn: "",
      password: "",
      rePassword: ""
    }
  }),
  computed: {
    // the error will be shown under the input field
    js_firstNameErrors() {
      const errors = [];
      if (!this.$v.jobSeeker.firstName.$dirty) return errors;
      !this.$v.jobSeeker.firstName.alpha && errors.push("Must be valid name");
      !this.$v.jobSeeker.firstName.required &&
        errors.push("First Name is required.");
      return errors;
    },
    js_lastNameErrors() {
      const errors = [];
      if (!this.$v.jobSeeker.lastName.$dirty) return errors;
      !this.$v.jobSeeker.lastName.alpha && errors.push("Must be valid name");
      !this.$v.jobSeeker.lastName.required &&
        errors.push("Last Name is required");
      return errors;
    },
    js_emailErrors() {
      const errors = [];
      if (!this.$v.jobSeeker.email.$dirty) return errors;
      !this.$v.jobSeeker.email.email && errors.push("Must be valid e-mail");
      !this.$v.jobSeeker.email.required && errors.push("E-mail is required");
      return errors;
    },
    js_passwordErrors() {
      const errors = [];
      if (!this.$v.jobSeeker.password.$dirty) return errors;
      !this.$v.jobSeeker.password.minLength &&
        errors.push(
          "Password must have at least " +
            this.$v.jobSeeker.password.$params.minLength.min +
            " letters."
        );
      !this.$v.jobSeeker.password.required &&
        errors.push("Password is required.");
      return errors;
    },
    js_rePasswordErrors() {
      const errors = [];
      if (!this.$v.jobSeeker.rePassword.$dirty) return errors;
      !this.$v.jobSeeker.rePassword.sameAsPassword &&
        errors.push("Passwords must be identical.");
      return errors;
    },
    jr_firstNameErrors() {
      const errors = [];
      if (!this.$v.jobRecruiter.firstName.$dirty) return errors;
      !this.$v.jobRecruiter.firstName.alpha &&
        errors.push("Must be valid name");
      !this.$v.jobRecruiter.firstName.required &&
        errors.push("First Name is required.");
      return errors;
    },
    jr_lastNameErrors() {
      const errors = [];
      if (!this.$v.jobRecruiter.lastName.$dirty) return errors;
      !this.$v.jobRecruiter.lastName.alpha && errors.push("Must be valid name");
      !this.$v.jobRecruiter.lastName.required &&
        errors.push("Last Name is required");
      return errors;
    },
    jr_emailErrors() {
      const errors = [];
      if (!this.$v.jobRecruiter.email.$dirty) return errors;
      !this.$v.jobRecruiter.email.email && errors.push("Must be valid e-mail");
      !this.$v.jobRecruiter.email.required && errors.push("E-mail is required");
      return errors;
    },
    jr_companyNameErrors() {
      const errors = [];
      if (!this.$v.jobRecruiter.companyName.$dirty) return errors;
      !this.$v.jobRecruiter.companyName.required &&
        errors.push("Company Name is required");
      return errors;
    },
    jr_abnErrors() {
      const errors = [];
      if (!this.$v.jobRecruiter.abn.$dirty) return errors;
      !this.$v.jobRecruiter.abn.numeric &&
        errors.push("Must be valid abn number");
      !this.$v.jobRecruiter.abn.maxLength &&
        errors.push("Must be valid abn number");
      !this.$v.jobRecruiter.abn.minLength &&
        errors.push("Must be valid abn number");
      !this.$v.jobRecruiter.abn.required &&
        errors.push("ABN number is required");
      return errors;
    },
    jr_passwordErrors() {
      const errors = [];
      if (!this.$v.jobRecruiter.password.$dirty) return errors;
      !this.$v.jobRecruiter.password.minLength &&
        errors.push(
          "Password must have at least " +
            this.$v.jobRecruiter.password.$params.minLength.min +
            " letters."
        );
      !this.$v.jobRecruiter.password.required &&
        errors.push("Password is required.");
      return errors;
    },
    jr_rePasswordErrors() {
      const errors = [];
      if (!this.$v.jobRecruiter.rePassword.$dirty) return errors;
      !this.$v.jobRecruiter.rePassword.sameAsPassword &&
        errors.push("Passwords must be identical.");
      return errors;
    }
  },
  methods: {
    js_submit() {
      this.$v.jobSeeker.$touch();
      if (!this.$v.jobSeeker.$invalid) {
        //send request to backend

        //display a prompt to user and disappear after 5s then redirect to login page
        this.overlay = true;
        this.timer[0] = setInterval(() => {
          if (this.countdown > 0) this.countdown--;
        }, 1000);
        this.timer[1] = setTimeout(() => {
          this.$router.push("/login");
        }, 5000);
      }
    },
    jr_submit() {
      this.$v.jobRecruiter.$touch();
      if (!this.$v.jobRecruiter.$invalid) {
        //send request to backend

        //display a prompt to user and disappear after 5s then redirect to login page
        this.overlay = true;
        this.timer[0] = setInterval(() => {
          if (this.countdown > 0) this.countdown--;
        }, 1000);
        this.timer[1] = setTimeout(() => {
          this.$router.push("/login");
        }, 5000);
      }
    }
  },
  mounted() {
    if (this.$route.query.key) {
      const val = JSON.parse(Base64.decode(this.$route.query.key));
      this.jobRecruiter.email = val.email;
      this.jobRecruiter.password = val.password;
      this.tabs = 1;
    }
  },
  destroyed() {
    clearInterval(this.timer[0]);
    clearTimeout(this.timer[1]);
  }
};
</script>