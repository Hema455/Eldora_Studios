<template>
    <div>
        <v-card class="d-flex flex-row">
            <div class="container">
                <v-card class="mx-auto mt-35" max-width="700" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4 v-title">
                                <h5>Company Details</h5>
                            </div>
                            <v-simple-table>
                            <v-row>
                                <v-col cols="3">
                                    <h6 class="mt-4">Company name: </h6>
                                </v-col>
                                <v-col mt-4>
                                    <div style="padding: 1em" v-if=!clicked required>
                                        <h6>{{company_data.name}}</h6>
                                    </div>
                                    <span v-if=clicked>
                                        <v-text-field class="textInput" label="Edit Data" v-model="company_data.name">
                                        </v-text-field>
                                    </span>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <h6 class="mt-4">Address:</h6>
                                </v-col>
                                <v-col mt-4>
                                    <div style="padding: 1em" v-if=!clicked>
                                        <h6>{{company_data.address}}</h6>
                                    </div>
                                    <span v-if=clicked>
                                        <v-text-field class="textInput" label="Edit Data" v-model="company_data.address">
                                        </v-text-field>
                                    </span>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <h6 class="mt-4">Contact Number:</h6>
                                </v-col>
                                <v-col mt-4>
                                    <div style="padding: 1em" v-if=!clicked>
                                        <h6>{{company_data.phone}}</h6>
                                    </div>
                                    <span v-if=clicked>
                                        <v-text-field class="textInput" label="Edit Data" v-model="company_data.phone">
                                        </v-text-field>
                                    </span>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <h6 class="mt-4">Company Email:</h6>
                                </v-col>
                                <v-col mt-4>
                                    <div style="padding: 1em" v-if=!clicked>
                                        <h6>{{company_data.email}}</h6>
                                    </div>
                                    <span v-if=clicked>
                                        <v-text-field class="textInput" label="Edit Data" v-model="company_data.email">
                                        </v-text-field>
                                    </span>
                                </v-col>
                            </v-row>
                            </v-simple-table>
                        </v-list-item-content>
                    </v-list-item>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" v-if=!clicked @click="editDetails">Edit details</v-btn>
                        <v-btn color="primary" v-if=clicked @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="mx-auto mt" max-width="700" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4 v-title">
                                <h5>About your company</h5>
                            </div>
                            <div v-if=!clicked>
                                <p class="mt-5">{{company_data.description}}</p>
                            </div>
                            <div v-if=clicked>
                                <v-textarea label="Edit description" outlined v-model="company_data.description"></v-textarea>
                            </div>
                        </v-list-item-content>

                        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
                    </v-list-item>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" v-if=!clicked @click="editDetails">
                            <v-icon class="mr-3">mdi-cached</v-icon>
                            Update Info
                        </v-btn>
                        <v-btn color="primary" v-if=clicked @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
                <v-card class="mx-auto mt mb-5" max-width="700" outlined>
                    <v-list-item three-line>
                        <v-list-item-content>
                            <div class="overline mb-4 v-title">
                                <h5>Other Details</h5>
                            </div>
                              <v-simple-table>
                            <v-row>
                                <v-col cols="3">
                                    <h6 class="mt-4">Administrator: </h6>
                                </v-col>
                                <v-col mt-4>
                                    <div style="padding: 1em" v-if=!clicked>
                                        <h6>{{company_data.admin}}</h6>
                                    </div>
                                    <span v-if=clicked>
                                        <v-text-field class="textInput" label="Edit Data" v-model="company_data.admin">
                                        </v-text-field>
                                    </span>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <h6 class="mt-4">Admin Email:</h6>
                                </v-col>
                                <v-col mt-4>
                                    <div style="padding: 1em" v-if=!clicked>
                                        <h6>{{company_data.admin_email}}</h6>
                                    </div>
                                    <span v-if=clicked>
                                        <v-text-field class="textInput" label="Edit Data" v-model="company_data.admin_email">
                                        </v-text-field>
                                    </span>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="3">
                                    <h6 class="mt-4">Billing Address:</h6>
                                </v-col>
                                <v-col mt-4>
                                    <div style="padding: 1em" v-if=!clicked>
                                        <h6>{{company_data.billing_address}}</h6>
                                    </div>
                                    <span v-if=clicked>
                                        <v-text-field class="textInput" label="Edit Data" v-model="company_data.billing_address">
                                        </v-text-field>
                                    </span>
                                </v-col>
                            </v-row>
                              </v-simple-table>
                        </v-list-item-content>
                    </v-list-item>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" v-if=!clicked @click="editDetails">Edit</v-btn>
                        <v-btn color="primary" v-if=clicked @click="save">Save</v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </v-card>

    </div>
</template>

<script>
export default {
    data: () => ({
    company_data: {
        name: "Eldora Studios",
        address: "Melbourne",
        phone: "0300000000",
        email: "demo@eldorastudios.com",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        admin: "Dummy Admin",
        admin_email: "admin@eldorastudios.com",
        billing_address: "Melbourne, VIC"
    },
    clicked: false,
  }),
  methods: {
      editDetails: function() {
          this.clicked = true
          console.log("edit is clicked");
      },
      save: function() {
          this.clicked = false
          console.log("edit is clicked");
      },
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: inherit !important;
}
.n-text{
    font-size: 10px;
}
.mt{
    margin-top: 50px;
}
.mt-35{
    margin-top: 35px;
}
.v-title{
    color: blue;
}
.v-application .overline{
    text-transform: capitalize !important;
}
.grey-bg{
    background-color: grey !important;
}
.textInput{
    width: 40%;
    height: 10%;
    vertical-align: middle;
}
</style>
