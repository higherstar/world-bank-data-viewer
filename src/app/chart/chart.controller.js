module.exports = chartController;

chartController.$inject = ['charts', '$scope'];

function chartController(charts, $scope) {
    var vm = this;

    vm.data = [];
    vm.options = {};
    vm.isBusy = false;

    activate();

    ////////////////

    function activate() {

        charts.plotDataObservable.subscribe(function (data) {
            if (data) {
                vm.data = data.dots;
                vm.options = data.options;
            }
        });

        charts.busyObservable
            .filter(function (isBusy) {
                return isBusy;
            })
            .subscribe(function (isBusy) {
                vm.isBusy = isBusy;
            });

        charts.busyObservable
            .filter(function (isBusy) {
                return !isBusy;
            })
            .delay(500)
            .subscribe(function (isBusy) {
                $scope.$apply(function () {
                    vm.isBusy = isBusy;
                });
            });
    }
}