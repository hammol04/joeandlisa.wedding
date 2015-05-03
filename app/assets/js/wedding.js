(function(window, document, Slider) {

    function Wedding() {
        this.init();
    }

    Wedding.prototype.init = function() {
        if (window.innerWidth > 799) {
            this.slider = new Slider();
        }
    };

    return new Wedding();

})(window, document, Slider);

