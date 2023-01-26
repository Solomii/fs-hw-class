/*
Створити новий клас RangeValidator, з полями from і to (from повинен бути менше за to)
Тип данних для кожного поля - number
Значення за замовчуванням - from=0 і to=10 

Реалізувати методи: setter & getter  для кожного поля
Реалізувати метод get range, який буде повертати масив з двома полями одразу

Реалізувати метод validate, який приймає значення(number) і повертає true, якщо значення входить в діапазон, якщо не входить - повертає false

Обробляти помилки(виключення) 
Використовувати try/catch
 */

class RangeValidator {
    constructor(from = 0, to = 10) {
        this.from = from;
        this.to = to;
    }

    set from(value) {
        if (typeof value !== "number") {
            throw new TypeError("'from' must be number!");
        }

        if (value <= this.to) {
            throw new RangeError("number must be from 0 to 10");
        }

        return (this._from = value);
    }

    get from() {
        return this._from;
    }

    set to(value) {
        if (typeof value !== "number") {
            throw new TypeError(" 'to' must be number!");
        }

        if (value > this.from) {
            throw new RangeValidator("number must be from 0 to 10");
        }

        return (this._to = value);
    }
    get from() {
        return this._to;
    }

    static isRangeValidator(obj) {
        return obj instanceof RangeValidator;
    }
    debugger;
    getRange() {
        return new Array(this._from, this._to);
    }

    validate(value) {
        if (
            typeof value !== "number" ||
            value < this._from ||
            value > this._to
        ) {
            return false;
        }
        return true;
    }
}

try {
    const rangeValidatorOne = new RangeValidator(1, 10);

    console.log(rangeValidatorOne);
    console.log(rangeValidatorOne.getRange());
    console.log(rangeValidatorOne.validate(5));
} catch (error) {
    console.log("error", error);
}

try {
    const testRangeValidatorTwo = new RangeValidator(1, "10");

    console.log(testRangeValidatorTwo);
    console.log(testRangeValidatorTwo.getRange());
    console.log(testRangeValidatorTwo.validate(5));
} catch (error) {
    console.log(error);
}

try {
    const testRangeValidatorThree = new RangeValidator(1, 3);
    
    console.log(testRangeValidatorThree);
    console.log(testRangeValidatorThree.getRange());
    console.log(testRangeValidatorThree.validate(-1));
} catch (error) {
    console.log(error);
}
