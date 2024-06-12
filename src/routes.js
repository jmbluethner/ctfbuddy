import RouterViewOverview from "./views/router/overview.js";
import RouterViewUrlParams from "./views/router/url_params.js"
import RouterViewExploration from "./views/router/exploration.js";
import RouterViewCookies from "./views/router/cookies.js";
import RouterViewLocalStorage from "./views/router/localstorage.js";
import RouterViewSources from "./views/router/sources.js";
import RouterViewHiddenFields from "./views/router/hidden_fields.js";
import RouterViewInjector from "./views/router/injector.js";

export const routes = [
    {
        path: '/',
        name: 'Overview',
        component: RouterViewOverview
    },
    {
        path: '/params',
        name: 'URL Params',
        component: RouterViewUrlParams
    },
    {
        path: '/exploration',
        name: 'Exploration',
        component: RouterViewExploration
    },
    {
        path: '/hiddenfields',
        name: 'Hidden Fields',
        component: RouterViewHiddenFields
    },
    {
        path: '/cookies',
        name: 'Cookies',
        component: RouterViewCookies
    },
    {
        path: '/injector',
        name: 'XSS Injector',
        component: RouterViewInjector
    },
    {
        path: '/localstorage',
        name: 'Local Storage',
        component: RouterViewLocalStorage
    },
    {
        path: '/sources',
        name: 'Sources',
        component: RouterViewSources
    }
]