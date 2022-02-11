// HTMLCanvasElement
// HTMLDivElement
var HTMLCanvasElement = function HTMLCanvasElement() {
    // 构造函数
    throw new TypeError("Illegal constructor")
};
catvm.safefunction(HTMLCanvasElement)



Object.defineProperties(HTMLCanvasElement.prototype, {
    [Symbol.toStringTag]: {
        value: "HTMLCanvasElement",
        configurable: true
    }
})


// 粗糙地补一下canvas
catvm.memory.htmlelements["canvas"] = function() {
    var canvas = new(function() {})
        ///////////////////////////////////////////////////

    var CanvasRenderingContext2D = {
        arc: function arc() {},
        stroke: function stroke() {},
        fillText: function fillText() {},
    }
    // var WebGLDebugRendererInfo = {
        
    // }
    var WebGLRenderingContext = {
        getExtension: function getExtension(x){
            if (x == 'WEBGL_debug_renderer_info'){
                debugger;
                return {};
            }
            debugger;
        },
        getParameter:function getParameter(){
            debugger;
        }
    }
    WebGLRenderingContext = catvm.proxy(WebGLRenderingContext);
    canvas.getContext = function getContext(x) {
        if (x == 'webgl'){
            debugger
            return WebGLRenderingContext;
        } 
        debugger
        return CanvasRenderingContext2D;
    };catvm.safefunction(canvas.getContext);
    canvas.toDataURL = function toDataURL() {
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAACyUlEQVRIS8XWTYhVZRgH8N8dkPFqJqgI4sKmTUSgaBCKihCI5dZFUEaLwHAThjujEnXjpkAUHSRc+AEtFJIWKWRBSR9QENgiggplNqkTlXBnhjveeM6cF955PXccFJ2zuPec99zz3v/X87+3ZfrRK67jslWvxb103vCxx770DN5sApSAloBLco+SzFKcxbZClmG8gw7uIdCkfnq+BDsXbmzEizhYg2p0oEn1PEK5II/SgTKPbXyE89iBt+oPDDcpWz7cbwZysq/h9Vqd9/E2fkWsn0GsJeVi/1DvE6xJQLJoNA1T7PN0wx73zMBMDsTGTXMQ1n6TAfkJ63ACr+IcDmekUr6D0FUkdb+uc18SCPCba4ILitlodGA2ik8R7Rmw2E4ThnR9oVsRjJyuxL/4FLdwJCOQE07O5CBjQONIRINk7l4iOOMQB4mkdn6eajWgM2mhYU855KhRXRMO6DqKD/Ay3sWygkCKUE6qJPAegmis3+5T0I0EEtj8PUVn+r2e+Zb52HqjPqti8ptFnnPHPhzH6lq5+KIcbOwX4AJkAtjkQK50Pi9pfWfEKR/ifjVaOjC1wcLq9ZoPXbTLZfyi7Vljlep/4nSd8ZzA9bpNokUuzYJASTSBT3Mzcr8qbO77CNBSk0ZNGrPHoO+r1plnta4YxhxcTiAAbMcPs3QgXLpSC1EmKfbd38+B/jMQ4NvuWoTlPnfNKfyIES3P142U12Y/B6oI1Kj6RSgcOIZX6lqe0YHyL0Su/tT5gJ5JbSt03PSfrl34vco//2i522fgHma5/M1Ie20KZ0oHEsj5Fhireqijra2j4wlL3HHMGrv9bC2+tKUGf1vLxMOgfNBnp89AT8sGq3xrHE/WVRo0ojQHvWSHK/Y6ab83qhz/gZsYr34V5uAoCQwYstV1F6zzlXlaxg0aMeQvq7zgqu+qno+WuYG/5xJ86PU//5znHgwZKlQAAAAASUVORK5CYII="
    };catvm.safefunction(canvas.toDataURL);


    ///////////////////////////////////////////////////
    canvas.__proto__ = HTMLCanvasElement.prototype
    return canvas;
}