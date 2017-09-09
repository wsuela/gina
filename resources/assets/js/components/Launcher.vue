<template>
    <div id="launcher">
        <nav class="icon-container">
            <ul>
                <li v-for="widget in widgets">
                    <div 
                    v-on:click="launchWidget(widget)" 
                    :class="widgetClass(widget)" 
                    >
                        <div class="widget-icon">
                            <i :class="['fa','fa-'+(widget.icon||'code')]"></i>
                        </div>
                        <div class="widget-name">{{widget.name}}</div>
                    </div>
                </li>
            </ul>    
        </nav>
    </div>
</template>

<script>
    export default {

        methods: {
            launchWidget(widget) {
                let windowState = 'open';

                if (widget.state && !['close','minimize'].includes(widget.state)) {
                    windowState = 'minimize';
                }

                this.$store.dispatch('setState', {widget,windowState});
                
            },
            widgetClass (widget) {
                return [
                    'widget', 
                    'state-' + widget.state,
                    (widget.active ? 'active' : '')
                ]
            },
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
        z-index: 300;
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

            .widget {
                width: 64px;
                height: 64px;
                border: 1px solid transparent;
                position: relative;

                &.state-restore,
                &.state-maximize,
                &.state-minimize,
                &.state-open {
                    border-color: $navbar-default-border;
                }

                &.active {
                    border-color: #999;
                }
                
                .widget-icon {
                    font-size:50px;
                    text-align:center;
                    line-height:62px;
                }
                .widget-name {
                    display: none;
                    position: absolute;
                    height: 32px;
                    line-height: 32px;
                    left: 120%;
                    top: 16px;
                    white-space: nowrap;
                    padding: 0 5px;
                    z-index: 100;
                    border: 1px solid $navbar-default-border;
                    background: #fff;
                }
                &:hover {
                    background: $body-bg;
                    .widget-name {
                        display: block;
                    }
                }
            }
            
        }
    }
    
</style>