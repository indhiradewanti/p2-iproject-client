<template>
    <div class="container">
        <br><br><br><br><br><br><br><br><br><br>
        <div class="row form-group">
            <div class="col-xs-12 col-md-offset-2 col-md-8 col-lg-8 col-lg-offset-2">
                <div class="panel panel-primary">
                    <div class="panel-heading">
                        <span class="glyphicon glyphicon-comment"></span> Comments
                        <div class="btn-group pull-right">
                            <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                                <span class="glyphicon glyphicon-chevron-down"></span>
                            </button>
                        </div>
                    </div>
                    <div class="panel-body body-panel">

                            <IncomingMessage
                                v-for="message in messages"
                                :key="message.id"
                                :message="message"
                            />

                    </div>
                    <div class="panel-footer clearfix">
                        <input class="form-control" rows="3" v-model="inputMsg" @keyup.enter="sendMessage"></input>
                        <span class="col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-xs-12" style="margin-top: 10px">
                            <button class="btn btn-warning btn-lg btn-block" id="btn-chat" @click="sendMessage">Send</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IncomingMessage from '@/components/IncomingMessage.vue'

export default {
    name : 'Chat',
    components : {
        IncomingMessage
    },
    data () {
        return {
            inputMsg : ""
        }
    },
    sockets : {
        broadcastMessage(data) {
            this.$store.commit('PUSH_MESSAGE', data)
        }
    },
    methods : {
        sendMessage() {
            const data = {
                name : localStorage.name,
                message : this.inputMsg
            }
            this.$store.commit('PUSH_MESSAGE', data)
            this.$socket.emit('sendMessage', data)
            this.inputMsg = ""
        }
    },
    computed : {
        messages() {
            return this.$store.state.messages
        }
    }
}
</script>

<style>
@import url("http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css");
.chat
{
    list-style: none;
    margin: 0;
    padding: 0;
}

.chat li
{
    margin-bottom: 10px;
    padding-bottom: 5px;
    border-bottom: 1px dotted #B3A9A9;
}

.chat li.left .chat-body
{
    margin-left: 60px;
}

.chat li.right .chat-body
{
    margin-right: 60px;
}


.chat li .chat-body p
{
    margin: 0;
    color: #777777;
}

.panel .slidedown .glyphicon, .chat .glyphicon
{
    margin-right: 5px;
}

.body-panel
{
    overflow-y: scroll;
    height: 250px;
}

::-webkit-scrollbar-track
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
}

::-webkit-scrollbar
{
    width: 12px;
    background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
    background-color: #555;
}
</style>