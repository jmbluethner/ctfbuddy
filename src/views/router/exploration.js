import {paths} from '../../js/path_exploration.js';
import {log} from "../../js/logger.js";
import {callApi} from "../../js/api-client.js";

export const RouterViewExploration = {
    data: function() {
        return {
            checkedPaths: [],
            basePath: window.location.origin,
            helpText: 'The <b>Exploration</b> module checks a list of common directories and pages, such as robots.txt, and shows if they are available or not based on the HTTP response status code.'
        }
    },
    methods: {
        explorePaths() {
            let vue = this;
            paths.forEach((path,index) => {
                fetch(vue.basePath + '/' + path).then((resp) => {
                    let obj = {
                        path: path,
                        status: resp.status
                    }
                    vue.checkedPaths.push(obj);
                });
            });
        },
        toggleHelp() {
            this.$root.helpText = this.helpText;
            this.$root.showHelp = !this.$root.showHelp;
        },
    },
    mounted: function() {
        this.explorePaths();
    },
    template: `
        <section id="exploration">
            <h1>Exploration <button @click="toggleHelp()" class="cli">[help]</button></h1>
            <ul>
                <li v-for="path in checkedPaths">
                    <span v-if="path.status >= 200 && path.status < 300" class="success"><a target="_blank" :href="basePath + '/' + path.path">[{{path.status}}] {{path.path}}</a></span>
                    <span v-if="path.status < 200 || path.status > 200" class="failed">[{{path.status}}] {{path.path}}</span>
                </li>
            </ul>
        </section>
    `
}

export default RouterViewExploration;