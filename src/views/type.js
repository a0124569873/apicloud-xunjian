let type = [
    { code:"1111KBQBB", name: "1111可变情报板"},
    { code: "2FXKBQBB", name: "2F型可变情报板11111"},
    { code: "444KBQBB", name: "444可变情报板"},
    { code: "CDZSQ", name: "车道指示器"},
    { code: "COVIJCQ", name: "CO/VI检测器"},
    { code: "CS123FXKBQBB", name: "测试123F型可变情报板11111"},
    { code: "CSFI", name: "测试分类"},
    { code: "CSKBQBB", name: "测试可变情报板"},
    { code: "DHQBBKBQBB", name: "大华情报板可变情报板"},
    { code: "DKJJDHJJDH", name: "隧道洞口紧急电话分机"},
    { code: "DNZM", name: "照明"},
    { code: "DZZCDZSQ", name: "带左转车道指示器"},
    { code: "FBSGWGX", name: "分布式感温光纤"},
    { code: "FXKBQBB", name: "F型可变情报板11111"},
    { code: "GDWSC", name: "高地位水池"},
    { code: "GJWIJDSB", name: "关键网络节点设备"},
    { code: "GQJCQ", name: "光强检测器"},
    { code: "HDJIM", name: "横洞卷帘门"},
    { code: "HDZSQ", name: "横洞指示器"},
    { code: "HZBJQ", name: "火灾报警器"},
    { code: "ISXFB", name: "立式消防泵"},
    { code: "JBZMDNZM", name: "基本照明"},
    { code: "JJDH", name: "紧急电话"},
    { code: "JJDHXT", name: "紧急电话系统"},
    { code: "JSB", name: "给水泵"},
    { code: "JTXHD", name: "交通信号灯"},
    { code: "KBQBB", name: "可变情报板"},
    { code: "MJSKBQBB", name: "门式可变情报板"},
    { code: "NJDJCQ", name: "能见度检测器"},
    { code: "NO2JCQ", name: "NO2检测器"},
    { code: "QXSXT", name: "遥控球形摄像机"},
    { code: "SBCHZTCQ", name: "双波长火灾探测器"},
    { code: "SDBJAN", name: "手动报警按钮"},
    { code: "SDNJJDHFJJJDH", name: "隧道内紧急电话分机"},
    { code: "SDZYXXBZKBQBB", name: "隧道专用可变信息标志"},
    { code: "SFZQXXFBPKBQBB", name: "收费站前信息发布屏"},
    { code: "SGBJQ", name: "声光报警器"},
    { code: "SXT", name: "摄像机"},
    { code: "TJFXKBQBB", name: "添加F型可变情报板11111"},
    { code: "VIJCQ", name: "道路上VI检测器"},
    { code: "XBSKBXXBZKBQBB", name: "悬臂式可变信息标志"},
    { code: "YDZMDNZM", name: "引道照明"},
    { code: "YJZMDNZM", name: "应急照明"},
    { code: "ZNDB", name: "智能电表"},
    { code: "ZSDPKBQBB", name: "站上大屏可变情报板"}
]

let typecode = {
"1111KBQBB":'外观有破损,噪音太大,运转异常',
"2FXKBQBB":'外观有破损,噪音太大,运转异常',
"444KBQBB":'外观有破损,噪音太大,运转异常',
"CDZSQ":'外观有破损,噪音太大,运转异常',
"COVIJCQ":'外观有破损,噪音太大,运转异常',
"CS123FXKBQBB":'外观有破损,噪音太大,运转异常',
"CSFI":'外观有破损,噪音太大,运转异常',
"CSKBQBB":'外观有破损,噪音太大,运转异常',
"DHQBBKBQBB":'外观有破损,噪音太大,运转异常',
"DKJJDHJJDH":'外观有破损,噪音太大,运转异常',
"DNZM":'外观有破损,噪音太大,运转异常',
"DZZCDZSQ":'外观有破损,噪音太大,运转异常',
"FBSGWGX":'外观有破损,噪音太大,运转异常',
"FXKBQBB":'外观有破损,噪音太大,运转异常',
"GDWSC":'外观有破损,噪音太大,运转异常',
"GJWIJDSB":'外观有破损,噪音太大,运转异常',
"GQJCQ":'外观有破损,噪音太大,运转异常',
"HDJIM":'外观有破损,噪音太大,运转异常',
"HDZSQ":'外观有破损,噪音太大,运转异常',
"HZBJQ":'外观有破损,噪音太大,运转异常',
"ISXFB":'外观有破损,噪音太大,运转异常',
"JBZMDNZM":'外观有破损,噪音太大,运转异常',
"JJDH":'外观有破损,噪音太大,运转异常',
"JJDHXT":'外观有破损,噪音太大,运转异常',
"JSB":'外观有破损,噪音太大,运转异常',
"JTXHD":'外观有破损,噪音太大,运转异常',
"KBQBB":'外观有破损,噪音太大,运转异常',
"MJSKBQBB":'外观有破损,噪音太大,运转异常',
"NJDJCQ":'外观有破损,噪音太大,运转异常',
"NO2JCQ":'外观有破损,噪音太大,运转异常',
"QXSXT":'外观有破损,噪音太大,运转异常',
"SBCHZTCQ":'外观有破损,噪音太大,运转异常',
"SDBJAN":'外观有破损,噪音太大,运转异常',
"SDNJJDHFJJJDH":'外观有破损,噪音太大,运转异常',
"SDZYXXBZKBQBB":'外观有破损,噪音太大,运转异常',
"SFZQXXFBPKBQBB":'外观有破损,噪音太大,运转异常',
"SGBJQ":'外观有破损,噪音太大,运转异常',
"SXT":'外观有破损,噪音太大,运转异常',
"TJFXKBQBB":'外观有破损,噪音太大,运转异常',
"VIJCQ":'外观有破损,噪音太大,运转异常',
"XBSKBXXBZKBQBB":'外观有破损,噪音太大,运转异常',
"YDZMDNZM":'外观有破损,噪音太大,运转异常',
"YJZMDNZM":'外观有破损,噪音太大,运转异常',
"ZNDB":'外观有破损,噪音太大,运转异常',
"ZSDPKBQBB":'外观有破损,噪音太大,运转异常',
}

// console.log(typecode["ZSDPKBQBB"]);

export {typecode, type}
