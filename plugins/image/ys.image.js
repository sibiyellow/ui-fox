;(function($){
    $.extend({image:{
        setting:{
            id:"",
            width:"auto",     //50%
            height:"auto",   //50%
            loading:null
        }
    }});
    $.image.load=function(arguments){
        var config=this.setting=$.extend(true,{},this.setting,arguments);  //参数替换
        var imgId=config.id+" img"
        var images = $(imgId);            //获取所有图片
        $(images).hide();                     //隐藏
        var loading = new Image();          //预加载图片
        loading.className = "loading";
        loading.src = config.loading;
        $(images).after(loading);
        var perLoading = function($this) {
            var img = new Image();
            img.src = $this.src;
            if (img.complete) {
                computeImg.call($this);
                return;
            };
            img.onload = function() {
                computeImg.call($this);
                img.onload = function() { };
            };
        };
        //图片缩放处理,以及图片显示函数
        var computeImg = function(doc) {
            var m = this.height - config.height;
            var n = this.width - config.width;
            if (m > n)
                this.height = this.height > config.height ? config.height : this.height;
            else
                this.width = this.width > config.width ? config.width : this.width;
            $(this).next(".loading").remove();
            $(this).show();
        };
        //循环调用预加载函数
        $(images).each(function() {
            perLoading(this);
        });
    }
})(jQuery);
