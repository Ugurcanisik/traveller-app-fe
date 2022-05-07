import Vue from "vue";
import VueRouter from "vue-router";


import ChildView from '../views/childView'
import Contact from "@/views/contact";
import Dashboard from "@/views/dashboard";
import about from "@/views/about";
import Traveller from "@/views/traveller";
import Blog from "@/views/blog";
import singleBlog from "@/views/singleBlog";


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
            },
            {
                path: '/blog', component: Blog,
            },
            {
                path: '/single-blog', component: singleBlog,
            },
        ]
    },
    {
        path: "*", redirect: "/",
    }
];


export const router = new VueRouter({
    mode: "history",
    routes
})

