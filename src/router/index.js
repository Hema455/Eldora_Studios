import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import Login from "../views/Login";
import Forget from "../views/Forget";
import Register from "../views/Register";
import Recruiter from "../views/Recruiter";
import Jobs from "../views/Jobs";
import Contact from "../views/Contact";
import Locations from "../views/Locations";
import FAQ from "../views/FAQ";
import NotFound from "../views/NotFound";
import Dashboard from "../views/Dashboard";
import AdvancedSearch from "../views/AdvancedSearch";
import JobApplication from "../views/JobApplication";
import JobDescription from "../views/JobDescription";
import aboutus from "../views/aboutus";
import Careerservice from "../views/Careerservice";

// this is to handle the NavigationDuplicated error
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        };
    },
    routes: [{
            path: "*",
            component: NotFound
        },
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/jobdescription",
            name: "jobdescription",
            component: JobDescription
        },
        {
            path: "/forget",
            name: "forget",
            component: Forget
        },
        {
            path: "/register",
            name: "register",
            component: Register
        },
        {
            path: "/recruiter",
            name: "Recruiter",
            component: Recruiter
        },
        {
            path: "/jobs",
            name: "Jobs",
            component: Jobs
        },
        {
            path: "/dashboard",
            name: "Dashboard",
            component: Dashboard
        },
        {
            path: "/search",
            name: "AdvancedSearch",
            component: AdvancedSearch
        },
        {
            path: "/careerservice",
            name: "Careerservice",
            component: Careerservice
        },
        {
            path: "/faq",
            name: "FAQ",
            component: FAQ
        },
        {
            path: "/contact",
            name: "Contact",
            component: Contact
        },
        {
            path: "/locations",
            name: "Locations",
            component: Locations
        },
        {
            path: "/aboutus",
            name: "aboutus",
            component: aboutus
        },
        {
            path: "/jobapplication",
            name: "JobApplication",
            component: JobApplication
        },
        {
            path: "/resume-tips",
            name: "ResumeTips",
            component: () =>
                import ('../components/ResumeTips')
        },
        {
            path: "/post-job",
            name: "PostJob",
            component: () =>
                import ('../components/PostJob')
        },
        {
            path: "/customer-service",
            name: "Customer service",
            component: () =>
                import ('../components/CustomerService')
        },
        {
            path: "/candidate-search",
            name: "Candidate Search",
            component: () =>
                import ('../components/CandidateSearch')
        },
        {
            path: "/CandidateDetails",
            name: "Candidate Details",
            component: () =>
                import('../components/dashboard/CandidateDetails')
        },
    ]
});