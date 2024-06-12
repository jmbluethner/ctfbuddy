import {log} from "../../js/logger.js";

export const RouterViewInjector = {
    data: function() {
        return {
            fields: [],
            showHelp: false,
            helpText: 'The <b>XSS Injector</b> module automatically searches for all input and textarea alements which allow free text input. It also includes hidden inputs.<br>You can than select which type of attack you want to run for which type of field.<br><b>JS</b> type attack just injects a small script that shows an alert message.<br><b>SQL</b> triggers a small SQL injection.<br>After each injection, <b>CTFBuddy</b> automatically simulates hitting enter on the keyboard to send the form. However, if the HTML DOM structure is bad, this might not actually send the form in some cases. If nothing happens, just click the form submit button manually.'
        }
    },
    methods: {
        findFields() {
            let vue = this;
            this.fields = Array.from(document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], input[type="search"], textarea'));
        },
        toggleHelp() {
            this.$root.helpText = this.helpText;
            this.$root.showHelp = !this.$root.showHelp;
        },
        runInject(type,field) {
            if(!type || (type !== 'js' && type !== 'sql')) {
                log('Running injection failed because injection type [' + type + '] is empty or invalid.');
                return false;
            } else {
                if(type === 'js') {
                    field.value = "alert('INJECT')";
                } else if(type === 'sql') {
                    field.value = '" or ""="';
                }
                let evt = document.createEvent('Event');
                evt.initEvent('keypress');
                evt.which = evt.keyCode = 13;
                field.dispatchEvent(evt);
            }
        }
    },
    mounted: function() {
        this.findFields();
    },
    template: `
        <section id="injector">
            <h1>XSS Injector <button @click="toggleHelp()" class="cli">[help]</button></h1>
            <div v-if="fields.length > 0">
                <span v-for="field in fields">
                    <button class="cli" @click="runInject('js',field)">[JS]</button><button class="cli" @click="runInject('sql',field)">[SQL]</button> {{field.localName}} <span v-if="field.type !== field.localName">| type: {{field.type}}</span>
                </span>
            </div>
            <div v-if="fields.length == 0">
                <p class="error">No fields found on this page. Can't run exploit.</p>
            </div>
        </section>
    `
}

export default RouterViewInjector;