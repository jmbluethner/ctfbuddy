export const RouterViewHiddenFields= {
    data: function() {
        return {
            helpText: 'The <b>Hidden Fields</b> module looks for fields of type hidden and allows you to make them visible.',
            fields: [],
            executed: false
        }
    },
    methods: {
        toggleHelp() {
            this.$root.helpText = this.helpText;
            this.$root.showHelp = !this.$root.showHelp;
        },
        findFields() {
            this.fields = Array.from(document.querySelectorAll('input[type="hidden"]'));
            console.log(this.fields);
        },
        makeVisible() {
            this.fields.forEach((field) => {
                field.style.background = 'grey'
                field.style.border = '2px solid red';
                field.style.minWidth = '150px';
                field.style.minHeight = '30px';
                field.style.display = 'inline-block';
                field.style.visibility = 'visible';
                field.type = 'text';
            });
            this.executed = true;
        }
    },
    mounted: function() {
        this.findFields();
    },
    template: `
        <section id="hidden_fields">
            <h1>Hidden Fields <button @click="toggleHelp()" class="cli">[help]</button></h1>
            <span v-if="fields.length <= 0">
                No hidden input fields found on this page.
            </span>
            <button v-if="fields.length > 0 && !executed" @click="makeVisible()" class="cli">[UN-HIDE {{fields.length}} FIELDS]</button>
            <span v-if="executed" class="success">Un-Hiding ran successfully.</span>
        </section>
    `
}

export default RouterViewHiddenFields;