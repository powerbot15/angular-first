class MainController {

    constructor (computer) {

        this.name = 'Hello! I am unique controller #';

        this.computer = computer.compute;

        this.computer(this.printComputeResult.bind(this));

    }

    clickHandler (e) {

        console.dir(e);

        this.computer(this.printComputeResult.bind(this));

    }

    linkClick (e) {

        console.dir(e);
        e.preventDefault();

        this.computer(this.printComputeResult.bind(this));
    }

    printComputeResult (result) {

        this.uniqueName = `${this.name}${result}`;

    }

}

MainController.$inject = ['computer'];

export {MainController}