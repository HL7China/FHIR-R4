//导航条模板
document.write('<script id="nav-temp" type="text/html"><ul class="nav navbar-nav">' +
    '<% for (var i = 0; i < text.length; i++) { %> <li><a href="<%= link[i] %>"><%= text[i] %></a></li> <% } %>' +
    '</ul ></script >');  

document.write('<script id="foot-temp" type="text/html"><div class="container"><div class="inner-wrapper"><p>'+
    '&reg;&copy; HL7.org 2011+. FHIR Release 4 (v4.0.0) 于2018年12月27日发布. <a style="color: #ffffff" href="qa.html">QA 页面</a><br /><span style="color: #FFFF77">链接:' +
    '<% for (var i = 0; i < text.length; i++) { %> <a style="color: #b8dcf9" href="<%= link[i] %>"><%= text[i] %></a>| <% } %>' +
    '</span></p></div></div>');

var navData = {
    text: ['主页', '开始学习', '文档', '资源', '本地化', '扩展', '交互功能', '术语'],
    link: ['./index.html', '././modules.html', './documentation.html', './resourcelist.html', "./profilelist.html", './extensibility-registry.html', './operationslist.html', './terminologies-systems.html' ]
};


var footerData = {
    text: ['搜索', '历史版本', '目录', '供献', 'License', '提出建议', '联系我们:contact@hl7fhir.cn'],
    link: ['http://hl7.org/fhir/search.cfm', 'history.html', 'toc.html', 'credits.html', "license.html",   'http://hl7.org/fhir-issues', 'mailto:contact@hl7fhir.cn']
};

var navHtml = template('nav-temp', navData);

var footerHtml = template('foot-temp', footerData);
document.getElementById('nav-content').innerHTML = navHtml;
document.getElementById('segment-footer').innerHTML = footerHtml;


