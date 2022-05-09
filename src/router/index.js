import Vue from "vue";
import VueRouter from "vue-router";


import ChildView from '../views/childView'
import Contact from "@/views/contact";
import Dashboard from "@/views/dashboard";
import about from "@/views/about";
import allTraveller from "../components/traveller/traveller";
import Traveller from "@/views/traveller";
import Blog from "@/views/blog";
import singleBlog from "../components/traveller/singleBlog"
import Auth from "@/views/login";
import SignUp from "@/views/signup";
import store from "@/store";


Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: ChildView,
        children: [
            {
                path: '', redirect: '/dashboard',
            },
            {
                path: '/dashboard', component: Dashboard,
            },
            {
                path: '/contact', component: Contact,
            },
            {
                path: '/about', component: about,
            },
            {
                path: '/traveller', component: Traveller,
                children: [
                    {
                        path: '/', component: allTraveller
                    },
                    {
                        path: ':id', component: singleBlog
                    }
                ]
            },
            {
                path: '/community', component: Blog,
            },
        ]
    },
    {
        path: '/login',
        component: Auth
    },
    {
        path: '/signup',
        component: SignUp
    },
    {
        path: "*", redirect: "/",
    }
];


export const router = new VueRouter({
    mode: "history",
    routes
})




