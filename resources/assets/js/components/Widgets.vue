<template>
    <div id="widgets-container">
        <div 
        v-for="widget in widgets" 
        v-if="['open','minimize','maximize','restore'].includes(widget.state)" 
        @click="setActive(widget)"
        :class="widgetClass(widget)"
        :style="widgetStyles(widget)"
        >
            <div class="panel panel-default">
                <div 
                @dragstart="event => {dragstart(event,widget)}"
                @dragend="event => {dragend(event,widget)}"
                draggable="true"
                class="panel-heading">
                    {{widget.name}}
                    <div class="action-buttons btn-group btn-group-sm" role="group">
                        <button 
                            v-for="button in buttons" 
                            @click="setState(widget,button)" 
                            :class="iconClass(widget,button)"
                            type="button" 
                            >
                            <i :class="buttonClass(widget,button)" aria-hidden="true"></i>
                        </button>
                    </div>
                </div>

                <div class="panel-body">
                    {{widget.state}}
                    {{widget.content}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            setActive (widget) {
                this.$store.dispatch('setActive',{widget})
            },
            setState(widget,windowState) {
                this.$store.dispatch('setState',{widget,windowState})
            },
            dragstart(event,widget){
                console.log('dragstart',event);
            },
            dragmove(event,widget) {
                console.log('dragmove',event);
                let location = {
                    x: event.clientX - (75 + 50),
                    y: event.clientY - (25)
                }
                this.$store.dispatch('setLocation',{widget,location})
            },
            dragend(event,widget){
                console.log('dragend',event);
            },
            iconClass (widget,button) {
                let active = 'btn-default';
                if(['maximize'].includes(widget.state) && button === 'maximize') {
                    active = 'hide'
                }
                if(['restore','open'].includes(widget.state) && button === 'restore') {
                    active = 'hide'
                }
                return [
                    'btn', 
                    active
                ]
            },
            buttonClass (widget,button) {
                let active = 'a';
                if(widget.state === 'maximize' && button === 'maximize') {
                    active = 'hide'
                }
                return [
                    'fa', 
                    'fa-window-' + button,
                    active
                ]
            },
            widgetClass (widget) {
                return [
                    'window', 
                    'state-' + widget.state,
                    (widget.active ? 'active' : '')
                ]
            },
            widgetStyles(widget) {
                //return 'left:50px';
                let {location} = widget
                let zIndex = widget.active ? 100:''

                return {
                    left: location.x + 'px',
                    top: location.y + 'px',
                    zIndex
                }
            }
        },

        data() {
            let {widgets} = this.$store.state
            return widgets
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>

<style lang="scss">
    #widgets-container {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;

        .window {
            position:absolute;
            transition: 300ms all ease;
            .panel {
                width:100%;
                height:100%;
            }
        }

        .active {
            box-shadow: 0px 2px 5px -4px #000;
            .panel-heading {
                background: #eee;
            }
        }

        .state-minimize {
            display: none;
        }

        .state-maximize {
            top: 0 !important;
            left: 0 !important;
            width:100%;
            height:100%;
        }
        .state-open,
        .state-restore {
            width: 360px;
            height: auto;
        }
        .panel {
            margin: 0;
        }

        .panel-heading {
            display: flex;
            padding: 5px;
            justify-content: space-between;
            line-height: 30px;
            .action-buttons {

            }
        }
    }
</style>
