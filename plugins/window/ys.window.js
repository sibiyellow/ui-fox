//弹出窗口
;(function($){
    var window=function(config){
        return new window.fn._init(config);
    };
    window.fn=window.prototype={
        _id:null,
        _init:function(){
            var doc=top.document;
            $(doc).find("body").append("<div id='winbg'></div>");
        }
    };
    window.fn._init.prototype = window.fn;
    $.fn.window=function(){
        var config = arguments;
        var setting = { id: this.selector };
        $.extend(setting, config, setting);
        var that=window.apply(this, [setting]);
        return that;
    };
})(jQuery);
