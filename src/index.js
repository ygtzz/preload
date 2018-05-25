import assign from 'object-assign';

function PreLoad(opts){
    opts = assign({
        imgSelector:'img[data-pre]',
        imgAttr: 'data-pre',
        callback: null
    }, opts);

    this.opts = opts;

    if(opts.imgSelector){
        var images = document.querySelectorAll(opts.imgSelector);
        if(images && images.length > 0){
            this._fPreLoad(Array.prototype.slice.call(images).map(item => item.getAttribute(opts.imgAttr)));
        }
    }   
}

PreLoad.prototype._fPreLoad = function(urls){
    urls.forEach(url => {
        this._fLoadImage(url);
    });
}

PreLoad.prototype._fLoadImage = function(url,callback){
    callback = callback || this.opts.callback;
    //创建一个Image对象，实现图片的预下载  
    var img = new Image();    
    img.onload = function(){
        img.onload = null;
        callback && callback(img);
    }
    img.src = url;
}

PreLoad.prototype.preload = PreLoad.prototype._fPreLoad;

export {PreLoad};
