//规则：pId为父级id，zNodes里面的数据，pId为0时为第一层  children为子集
//iconSkin属性控制图标，pIcon01是正式规范  icon01是非正式规范    open是否展开  url链接地址   target用于设置 页面跳转的窗口目标:_self当前窗口  _blank新窗口  subtitle副标题 thickTitle粗标题
var zNodes =[
    { id:1, pId:0, name:" 0 Welcome to FHIR® ",thickTitle:"欢迎使用 FHIR®", subtitle:"（部分资源重复，如：ImagingStudy）", open:false, iconSkin:"pIcon01",url:"http://fhir.vz/R4/index.html", target:"_self",
        children:[
            {id:11, name:"叶子节点1",iconSkin:"icon01",url:"http://www.taobao.com/",subtitle:"副标题", target:"_blank",
                children:[
                    {id:111, name:"叶子节点1",iconSkin:"icon01",url:"http://www.taobao.com/", target:"_blank"},
                    {id:112, name:"叶子节点1"},
                    {id:113, name:"叶子节点1"},
                    {id:114, name:"叶子节点1"},
                    {id:115, name:"叶子节点1"},
                    {id:116, name:"叶子节点1"}
                ]},
            {id:12, name:"叶子节点1"},
            {id:13, name:"叶子节点1"},
            {id:141, name:"叶子节点1"},
            {id:142, name:"叶子节点1"},
            {id:15, name:"叶子节点1"}
        ]},
    { id:2, pId:0, name:"展开、折叠 自定义图标相同", open:false, iconSkin:"pIcon01",
        children:[
            { id:21, name:"叶子节点1", iconSkin:"icon01"},
            { id:22, name:"叶子节点2", iconSkin:"icon01"},
            { id:23, name:"叶子节点3", iconSkin:"icon01"},
            { id:24, name:"叶", iconSkin:"icon01"},
        ]},
];