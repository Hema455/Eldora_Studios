<template>
  <nav v-resize="onResize">
    <v-card class="d-flex flex-row">
      <!-- the left menu list-->
      <v-card tile id="sidebar" style="max-width: 300px">
        <div>
          <v-list
            flat
            v-if="loginState() && userType() == 'jobSeeker'"
            style="height:82vh; overflow: scroll; "
          >
            <!-- the data "item" will be changed based on the clicked menu item -->
            <v-list-item-group v-model="item" color="primary">
              <v-list-item class="px-10 my-4" @click="currentPage = 'Index'">
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Dashboard</v-list-item-title
                >
              </v-list-item>
              <v-divider class="mb-1" />

              <v-list-item
                @click="switcPageSeeker(item)"
                v-for="(item, i) in items"
                :key="i"
                class="px-9 my-4"
              >
                <v-list-item-icon class="mr-3">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="item_title"
                    v-text="item.text"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="mt-12" />
              <v-list-item class="px-10 my-4">
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Sign Out</v-list-item-title
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
          <v-list
            flat
            v-if="loginState() && userType() == 'items'"
            style="height:82vh; overflow: scroll;"
          >
            <!-- the data "item" will be changed based on the clicked menu item -->
            <v-list-item-group v-model="items" color="primary">
              <v-list-item class="px-12 my-4">
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-title @click="currentJrPage = 'index'"
                  >Dashboard</v-list-item-title
                >
              </v-list-item>
              <v-divider class="mb-1" />

              <v-list-item
                v-for="(item, i) in adminItems"
                :key="i"
                class="px-12 my-4"
              >
                <v-list-item-icon class="mr-3">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.text"
                    color="white"
                    @click="switcPageRecruiter(item)"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="mt-12" />
              <v-list-item class="px-10 my-4">
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Sign Out</v-list-item-title>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
        <div>
          <v-list flat v-if="loginState() && userType() == 'jobRecruiter'">
            <!-- the data "item" will be changed based on the clicked menu item -->
            <v-list-item-group v-model="jritem" color="primary">
              <v-list-item
                class="px-12 my-4"
                @click="currentJrPage = 'JobRecruiterDashboard'"
              >
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Dashboard</v-list-item-title
                >
              </v-list-item>
              <v-divider class="mb-1" />

              <v-list-item
                @click="switcPageRecruiter(item)"
                v-for="(item, i) in jritems"
                :key="i"
                class="px-12 my-4"
              >
                <v-list-item-icon class="mr-3">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="item_title"
                    v-text="item.text"
                    color="white"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="mt-12" />
              <v-list-item class="px-10 my-4">
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Sign Out</v-list-item-title
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
        <div>
          <v-list flat v-if="loginState() && userType() == 'admin'">
            <!-- the data "item" will be changed based on the clicked menu item -->
            <v-list-item-group v-model="adminItem" color="primary">
              <v-list-item
                class="px-12 my-4"
                @click="currentAdminPage = 'AdminDashboard'"
              >
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-view-dashboard</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Dashboard</v-list-item-title
                >
              </v-list-item>
              <v-divider class="mb-1" />

              <v-list-item
                @click="switcPageAdmin(item)"
                v-for="(item, i) in adminItems"
                :key="i"
                class="px-12 my-4"
              >
                <v-list-item-icon class="mr-3">
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title
                    class="item_title"
                    v-text="item.text"
                    color="white"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="mt-12" />
              <v-list-item class="px-10 my-4">
                <v-list-item-icon class="mr-3">
                  <v-icon>mdi-logout</v-icon>
                </v-list-item-icon>
                <v-list-item-title class="item_title"
                  >Sign Out</v-list-item-title
                >
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </div>
      </v-card>
      <!-- The dynamic component can be switched by menu-->
      <!-- pass the data "item" to the child component, then this data can be changed in child component -->
      <div
        v-if="loginState() && userType() == 'jobSeeker'"
        style="width:100%; height:82vh ;  overflow: scroll; "
      >
        <profileHead></profileHead>

        <component :is="currentPage" :page.sync="item" />
      </div>
      <div
        v-if="loginState() && userType() == 'jobRecruiter'"
        style="width:100%; background-color:rgb(235,235,235);
        height:82vh; overflow: scroll; "
      >
        <component :is="currentJrPage" :page.sync="jritem" />
      </div>
      <!--Admin page-->
      <div
        v-if="loginState() && userType() == 'admin'"
        style="width:100%; background-color:rgb(235,235,235);
        height:82vh; overflow: scroll; "
      >
        <AdminHead></AdminHead>
        <component :is="currentAdminPage" :page.sync="adminItem" />
      </div>
    </v-card>
  </nav>
