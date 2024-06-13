function filterNone() {
    return NodeFilter.FILTER_ACCEPT;
}

export const RouterViewCommentFinder = {
    data: function() {
        return {
            comments: [],
            helpText: 'The <b>Comment Finder</b> checks the HMTL source code for comments and unveils them.'
        }
    },
    methods: {
        findComments() {
            let vue = this;
            let iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_COMMENT, filterNone, false);
            let curNode;
            while (curNode = iterator.nextNode()) {
                if(curNode.nodeValue !== 'v-if') vue.comments.push(curNode.nodeValue);
            }
        },
        toggleHelp() {
            this.$root.helpText = this.helpText;
            this.$root.showHelp = !this.$root.showHelp;
        }
    },
    mounted: function() {
        this.findComments();
    },
    template: `
        <h1>Comment Finder <button @click="toggleHelp()" class="cli">[help]</button></h1>
        <ul v-if="comments.length > 0">
            <li v-for="comment in comments">{{comment}}</li>
        </ul>
        <p class="error" v-if="comments.length <= 0">This page doesn't contain and HTML comments.</p>
    `
}

export default RouterViewCommentFinder;