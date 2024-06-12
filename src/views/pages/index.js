import {routes} from "../../routes.js";

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    // Short for routes: routes
    routes
});

const app = Vue.createApp({

    watch: {
        $route (to, from){
            this.$nextTick(() => {

            });
        }
    },

    data: function() {
        return {

        }
    },

    methods: {

    },

    mounted: function() {

    },

    created: async function() {

    },

    template: `
        <div id="top_bar">
            <div class="inner">
                <div class="left">
                    <a href="https://github.com/jmbluethner/ctfbuddy" target="_blank">
                        <button>CTFBuddy</button>
                    </a>
                </div>
                <div class="right">
                    <a href="https://github.com/jmbluethner" target="_blank"><button>by jmbluethner</button></a>
                </div>
            </div>
        </div>
        <div id="main_section">
            <div class="inner">
                <div class="left">
                    <ul>
                        <router-link v-for="route in this.$router.options.routes" :key="route.path" :to="route.path">
                            <span class="cli">
                                <span class="start"></span> ~/ <span class="end"></span>
                            </span> {{route.name}}
                        </router-link>
                    </ul>
                </div>
                <div class="right">
                    <div id="router_container">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
	`
});

app.use(router);

app.mount('#main');