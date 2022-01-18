<template>
  <div>
    <!-- Header card-->
   <!-- <b-card style="background-color:#ebebeb"> -->
     <b-card style="background-color: rgb(255, 255, 255">
      <div class="header-card">
        <b-icon class="h4 mb-2" icon="question-circle"></b-icon>
        <v-badge :content="1" color="green" overlap>
          <b-icon class="h4 mb-2" icon="bell-fill"></b-icon>
        </v-badge>
        <v-badge :content="3" color="red" overlap>
          <b-icon class="h4 mb-2" icon="envelope-fill"></b-icon>
        </v-badge>
        <b-card-text v-if="userType === 'jobRecruiter'">
          Recruiter ID: {{recruiter.id}}
        </b-card-text>
        <b-card-text v-if="userType === 'jobSeeker'">
          Job Seeker ID: {{recruiter.id}}
        </b-card-text>
      </div>
    </b-card>
    <br />
    <div style="background-color: rgb(255, 255, 255)">
      <div>
        <br />
        <h2 class="page_title">Settings</h2>
      </div>
      <div class="form_header">
        <b>Notifications</b>
        <span class="col-sm-1"></span>
        <b-icon icon="chevron-up" v-on:click="notificationStatusChange()"></b-icon>
        <div>
          <br />
        </div>
        <div v-show="notificationStatus == true" class="notification-container">
          <div class="form-group form-check">
            <input v-model="emailNotification" type="checkbox" class="form-check-input" id="chkbox-notifyemail" />
            <label class="form-check-label" for="chkbox-notifyemail">Receive Notification on email</label>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="checkbox2" />
            <label
              class="form-check-label"
              for="checkbox2"
            >Receive job application alert in email</label>
          </div>
          <div class="form-group form-check" v-if="userType === 'jobRecruiter'">
            <input type="checkbox" class="form-check-input" id="exampleCheck3" />
            <label class="form-check-label" for="exampleCheck1">Allow job seekers to send emails</label>
          </div>
          <div class="form-group form-check" v-if="userType === 'jobSeeker'">
            <input type="checkbox" class="form-check-input" id="exampleCheck4" />
            <label class="form-check-label" for="exampleCheck1">Allow eldora to send emails</label>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck5" />
            <label
              class="form-check-label"
              for="exampleCheck1"
            >Get notified about new promotion and services</label>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck6" />
            <label class="form-check-label" for="exampleCheck1">Receive monthly Eldoras Newsletter</label>
          </div>
        </div>
      </div>

      <div>
        <div class="form_header">
          <b>Change Password</b>
          <span class="col-sm-1"></span>
          <b-icon icon="chevron-up" v-on:click="changePasswordStatusChange()"></b-icon>
        </div>
        <form class="form-setting">
          <div v-show="changePasswordStatus === true ">
            <div class="form-group row mx-4">
              <label for="currentPassword" class="col-sm-2 form_label">Current Password</label>
              <div class="col-sm-4">
                <input type="password" class="form-control" id="currentPassword" v-model="currentPassword" />
              </div>
              <span class="col-sm-6"></span>

              <label for="NewPassword" class="col-sm-2 form_label">Enter New Password</label>
              <div class="col-sm-4">
                <input type="password" class="form-control" id="NewPassword" v-model="newPassword"/>
              </div>
              <span class="col-sm-6"></span>

              <label for="confirmNewPassword" class="col-sm-2 form_label">Confirm Password</label>
              <div class="col-sm-4">
                <input type="password" class="form-control" id="confirmNewPassword" v-model="confirmNewPassword" />
              </div>
              <span class="col-sm-6"></span>
            </div>
            <div class="btn_grp">
              <button type="button" class="btn btn-danger mx-4" @click="submitResetPassword">Reset Password</button>
              <span class="col-sm-2"></span>
              <button type="button" class="btn btn-link mx-4">Cancel</button>
            </div>
          </div>
        </form>
      </div>
      <br>
      <div>
        <div class="form_header">
          <b>Email</b>
          <span class="col-sm-1"></span>
          <b-icon icon="chevron-up" v-on:click="changeEmailStatusChange()"></b-icon>
        </div>
        <div v-show="changeEmailStatus == true" class="notification-container">
          <form id="updateEmailForm" class="form-setting">
            <div class="form-group row mx-4">
              <label for="currentEmail" class="col-sm-2 form_label">Current Email</label>
              <div class="col-sm-4">
                <input type="email" class="form-control" id="currentEmail" v-model="currentEmail"/>
              </div>
              <span class="col-sm-6"></span>

              <label for="newEmail" class="col-sm-2 form_label">Enter New Email</label>
              <div class="col-sm-4">
                <input type="email" class="form-control" id="newEmail" v-model="newEmail"/>
              </div>
              <span class="col-sm-6"></span>

              <label for="passwordNewEmail" class="col-sm-2 form_label">Password</label>
              <div class="col-sm-4">
                <input type="password" class="form-control" id="passwordNewEmail" v-model="passwordNewEmail" />
              </div>
              <span class="col-sm-6"></span>
            </div>
            <div class="btn_grp">
              <button type="button" class="btn btn-danger mx-4" @click="submitEmail">Save</button>
              <span class="col-sm-4"></span>
              <button type="button" class="btn btn-link mx-4">Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <br>
      <br>
      <div class="btn_deactivate">
        <button type="button" class="btn btn-link mx-4">Deactivate my account</button>
      </div>
      <br />
      <br />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userType:'',
      emailNotification:true,
      notificationStatus: true,
      changeEmailStatus: true,
      changePasswordStatus: true,
      confirmNewPassword: "",
      newPassword: "",
      currentPassword: "",
      currentEmail: "",
      newEmail: "",
      passwordNewEmail: "",
      recruiter: {
        id: 33123,
        name: "John Doe",
        company: "Eldora"
      }
    };
  },
  methods: {
    notificationStatusChange() {
      this.notificationStatus = !this.notificationStatus;
    },
    changeEmailStatusChange() {
      this.changeEmailStatus = !this.changeEmailStatus;
    },
    changePasswordStatusChange() {
      this.changePasswordStatus = !this.changePasswordStatus;
    },
    submitEmail() {
      // validate the inputs
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // redirect to the search result page and pass the query by route params

        this.$router.push({
          path: "/jobs",
          query: {
          currentEmail: this.currentEmail,
          newEmail: this.newEmail,
          passwordNewEmail: this.passwordNewEmail, 
          },
        });
      }
    },


  submitResetPassword() {
      // validate the inputs
      this.$v.$touch();
      if (!this.$v.$invalid) {
        // redirect to the search result page and pass the query by route params

        this.$router.push({
          path: "/jobs",
          query: {
          confirmNewPassword: this.confirmNewPassword,
          newPassword: this.newPassword,
          currentPassword: this.currentPassword, 
          },
        });
      }
    },
    checkUserType() {
      this.userType= this.$store.state.userType;
    }
  },
  created() {
    this.checkUserType();
    this.notificationStatus = false;
    this.changePasswordStatus = false;
    this.changeEmailStatus = false;
  },


}
</script>
<style>
.notify {
  float: right;
}
.form {
  font-family: 10px;
  margin: 0 auto;
  max-width: 450px;
  width: 100%;
  height: 475px;
}
.page_title {
  text-align: left;
  padding-left: 5%;
}

.btn_grp {
  text-align: left;
}
.btn_deactivate {
  text-align: left;
  padding-left: 2%;
}
.form_header {
  text-align: left;
  padding-left: 5%;
  padding-top: 2%;
  padding-bottom: 2%;
}

.form_label {
  text-align: left;
}
.form-setting {
  padding-left: 3%;
}

.dropdown_form {
  width: 500px;
}

.notification {
  color: black;
  text-decoration: none;
  top: 10px;
  position: relative;
  display: inline-block;
}

.notification .badge {
  position: absolute;
  top: -10px;
  right: -10px;
  border-radius: 50%;
  color: green;
}

.checkbox {
  align-content: left;
  top: -10px;
  right: -10px;
  padding-inline-start: 20px;
  padding-top: 1%;
  padding-right: 2%;
}

.header-card {
  display: flex;
  float: right;
  font-size: 16px;
  font-weight: bold;
}
.header-card > * {
  margin-left: 20px;
}
</style>
