<template>
    <div id="record">
        <div class="contain">
            <article>
                <div class="microphone">
                    <img  :class="[{ normal: startrecord },'wait']" src="~@/assets/images/record/wait.jpeg">
                    <img  :class="[{ normal: !startrecord },'process']"  src="~@/assets/images/record/recordprocess.gif">
                    <!--<div v-bind:class="[{ process: startrecord }, 'errorClass']"></div>-->
                </div>

                <div class="timeframe">
                    <span id="time">0:00</span>
                </div>


                <section class="btngroup">
                    <div class="record"  id="record"    @click="record"></div>
                    <div class="play"    id="play"      @click="play"></div>
                    <div class="stop"    id="stop"      @click="stop"></div>
                    <div class="upload"  id="upload"    @click="upload"></div>
                </section>

            </article>


            <!--<audio controls>-->
                <!--<source src="./suc.mp3" type="audio/mpeg">-->
            <!--</audio>-->

            <!--<object type="application/x-shockwave-flash" data="./recorder.swf" -->
                    <!--width="231" height="141" id="recorderFlashObject" style="visibility: visible;">-->
                <!--<param name="allowscriptaccess" value="always">-->
            <!--</object>-->

        </div>
    </div>
</template>

<script>
    // import mp3 from '@/static/suc.mp3'
    // import demo from 'src/assets/images/demo.jpeg'
    // import recorderswf from "@/static/recorder.swf"
    // const swf = require('./recorder.swf');
    // const recorderswf = require('~@/assets/images/recorder.swf')
    // import Recorder from "./recorder"
    // console.log('gww',recorderswf)
    export default {
        name: "record",
        data:()=>{          //这里必须要函数返回值,()=>就是function()
            return {
                // mp3:mp3,
                // demo:demo,
                title: '',
                startrecord:false
            }
        },
        created(){

        },
        mounted(){
           //  Recorder.initialize({
           //      // swfSrc: "./../../../static/recorder.swf"
           //      swfSrc: './recorder.swf'
           //  });
           // console.log('wwg',document.getElementById('recorderFlashObject'));
        },
        methods:{
            record(){
                this.startrecord = true;
                // Recorder.record({
                //     start: function(){
                //         //alert("recording starts now. press stop when youre done. and then play or upload if you want.");
                //     },
                //     progress: function(milliseconds){
                //         document.getElementById("time").innerHTML = timecode(milliseconds);
                //     }
                // });
            },
            play(){

            },
            stop(){

            },
            upload(){

            }
        }
    }
</script>

<style lang='less' scoped>
    @import "~@/style/page.less";
    #record{
        height: 100%;
        background-color: #050505;
        .contain{
            height: 100%;
            .microphone{
                width: 100%;
                height: 600px;
                line-height: 600px;
                text-align: center;
                .wait{
                    width: 400px;
                    height: 400px;
                }
                .normal{

                    display: none!important;
                }
                .process{
                    display: inline-block;
                    width: 360px;
                    height: 360px;
                    position: relative;
                    top:20px;
                }
            }

            .timeframe{
                color:#ffffff;
                font-size: 24px;
                font-weight: bold;
                position: absolute;
                top: 48%;
                left:48%;
            }

            .btngroup{
                display: flex;
                justify-content: center;
                .record{
                    margin: 0 10px;
                    background:url('~@/assets/images/record/record.svg') no-repeat center center;
                    width:100px;
                    height:80px;
                    display: inline-block;
                    background-size: 100%;
                    vertical-align: middle;
                }
                .play{
                    margin: 0 10px;
                    background:url('~@/assets/images/record/play.svg') no-repeat center center;
                    width:100px;
                    height:80px;
                    display: inline-block;
                    background-size: 80%;
                    vertical-align: middle;
                }
                .stop{
                    margin: 0 10px;
                    background:url('~@/assets/images/record/stop.svg') no-repeat center center;
                    width:100px;
                    height:80px;
                    display: inline-block;
                    background-size: 80%;
                    vertical-align: middle;
                }
                .upload{
                    margin: 0 10px;
                    background:url('~@/assets/images/record/upload.svg') no-repeat center center;
                    width:100px;
                    height:80px;
                    display: inline-block;
                    background-size: 80%;
                    vertical-align: middle;
                }
            }
        }
    }

</style>