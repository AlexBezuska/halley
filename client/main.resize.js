/*

 AutoResize v1.1.1
 A jQuery Plugin that matches a textarea to the height of its text content
 http://azoffdesign.com/autoresize

 Intended for use with the latest jQuery
 http://code.jquery.com/jquery-latest.js

 Copyright 2011, Jonathan Azoff
 Dual licensed under the MIT or GPL Version 2 licenses.
 http://jquery.org/license

 For API documentation, see the README file
 https://github.com/azoff/AutoResize/blob/master/README.md

 Date: Sunday, September 25th 2011

console.log('loaded autoresize');
(function(e,h,f){function g(){var a=e(this),d=a.height(),b=a.data("scrollOffset"),c=a.data("minHeight"),i=f.scrollTop();b=a.height(c).prop("scrollHeight")-b;a.height(b);f.scrollTop(i);d!==b&&a.trigger("autoresize:resize",b)}function j(){var a=e(this),d=a.val(),b=a.val("").height(),c=this.scrollHeight;c=c>b?c-b:0;a.data("minHeight",b);a.data("scrollOffset",c);a.val(d).bind(k,g);g.call(this)}var k="keyup change paste input";h.autoResize=function(){return this.filter("textarea").each(j)}})(jQuery,jQuery.fn,
jQuery(window));





window.onload = function (){

$('.postBody').autoresize();//.bind('autoresize:resize', function(e, height){ console.log(this, 'is', height, 'px tall') });
    console.log('run autoresize');

  };

  */