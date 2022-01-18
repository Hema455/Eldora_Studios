import Vue from "vue";
import Vuex from "vuex";
import createLogger from "vuex/dist/logger";

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createLogger()],
    state: {
        //   for test
        loginState: false,
        userType: "jobSeeker"
    },
    mutations: {
        // for test
        sign(state) {
            state.loginState = !state.loginState;
        },
        // for test
        login(state) {
            state.loginState = true;
        },
        logout(state) {
            state.loginState = false;
        },
        switchUser(state) {
            if (state.userType === "jobSeeker") {
                state.userType = "jobRecruiter";
                console.log("User: " + state.userType);
            }
            else if (state.userType === "jobRecruiter") {
                state.userType = "admin";
                console.log("User: " + state.userType);
            }
            else if (state.userType === "admin") {
                state.userType = "jobSeeker";
                console.log("User: " + state.userType);
            }
        }

    },
    actions: {}
});
