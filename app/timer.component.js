(function(app) {
    app.AppComponent =
        ng.core.Component({
            selector: 'timer',
            template: '<h1>Angular Timer</h1> <p id></p>'
        })
            .Class({
                constructor: function() {
                    setInterval(function () {
                        console.log('Tick');
                    }, 1000);
                }
            });
})(window.app || (window.app = {}));