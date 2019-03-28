let imguploaddomain = "http://47.105.40.29:18889/gateway/uploadBaseFile"
let imgdomain = "http://images.ccgthi.com/"
let apibaseurl = "http://47.105.40.29:18880/hjzk/"
let wsbaseurl = "ws://47.105.40.29:18888/"

let config = {
    imguploaddomain : "http://10.168.5.241:8888/gateway/uploadBaseFile", //图片上传地址
    imgdomain : "http://images.ccgthi.com/",
    apibaseurl : "http://10.168.5.210:8880/hjzk/",  //app后台地址
    wsbaseurl : "ws://10.168.5.210:8888/websocket/1",  //websock后台地址
    hjcloudapiurl: 'http://10.168.5.210:8888/alarm/' //hjcloud 后台地址
}

// let localconfig = localStorage.getItem("localconfig")

// if (localconfig != null){
//     let json_conf = JSON.parse(localconfig)
//     Object.keys(json_conf).map(item =>{
//         config[item] = json_conf[item]
//     })
// }else{
//     localStorage.setItem("localconfig", JSON.stringify(config))
// }

export default config