if (!window.jqDCCAJAX) jqDCCAJAX = jQuery.noConflict(); 
jqDCCAJAX.event.add(window, "load", function(){
        window.jqDCCAJAX("img[rel='resize']").each(function(){
        var fw = window.jqDCCAJAX(this).attr('smartw') ? window.jqDCCAJAX(this).attr('smartw') : 300;        //fixed width
        var fh = window.jqDCCAJAX(this).attr('smarth') ? window.jqDCCAJAX(this).attr('smarth') :10000;        //fixed height
        var w = window.jqDCCAJAX(this).width();
        var h = window.jqDCCAJAX(this).height();
        if (w > fw) {
            window.jqDCCAJAX(this).width(parseInt(fw));
        } else if(h > fh) {
            window.jqDCCAJAX(this).height(parseInt(fh));
        }
    });
});