<template>
    <div id="launcher">
        <nav class="icon-container">
            <ul>
                <li v-for="widget in widgets">
                    <div v-on:click="launchWidget(widget)" >{{widget.name}}</div>
                </li>
            </ul>    
        </nav>
    </div>
</template>

<script>
    export default {

        methods: {
            launchWidget(widget) {
                this.$store.dispatch('addWidget',widget);
            }
        },

        data() {
            return this.$store.state.widgets
        },

        mounted() {
            console.log('Launcher mounted.')
        }
    }
</script>

<style lang="scss">
	@import "../../sass/variables";
    #launcher {
        position: fixed;
        top: 0;
        left: 0;
        width: 75px;
        height: 100%;
        .icon-container{
            align-items: center;
            display: flex;
            justify-content: center;
            height:100%      
        }

        ul {
            list-style: none;
            padding: 5px;
            margin: 0;
            border: 1px solid $navbar-default-border;
            border-width: 1px 1px 1px 0;
            background: $navbar-default-bg;

        }
        li {
            display: block;
            margin-bottom: 5px;
            &:last-child {
                margin-bottom: 0;
            }

            > div {
                width: 64px;
                height: 64px;
                outline: 1px solid $navbar-default-border;
            }
        }
    }
    
</style>