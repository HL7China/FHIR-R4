//herder

document.write('<script id="header-temp" type="text/html">'+
    ' <div class="container"><a no-external="true" id="logo" href="http://hl7fhir.cn/R4"><img src="./assets/images/fhir-logo-www.png" height="60" width="249" alt="FHIR中国"/> </a><div id="hl7-status"><b>FHIR中国 R4（第四版）<b></div>'+
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
    '&reg;&copy; HL7.org 2011+. FHIR Release 4 (v4.0.0) 于2018年12月27日发布. <a style="color: #ffffff" href="qa.html">QA 页面</a><br /><span style="color: #FFFF77">链接:' +
    '<% for (var i = 0; i < text.length; i++) { %> <a style="color: #b8dcf9" href="<%= link[i] %>"><%= text[i] %></a>| <% } %>' +
    '</span></p></div></div></script>');

var navData = {
    text: ['主页', '入门', '文档', '资源类型', '本地化', '扩展', '操作', '术语'],
    link: ['./index.html', '././modules.html', './documentation.html', './resourcelist.html', "./profilelist.html", './extensibility-registry.html', './operationslist.html', './terminologies-systems.html' ]
};


var footerData = {
    text: ['搜索', '历史版本', '目录', '贡献', 'License', '提出建议', '联系我们:contact@hl7fhir.cn'],
    link: ['http://hl7.org/fhir/search.cfm', 'history.html', 'toc.html', 'credits.html', "license.html",   'http://hl7.org/fhir-issues', 'mailto:contact@hl7fhir.cn']
};

var headerHtml=document.getElementById('header-temp').innerHTML;
var navHtml = template('nav-temp', navData);

var footerHtml = template('foot-temp', footerData);



document.getElementById('segment-header').innerHTML = headerHtml;
document.getElementById('nav-content').innerHTML = navHtml;
document.getElementById('segment-footer').innerHTML = footerHtml;


