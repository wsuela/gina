<template>
    <div id="widgets-container">
        <div v-for="widget in activeWidgets" class="">
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        {{widget.name}}
                        <div class="btn-group btn-group-sm pull-right " role="group" aria-label="...">
                            <button v-for="button in buttons" @click="setState(widget,button)" type="button" class="btn btn-default">
                                <span :class="['glyphicon', 'glyphicon-'+button]" cl="glyphicon glyphicon-remove" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>

                    <div class="panel-body">
                        {{widget.content}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            setState(widget,state) {
                console.log(state,widget);
                if(state === 'remove') {
                    //
                } 
                else {
                    //
                }
                
            }
        },

        data() {
            return this.$store.state.widgets
        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
