var HTMLSpanElement = function HTMLSpanElement() {
    // 构造函数
    throw new TypeError("Illegal constructor")
};
catvm.safefunction(HTMLSpanElement)



Object.defineProperties(HTMLSpanElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLSpanElement",
        configurable: true
    }
})



catvm.memory.htmlelements["span"] = function() {
    var span = new(function() {})
        ///////////////////////////////////////////////////
    span.style = {
        fontSize:''
    }

    ///////////////////////////////////////////////////
    span.__proto__ = HTMLSpanElement.prototype
    return span;
}