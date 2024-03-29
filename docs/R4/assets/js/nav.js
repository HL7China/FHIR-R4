﻿//herder

document.write('<script id="header-temp" type="text/html">'+
    ' <div class="container"><a no-external="true" id="logo" href="http://hl7fhir.cn/R4"><img src="./assets/images/fhir-logo-www.png" height="60" width="249" alt="FHIR中文版"/> </a><div id="hl7-status"><b>FHIR中文版 R4（第四版）<b></div>'+
    '<div id="hl7-nav"><a no-external="true" id="hl7-logo" href="http://www.hl7.org"><img src="./assets/images/hl7-logo.png" width="42"  height="50" alt="访问 hl7官网"/></a></div>'+
    '<div id="hl7-nav"><a no-external="true" id="hl7-logo" href="toc.html"><img src="./assets/ico/fhirIndex.png" alt="FHIR 目录" width="42" height="50" /></a></div>'+
    '<div id="hl7-nav"><a no-external="true" id="hl7-logo" href="http://hl7.org/fhir/search.cfm"><img src="./assets/images/search.png" alt="FHIR官网搜索" /></a></div>'+
    '</div><div class="container"></div>'+
'</script>');


//导航条模板
document.write('<script id="nav-temp" type="text/html"><ul class="nav navbar-nav">' +
    '<% for (var i = 0; i < text.length; i++) { %> <li><a href="<%= link[i] %>"><%= text[i] %></a></li> <% } %>' +
    '</ul ></script>');

document.write('<script id="foot-temp" type="text/html"><div class="container"><div class="inner-wrapper"><p>'+
    '&reg;&copy; HL7.org 2011+. FHIR Release 4 (v4.0.0) 于2018年12月27日发布. <a style="color: #ffffff" href="qa.html">QA 页面</a><br /><span style="color: #FFFF77">翻译主办:' +
    '<% for (var i = 0; i < text.length; i++) { %> <a style="color: #b8dcf9" href="<%= link[i] %>"><%= text[i] %></a>| <% } %>' +
    '</span></p></div></div></script>');

var navData = {
    text: ['主页', '入门', '文档', '资源类型', '本地化', '扩展', '操作', '术语','四川实施指南'],
    link: ['./index.html', '././modules.html', './documentation.html', './resourcelist.html', "./profilelist.html", './extensibility-registry.html', './operationslist.html', './terminologies-systems.html', './iglist.html' ]
};


var footerData = {
    text: ['四川省卫生信息学会', '历史版本', '目录', '贡献', 'License', '提出建议', '联系我们',' 蜀ICP备16019200号-2'],
    link: ['http://www.schia.cn/', 'history.html', 'toc.html', 'credits.html', "license.html",   'http://hl7.org/fhir-issues', 'mailto:contact@hl7fhir.cn','https://beian.miit.gov.cn/']
};

var headerHtml=document.getElementById('header-temp').innerHTML;
var navHtml = template('nav-temp', navData);

var footerHtml = template('foot-temp', footerData);



document.getElementById('segment-header').innerHTML = headerHtml;
document.getElementById('nav-content').innerHTML = navHtml;
document.getElementById('segment-footer').innerHTML = footerHtml;

var _hmt = _hmt || [];
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?a4d8b79ccc6ecb39dec265096ce4c16d";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