</template>
<script>
    import Index from "../components/dashboard/Index";
    import JobRecruiterDashboard from "../components/dashboard/JobRecruiterDashboard";
    import AdminDashboard from "../components/dashboard/AdminDashboard";
    // import NotFound from "../views/NotFound";
    import Post_Analytics from "../components/dashboard/Post Analytics";
    import Settings from "../components/dashboard/Settings";
    //added for resume page
    import ResumeJobSeeker from "../components/dashboard/ResumeJobSeeker";
    import Billing_history from "../components/dashboard/Billing history";
    import Managejobs from "../components/dashboard/managejobs";
    import Company_profile from "../components/dashboard/CompanyDetails";
    import Mail from "../components/dashboard/Mail";
    import ProfileUpdate from "../components/dashboard/ProfileUpdate";
    import Post_Job from "../components/dashboard/PostAJob";
    import ProfileHead from "../components/dashboard/ProfileHead";
    import Interview_jobseeker from "../components/dashboard/Interview_jobseeker";
    import Interviews from "../components/dashboard/InterviewJobRecruiter";
    import Candidates from "../components/dashboard/Candidates";

    //Admin pages
    import ManageBadges from "../components/dashboard/ManageBadges";
    import ManageFaqs from "../components/dashboard/ManageFAQs";
    import queries from "../components/dashboard/Queries";
    import ManageServices from "../components/dashboard/ManageServices";
    import ManageUsers from "../components/dashboard/ManageUsers";
    import AdminHead from "../components/dashboard/AdminHeader";

    export default {
        components: {
            Index,
            Post_Analytics,
            Settings,
            ResumeJobSeeker,
            Billing_history,
            Managejobs,
            JobRecruiterDashboard,
            Company_profile,
            Mail,
            ProfileUpdate,
            Post_Job,
            ProfileHead,
            Interview_jobseeker,
            Interviews,
            Candidates,
            AdminDashboard,
            ManageBadges,
            ManageFaqs,
            queries,
            ManageServices,
            ManageUsers,
            AdminHead,
        },
        data: () => ({
            item: 0,
            items: [{
                text: "Job Hunt",
                icon: "mdi-magnify",
                page: "",
            }, {
                text: "My Jobs",
                icon: "mdi-file-multiple",
                page: "",
            }, {
                text: "Interview",
                icon: "mdi-account-multiple",
                page: "Interview_jobseeker",
            }, {
                text: "Resume",
                icon: "mdi-file-document",
                page: "ResumeJobSeeker",
            }, {
                text: "Badges",
                icon: "mdi-file-account",
                page: "",
            }, {
                text: "Profile",
                icon: "mdi-account",
                page: "ProfileUpdate",
            }, {
                text: "Settings",
                icon: "mdi-settings-outline",
                page: "Settings",
            }, ],
            jritem: 0,
            jritems: [{
                text: "Company Profile",
                icon: "mdi-account-box",
                page: "Company_profile",
            }, {
                text: "Candidates",
                icon: "mdi-account-group",
                page: "Candidates",
            }, {
                text: "Interviews",
                icon: "mdi-account-group",
                page: "Interviews",
            }, {
                text: "Emails",
                icon: "mdi-email",
                page: "Mail",
            }, {
                text: "Search Resources",
                icon: "mdi-magnify",
                page: "",
            }, {
                text: "Billing History",
                icon: "mdi-page-layout-header",
                page: "Billing_history",
            }, {
                text: "Manage My Jobs",
                icon: "mdi-settings-box",
                page: "Managejobs",
            }, {
                text: "Post Analytics",
                icon: "mdi-google-analytics",
                page: "Post_Analytics",
            }, {
                text: "Settings",
                icon: "mdi-settings-outline",
                page: "Settings",
            }, {
                text: "Post a Job",
                icon: "mdi-send",
                page: "Post_Job",
            }, ],
            currentPage: "Index",
            currentJrPage: "JobRecruiterDashboard",
            adminItem: 0,
            adminItems: [{
                text: "Manage Badges",
                icon: "mdi-file-document",
                page: "ManageBadges",
            }, {
                text: "Manage FAQs",
                icon: "mdi-file-document-box",
                page: "ManageFaqs",
            }, {
                text: "Queries",
                icon: "mdi-help-circle",
                page: "queries",
            }, {
                text: "Manage Services",
                icon: "mdi-nutrition",
                page: "ManageServices",
            }, {
                text: "Manage users",
                icon: "mdi-account-multiple",
                page: "ManageUsers",
            }, ],
            currentAdminPage: "AdminDashboard",
            props: ["type"],
            isActive: false,
            windowSize: {
                x: 0,
                y: 0,
            },
        }),
        mounted() {
            this.onResize();
        },

        methods: {
            logout() {
                this.$store.commit("logout");
                this.$router.push("/");
            },
            loginState() {
                return this.$store.state.loginState;
            },
            userType() {
                return this.$store.state.userType;
            },
            switcPageSeeker(item) {
                this.currentPage = item.page;
                this.scrollToTop();
            },
            scrollToTop() {
                window.scrollTo(0, 0);
            },
            switcPageRecruiter(item) {
                console.log("Clicked: " + item.text);
                this.currentJrPage = item.page;
            },
            switcPageAdmin(item) {
                console.log("Clicked: " + item.text);
                this.currentAdminPage = item.page;
            },
            onResize() {
                this.windowSize = {
                    x: window.innerWidth,
                    y: window.innerHeight,
                };
            },
        },
    };
</script>

<style scoped>
    @media (max-width: 700px) {
        #sidebar {
            width: 110px;
        }
        .item_title {
            visibility: hidden;
        }
    }
</style>