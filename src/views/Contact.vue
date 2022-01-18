<template>
  <div>
    <div style="height:50px"></div>
    <h1 class="text-center">Contact Us</h1>
    <b-form
      @submit.stop.prevent="onSubmit"
      v-if="show"
      style="width:50%"
      class="mx-auto"
    >
      <!--First name and last name Field-->
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-1"
            @submit.stop.prevent="onSubmit"
            label-for="input-1"
          >
            <b-form-input
              class="rounded-pill"
              id="input-2"
              :state="validationFirstName"
              v-model="form.first_name"
              required
              placeholder="First Name"
            >
            </b-form-input>
            <b-form-invalid-feedback :state="validationFirstName">
              You must input a name.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationFirstName">
              Looks Good.
            </b-form-valid-feedback>
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-2"
            @submit.stop.prevent="onSubmit"
            label-for="input-2"
          >
            <b-form-input
              class="rounded-pill"
              id="input-2"
              v-model="form.last_name"
              :state="validationLastName"
              required
              placeholder="Last Name"
            >
            </b-form-input>
            <b-form-invalid-feedback :state="validationLastName">
              You must input a name.
            </b-form-invalid-feedback>
            <b-form-valid-feedback :state="validationLastName">
              Looks Good.
            </b-form-valid-feedback>
          </b-form-group>
        </b-col>
      </b-row>

      <!--Email Field-->
      <b-form-group
        @submit.stop.prevent="onSubmit"
        id="input-group-3"
        label-for="input-1"
      >
        <b-form-input
          class="rounded-pill"
          id="input-3"
          :state="validationEmail"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
        <b-form-invalid-feedback :state="validationEmail">
          Your Email must be valid.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationEmail">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>

      <!--Message Field-->
      <b-form-group
        @submit.stop.prevent="onSubmit"
        id="input-group-4"
        label-for="input-4"
      >
        <b-form-textarea
          class="rounded-pill"
          id="input-3"
          :state="validationMessage"
          v-model="form.Message"
          placeholder="Message"
          required
        >
        </b-form-textarea>
        <b-form-invalid-feedback :state="validationMessage">
          You must input a message.
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="validationMessage">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>

      <!--Submit button-->
      <b-button
        style="width:100%"
        class="rounded-pill"
        type="submit"
        variant="primary"
        >Submit</b-button
      >
    </b-form>
    <div style="height:75px"></div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    first_name: "",
                    last_name: "",
                    email: "",
                    Message: "",
                },
                show: true,
            };
        },
        computed: {
            validationEmail() {
                return /\S+@\S+/.test(this.form.email);
            },
            validationMessage() {
                return this.form.Message.length > 1;
            },
            validationFirstName() {
                return this.form.first_name.length > 0;
            },
            validationLastName() {
                return this.form.last_name.length > 0;
            },
        },
        methods: {
            onSubmit() {
                alert(JSON.stringify(this.form));
            },
        },
    };
</script>