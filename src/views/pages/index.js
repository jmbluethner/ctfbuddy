import {routes} from "../../routes.js";
import {log} from "../../js/logger.js";
import {getCookieByName,setCookie} from "../../js/cookiehandler.js";
import {loadCss} from "../../js/loader.js";

/*
import * as Vue from '../../lib/vue/vue.global.js'
import * as VueRouter from '../../lib/vue/vue-router.global.js'

 */

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
            shortcuts: {},
            theme: ''
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
        },
        setTheme(theme, update = false) {
            setCookie('ctfbuddy-theme',theme);
            this.theme = theme;
            if(update) {
                window.location.reload();
            }
        }
    },

    mounted: function() {
        let vue = this;
        this.setShortcuts();
        let theme = getCookieByName('ctfbuddy-theme');
        if(theme) {
            if(theme === 'default') {
                loadCss('/css/colors.css');
            } else {
                loadCss('/themes/' + theme + '.css');
            }
            vue.theme = theme;
        } else {
            vue.theme = 'default';
            vue.setTheme('default');
            loadCss('/css/colors.css');
        }
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