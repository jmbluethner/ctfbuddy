import {routes} from "../../routes.js";
import {log} from "../../js/logger.js";

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
            helpText: '',
            showHelp: '',
            shortcuts: {}
        }
    },

    methods: {
        setShortcuts() {
            let vue = this;
            routes.forEach((route) => {
                if(vue.shortcuts[route.shortcut]) {
                    log('Route shortcut ' + route.shortcut + ' has been assigned twice!','error');
                } else {
                    vue.shortcuts[route.shortcut] = route.path;
                }
            });
            document.onkeydown = function(evt) {
                if(vue.shortcuts[evt.key] && evt.altKey) {
                    console.log(vue.shortcuts[evt.key]);
                    vue.$router.push({path: vue.shortcuts[evt.key]});
                }
            }
        }
    },

    mounted: function() {
        this.setShortcuts();
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
                    <div class="inner">
                        <div class="top">
                            <ul>
                                <router-link v-for="route in this.$router.options.routes" :key="route.path" :to="route.path" @click="showHelp = false">
                                    <span class="cli">
                                        <span class="start"></span> ~{{route.shortcut}} <span class="end"></span>
                                    </span> {{route.name}}
                                </router-link>
                            </ul>
                        </div>
                        <div class="bottom">
                            <button class="cli" v-if="showHelp" @click="showHelp = false">[CLOSE HELP]</button>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div id="help" v-html="helpText" v-if="showHelp"></div>
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