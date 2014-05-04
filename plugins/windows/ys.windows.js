;(function($){
    var windows=function(config){
        return new windows.fn._init(config);
    };
    windows.fn=windows.prototype={
        _id:null,
        _setting:{
            width:"auto",     //50%
            height:"auto",   //50%
            top:"auto",
            left:"auto",
            title:"",
            url:"",
            color:"#000",
            speed:1000,
            opacity:0.3,
            showClose:true,
            closeByEsc:true,
            closeByBody:true,
            onOpen:function(){

            },
            onClose:function(){

            }
        },
        _init:function(config){
            this._extend(config);
            this._opacity();
            this._append(config);
            this._bind();
        },
        _extend:function(config){
            if(config[0]!==undefined) config=config[0];
            this._setting=$.extend(true,{},this._setting,config);  //参数替换
        },
        _opacity:function(){
            var that=this;
            var doc=top.document;
            var html="<div class='winbg'></div>";
            var zIndex=$(".winbg").first().css("z-index");
            $(doc).find("body").append(html);
            if($(".winbg").length==1){
                if(this._setting.color!="#000000") $(".winbg").last().css("background",this._setting.color);
                $(".winbg").last().animate({opacity: this._setting.opacity},this._setting.speed,function(){
                    that._setting.onOpen();
                });
            }else{
                $(".winbg").last().css({"opacity":this._setting.opacity,"z-index":parseInt(zIndex)+$(".winbg").length});
            }
        },
        _append:function(config){
            var setting=this._setting;
            var doc=top.document;
            var html="";
            var zIndex=$(".winbox").first().css("z-index");
            if(setting.width=="auto") setting.width=$(window).width()/2;
            if(setting.height=="auto") setting.height=$(window).height()/2;
            if(setting.top=="auto") setting.top=($(window).height()-setting.height)/2;
            if(setting.left=="auto") setting.left=($(window).width()-setting.width)/2;
            if(config.id==undefined){
                if(setting.url!=""){
                    html="<div class='winbox'>" +
                            "<div class='wintitle'>" +
                                "<span class='title-font'>"+setting.title+"</span>" +
                                "<span class='fa fa-times fa-2x'></span>" +
                            "</div>" +
                            "<div class='wincontent'>" +
                                "<iframe class='winiframe' name='winiframe' width='"+setting.width+"' height='"+setting.width+"' frameborder='0' scrolling='yes' src='"+setting.url+"'>" +
                                "</iframe>" +
                            "</div>" +
                        "</div>";
                }else{
                    html="<div class='winbox'>" +
                            "<div class='wintitle'>" +
                                "<span class='title-font'>"+setting.title+"</span>" +
                                "<span class='fa fa-times fa-2x'></span>" +
                            "</div>" +
                            "<div class='wincontent'>" +
                            "</div>" +
                        "</div>";
                }
            }else{
                    html="<div class='winbox'>" +
                        "<div class='wintitle'>" +
                            "<span class='title-font'>"+setting.title+"</span>" +
                            "<span class='fa fa-times fa-2x'></span>" +
                        "</div>" +
                        "<div class='wincontent'>" +
                        "</div>" +
                    "</div>";
            }
            $(doc).find("body").append(html);
            $(".winbox").last().css({"width":setting.width.toString()+"px","height":setting.height.toString()+"px",
                "left":setting.left.toString()+"px","top":setting.top.toString()+"px","z-index":parseInt(zIndex)+$(".winbg").length});
            var boxpadding=$(".winbox").last().css("padding").replace("px","")*2;
            var titleheight=$(".wintitle").last().height();
            var contentpadding=$(".wincontent").last().css("padding").replace("px","")*2;
            $(".title-font").last().css("width",(setting.width-boxpadding-20).toString()+"px");
            $(".wincontent").last().css({"width":(setting.width-boxpadding-10).toString()+"px",
                "height":(setting.height-boxpadding-titleheight-contentpadding-11).toString()+"px"});
            if(config.id!=undefined) $(".wincontent").last().append($(config.id).html());
        },
        _bind:function(){
            var that=this;
            if(this._setting.showClose==false) $(".fa-times").hide();
            $(".fa-times").last().click(function(event){
                that._close();
            });
            if(this._setting.closeByEsc==true){
                $(document).keydown(function(event){
                    if(event.keyCode==27){
                        that._close();
                    }
                });
                setTimeout("$('.winiframe').last().contents().keydown(function(event){ if(event.keyCode==27){ " +
                    "$('.winbg').last().hide();$('.winbox').last().hide();$('.winbg').last().remove();$('.winbox').last().remove();" +
                    "$('.winiframe').last().unbind(); }" +
                    "});",1000);
            }
            if(this._setting.closeByBody==true){
                $(".winbg").last().click(function(event){
                    that._close();
                });
            }
        },
        _close:function(){
            $(".winbg").last().hide();
            $(".winbox").last().hide();
            $(".winbg").last().remove();
            $(".winbox").last().remove();
            $(document).unbind();
            this._setting.onClose();
        }
    };
    $.extend({windows:windows});
    $.windows.close=function(all){
        windows.fn._setting.onClose();
        if(all){
            $(".winbg").hide();
            $(".winbox").hide();
            $(".winbg").remove();
            $(".winbox").remove();
            $(document).unbind();
        }else{
            $(".winbg").last().hide();
            $(".winbox").last().hide();
            $(".winbg").last().remove();
            $(".winbox").last().remove();
            $(document).unbind();
        }
    }
    windows.fn._init.prototype = windows.fn;
    $.fn.windows=function(arguments){
        var config = arguments;
        var setting = { id: this.selector };
        $.extend(setting, config, setting);
        var that=windows.apply(this, [setting]);
        return that;
    };
})(jQuery);
