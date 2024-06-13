export const RouterViewThemes = {
    data: function() {
        return {
            helpText: 'Choose your theme.',
            themes: [
                'default','light','high-contrast','hacker'
            ],
            activeTheme: this.$root.theme
        }
    },
    methods: {
        toggleHelp() {
            this.$root.helpText = this.helpText;
            this.$root.showHelp = !this.$root.showHelp;
        },
        changeTheme(theme) {
            this.$root.setTheme(theme,true);
        }
    },
    template: `
        <h1>Themes <button @click="toggleHelp()" class="cli">[help]</button></h1>
        <ul>
            <li v-for="theme in themes">
                <span v-if="theme !== activeTheme">
                    <button class="cli" @click="changeTheme(theme)">[SELECT]</button> {{theme}}
                </span>
                <span v-if="theme === activeTheme">
                    <button class="cli" v-if="theme === activeTheme" disabled>[IN USE]</button> {{theme}}
                </span>
            </li>
        </ul>
    `
}

export default RouterViewThemes;