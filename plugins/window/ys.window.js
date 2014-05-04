//弹出窗口
;(function($){
    var window=function(config){
        return new window.fn._init(config);
    };
    window.fn=window.prototype={
        _id:null,
<<<<<<< HEAD
        _setting:{
            width:"auto",     //50%
            height:"auto",   //50%
            top:"auto",
            left:"auto",
            title:"",
            url:"",
            showClose:false,
            closeByEsc:true,
            closeByBody:false
        },
        _init:function(config){
            this._extend(config);
            this._append(config);
            this._bind();
        },
        /**
         * 参数替换
         * */
        _extend:function(config){
            if(config[0]!==undefined) config=config[0];
            this._setting=$.extend(true,{},this._setting,config);  //参数替换
        },
        _append:function(config){
            var setting=this._setting;
=======
        _init:function(){
>>>>>>> 9d7397f4e166a56c1444c9e7474f1f872810509c
            var doc=top.document;
            if(setting.width=="auto") setting.width=$(doc).width()/2;
            if(setting.height=="auto") setting.height=$(doc).height()/2;
            if(setting.top=="auto") setting.top=($(doc).height()-setting.height)/2;
            if(setting.left=="auto") setting.left=($(doc).width()-setting.width)/2;
            var html="<div id='winbg'></div>";
            $(doc).find("body").append(html);
            if(config.id==undefined){
                if(setting.url!=""){
                    html="<div id='winbox'>" +
                            "<div class='wintitle'>" +
                                "<span class='title-font'>"+setting.title+"</span>" +
                                "<span class='fa fa-times fa-2x'></span>" +
                            "</div>" +
                            "<div class='wincontent'>" +
                                "<iframe id='winiframe' name='winiframe' width='"+setting.width+"' height='"+setting.width+"' frameborder='0' scrolling='yes' src='"+setting.url+"'>" +
                                "</iframe>" +
                            "</div>" +
                        "</div>";
                }else{
                    html="<div id='winbox'>" +
                            "<div class='wintitle'>" +
                                "<span class='title-font'>"+setting.title+"</span>" +
                                "<span class='fa fa-times fa-2x'></span></div>" +
                            "<div class='wincontent'></div>" +
                         "</div>";
                }
            }else{
                html="<div id='winbox'>" +
                        "<div class='wintitle'>" +
                            "<span class='title-font'>"+setting.title+"</span>" +
                            "<span class='fa fa-times fa-2x'></span></div>" +
                        "<div class='wincontent'></div>" +
                     "</div>";
            }
            $(doc).find("body").append(html);
            $("#winbox").css("width",setting.width.toString()+"px");
            $("#winbox").css("height",setting.height.toString()+"px");
            $("#winbox").css("left",setting.left.toString()+"px");
            $("#winbox").css("top",setting.top.toString()+"px");
            var boxpadding=$("#winbox").css("padding").replace("px","")*2;
            var titleheight=$(".wintitle").height();
            var contentpadding=$(".wincontent").css("padding").replace("px","")*2;
            $(".title-font").css("width",(setting.width-boxpadding-20).toString()+"px");
            $(".wincontent").css("height",(setting.height-boxpadding-titleheight-contentpadding).toString()+"px");
            $(".wincontent").css("width",(setting.width-boxpadding-8).toString()+"px");
            if(config.id!=undefined) $(".wincontent").append($(config.id).html());
        },
        _bind:function(){
            var that=this;
            if(this._setting.showClose==false) $(".fa-times").hide();
            $(document).keydown(function(event){
                if(event.keyCode==27){that.close();}
            });
            setTimeout("$('#winiframe').contents().keydown(function(event){ if(event.keyCode==27){ " +
                "$('#winbg').hide();$('#winbox').hide();$('#winbg').remove();$('#winbox').remove();}" +
                "});",1000);
        },
        close:function(){
            $("#winbg").hide();
            $("#winbox").hide();
            $("#winbg").remove();
            $("#winbox").remove();
        }
    };
    $.extend({window:window});
    window.fn._init.prototype = window.fn;
    $.fn.window=function(){
        var config = arguments;
        var setting = { id: this.selector };
        $.extend(setting, config, setting);
        var that=window.apply(this, [setting]);
        return that;
    };
})(jQuery);
