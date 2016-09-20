export class Computer {

    compute (callback) {

        let result = (Math.random() * 100000).toFixed(0);

        callback(result);

    }
}