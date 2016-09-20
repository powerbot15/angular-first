class MainController{

    constructor (computer) {

        this.name = 'Hello! I am unique controller #';

        this.computer = computer.compute;

        this.computer(this.printComputeResult.bind(this));

    }

    printComputeResult (result) {

        this.uniqueName = `${this.name}${result}`;

    }

}

MainController.$inject = ['computer'];

export {MainController}