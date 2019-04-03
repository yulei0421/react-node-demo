<template>
    <div id="recorder">

        <audio-recorder
                upload-url="uploadurl"
                :attempts="3"
                :time="2"
                :headers="headers"
                :before-recording="callback"
                :pause-recording="callback"
                :after-recording="callback"
                :select-record="callback"
                :before-upload="callback"
                :successful-upload="callback"
                :failed-upload="callback"/>

        <!--<audio-player src="/demo/example.mp3"/>-->
    </div>
</template>

<script>
    export default {
        name: "recorder",
        data () {
            return {
                mp3: '/demo/example.mp3',
                showRecorder: true,
                headers: {
                    'X-Custom-Header': 'some data'
                },
                uploadurl:'http://192.168.25.62:8005/sftpUploadFile'
            }
        },
        methods: {
            callback (data) {
                console.debug(data)
            }
        }
    }
</script>

<style lang='less' scoped>
    @import "~@/style/page.less";
    #recorder{
        width: 100%;
        height:100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #FAFAFA;
        .ar{
            position: relative;
            top:-80px;
            box-shadow: 0 0 0 0;

            .ar-content{
                margin-top: 80px!important;
            }
        }
    }

</style>