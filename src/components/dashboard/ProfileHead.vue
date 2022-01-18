<template>
  <div>
    <!-- Header for user info -->
    <v-card
      tile
      outlined
      id="header"
      class="d-flex justify-space-between align-baseline"
    >
      <v-container class="px-12">
        <v-card flat class="d-flex align-baseline">
          <v-row>
            <v-col cols="12" sm="8" md="10">
              <v-row>
                <div class="display-1 font-weight-bold pr-6">
                  {{ user.firstName }} {{ user.lastName }}
                </div>
                <p class="pr-3">{{ user.role }}</p>
                <div class="subtitle-1 pr-4">
                  <v-icon>mdi-email</v-icon>
                  {{ user.email }}
                  <v-text-field
                    v-if="show"
                    v-model="user.email"
                    label="Add Email"
                    height="30"
                    color="success"
                  >
                  </v-text-field>
                </div>

                <div class="subtitle-1 pr-4">
                  <v-icon>mdi-map-marker</v-icon>
                  {{ user.profile.location }}
                  <!-- if user havn't set the info, display a button to edit profile -->
                  <v-text-field
                    v-if="show"
                    v-model="user.profile.location"
                    label="Add Location"
                    height="30"
                    color="success"
                  >
                  </v-text-field>
                </div>
                <div class="subtitle-1 pr-4">
                  <div>
                    <v-icon>mdi-phone</v-icon>
                    {{ user.profile.phone }}
                  </div>

                  <!-- if user havn't set the info, display a button to edit profile -->
                  <v-text-field
                    v-if="show"
                    v-model="user.profile.phone"
                    label="Add phone number"
                    height="30"
                    color="success"
                  >
                  </v-text-field>
                </div>
              </v-row>
            </v-col>
            <v-col cols="12" sm="2" md="2">
              <v-btn @click="show = !show" height="32" color="success" text>
                Update Profile
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-container>
    </v-card>
  </div>
</template>
<script>
    export default {
        data: () => ({
            show: "",
            user: {
                firstName: "John",
                lastName: "Smith",
                role: "JobSeeker",
                email: "john.smith@gmail.com",
                profile: {
                    location: "Melbourne",
                    phone: "045328234",
                },
            },
        }),
    };
</script>
<style scoped>
    #header {
        box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.2);
    }
    
    a {
        text-decoration: none;
        color: inherit !important;
    }
</style>