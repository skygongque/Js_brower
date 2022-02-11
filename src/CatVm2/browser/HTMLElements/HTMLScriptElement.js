var HTMLScriptElement = function HTMLScriptElement() {
    // 构造函数
    throw new TypeError("Illegal constructor")
};
catvm.safefunction(HTMLScriptElement)



Object.defineProperties(HTMLScriptElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLScriptElement",
        configurable: true
    }
})




//真实的div
catvm.memory.htmlelements["script"] = function() {
    var script = new(function() {})
    debugger;
    ///////////////////////////////////////////////////

    ///////////////////////////////////////////////////
    script.__proto__ = HTMLScriptElement.prototype
    return script;
}