(function($){$.fn.lazy=function(){var $window=$(window),images=this,inview,loaded;images.one('lazy',function(){var width=parseInt($(this).parent().width());var src=this.getAttribute('data-src');if(width>0){var _w=this.getAttribute('width'),_h=this.getAttribute('height'),height=parseInt(width*_h/_w);src=src.replace(/\/([0-9]*)x([0-9]*)\//gm,"/"+width+"x"+height+"/");}
else var height=0;this.setAttribute('src',src);this.setAttribute('width',width);if(height>0)this.setAttribute('height',height);this.removeAttribute('data-src');});$window.scroll(function(){inview=images.filter(function(){var a=$window.scrollTop(),b=$window.height(),c=$(this).offset().top,d=$(this).height();return c+d>=a&&c<=a+b;});loaded=inview.trigger('lazy');images=images.not(loaded);});$window.scroll();};})(jQuery);(function($){$.fn.relazy=function(){return this.each(function(){var src=$(this).attr('src');$(this).attr('data-src',src);$(this).lazy();});};})(jQuery);