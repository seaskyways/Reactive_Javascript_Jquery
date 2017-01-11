/**
 * Created by User1 on 11/01 - Jan/17.
 */

class Word {
    constructor(public word: string, public meaning?: string) {

    }

    asRow(): string {
        return "" +
            "<tr>" +
            "<td>" + this.word + "</td>" +
            "<td>" + this.meaning + "</td>" +
            "</tr>" +
            ""
    };
}

function l(s) {
    console.log(s)
}

class MeaninglessWord extends Word {
    constructor(public word: string) {
        super(word, null);
    }
}

class Clear {
    static instance = new Clear()
}

class SortedSet {
    mArray = [];
    _sortingFunction: (a, b) => number;

    constructor(sortingFunction) {
        this._sortingFunction = sortingFunction;
    }

    public get(i) {
        return this.mArray[i]
    }

    public push(o) {
        let appropriatePosition = 0;
        if (this.mArray.indexOf(o) != -1) return;

        if (this.mArray.length != 0) {
            this.mArray.forEach((value, index) => {
                let sortVal = this._sortingFunction(o, value);
                // l(`sort val of ${o} and ${value} is ${sortVal}`);
                if (sortVal < 1) {
                    appropriatePosition = index + 1;
                }
            });
            // l(`appropriate pos of ${o} is ${appropriatePosition}`)
        } else {
            this.mArray.push(o);
            return this.mArray;
        }

        if (this.mArray[appropriatePosition] != null) {
            let length = this.mArray.length;
            for (let i = length - 1; i >= appropriatePosition; i--) {
                // l(`moving ${this.mArray[i]} to ${this.mArray[i + 1]}`);
                this.mArray[i + 1] = this.mArray[i];
            }
        }

        this.mArray[appropriatePosition] = o;

        return this.mArray;
    }

    public remove(i) {
        return this.mArray.splice(i, 1)
    }

    public clear() {
        this.mArray = []
    }
}

const mSortedSet = new SortedSet(function (a, b) {
    return a - b
});