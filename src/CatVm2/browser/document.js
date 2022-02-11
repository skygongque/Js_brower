var Document = function Document() { //构造函数

};
catvm.safefunction(Document);


Object.defineProperties(Document.prototype, {
    [Symbol.toStringTag]: {
        value: "Document",
        configurable: true
    }
})
document = {};
document.__proto__ = Document.prototype;
document.referrer = location.href || "";
//////////////////////////////////////////////////////////

document.cookie = "tt_webid=6825408079360001549; s_v_web_id=verify_ka1vbe1k_GubxxV1k_sbBs_4GJN_97J3_d9DEaAlScSnw; csrftoken=d491c7930e77ad510b88f9e0b4769ca4";
document.body = {
    appendChild: function (x){
        debugger;
        return x;
    }
}
document.getElementById = function getElementById(id) {
    debugger;
    //用id 匹配当前环境内存已有的元素
    return null;

};
catvm.safefunction(document.getElementById)


document.addEventListener = function addEventListener() {
    debugger;
};
catvm.safefunction(document.addEventListener)



document.createElement = function createElement(tagName) {
    var tagname = tagName.toLowerCase() + "";
    if (catvm.memory.htmlelements[tagname] == undefined) {
        debugger;
    }
    return catvm.proxy(catvm.memory.htmlelements[tagname]())

};
catvm.safefunction(document.createElement);


document.createEvent = function createEvent(e){
    if (e == 'TouchEvent'){
        debugger;
        var TouchEvent = function TouchEvent() {
            // 构造函数
            throw new TypeError("Illegal constructor")
        };
        catvm.safefunction(TouchEvent)
        Object.defineProperties(TouchEvent.prototype, {
            [Symbol.toStringTag]: {
                value: "TouchEvent",
                configurable: true
            }
        })
        var event = new(function() {})
        ///////////////////////////////////////////////////
        
        ///////////////////////////////////////////////////
        event.__proto__ = TouchEvent.prototype
        return event;
    }
    debugger;
};catvm.safefunction(document.createEvent);


document.removeEventListener = function removeEventListener() {
    // debugger;
};
document.getElementsByTagName = function getElementsByTagName() {
    debugger;
    var head = {
        appendChild: function () { },
    }
    return [head];
}




//////////////////////////////////////////////////////////

document = catvm.proxy(document);