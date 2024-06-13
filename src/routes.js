import RouterViewOverview from "./views/router/overview.js";
import RouterViewUrlParams from "./views/router/url_params.js"
import RouterViewExploration from "./views/router/exploration.js";
import RouterViewCookies from "./views/router/cookies.js";
import RouterViewLocalStorage from "./views/router/localstorage.js";
import RouterViewSources from "./views/router/sources.js";
import RouterViewHiddenFields from "./views/router/hidden_fields.js";
import RouterViewInjector from "./views/router/injector.js";
import RouterViewCommentFinder from "./views/router/commnent_finder.js";

export const routes = [
    {
        path: '/',
        name: 'Overview',
        component: RouterViewOverview,
        shortcut: 'o'
    },
    {
        path: '/params',
        name: 'URL Params',
        component: RouterViewUrlParams,
        shortcut: 'u'
    },
    {
        path: '/exploration',
        name: 'Exploration',
        component: RouterViewExploration,
        shortcut: 'e'
    },
    {
        path: '/hiddenfields',
        name: 'Hidden Fields',
        component: RouterViewHiddenFields,
        shortcut: 'f'
    },
    {
        path: '/commentfinder',
        name: 'Comment Find',
        component: RouterViewCommentFinder,
        shortcut: 't'
    },
    {
        path: '/cookies',
        name: 'Cookies',
        component: RouterViewCookies,
        shortcut: 'c'
    },
    {
        path: '/injector',
        name: 'XSS Injector',
        component: RouterViewInjector,
        shortcut: 'x'
    },
    {
        path: '/localstorage',
        name: 'Local Storage',
        component: RouterViewLocalStorage,
        shortcut: 'l'
    },
    {
        path: '/sources',
        name: 'Sources',
        component: RouterViewSources,
        shortcut: 's'
    }
]