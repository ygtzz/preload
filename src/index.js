import assign from 'object-assign';

function PreLoad(opts){
    opts = assign({
        preSelector:'[data-pre]',
        preAttr: 'data-pre',
        callback: null
    }, opts);

    this.opts = opts;

    if(opts.preSelector){
        var preDoms = document.querySelectorAll(opts.preSelector);
        if(preDoms && preDoms.length > 0){
            this._fPreLoad(Array.prototype.slice.call(preDoms).map(item => item.getAttribute(opts.preAttr)));
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
