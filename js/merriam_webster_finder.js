/**
 * Created by User1 on 11/01 - Jan/17.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Word = (function () {
    function Word(word, meaning) {
        this.word = word;
        this.meaning = meaning;
    }
    Word.prototype.asRow = function () {
        return "" +
            "<tr>" +
            "<td>" + this.word + "</td>" +
            "<td>" + this.meaning + "</td>" +
            "</tr>" +
            "";
    };
    ;
    return Word;
}());
function l(s) {
    console.log(s);
}
var MeaninglessWord = (function (_super) {
    __extends(MeaninglessWord, _super);
    function MeaninglessWord(word) {
        _super.call(this, word, null);
        this.word = word;
    }
    return MeaninglessWord;
}(Word));
var InsertWord = (function (_super) {
    __extends(InsertWord, _super);
    function InsertWord() {
        _super.apply(this, arguments);
    }
    return InsertWord;
}(Word));
var ClearWord = (function (_super) {
    __extends(ClearWord, _super);
    function ClearWord() {
        _super.apply(this, arguments);
    }
    ClearWord.genericClear = new ClearWord(null, null);
    return ClearWord;
}(Word));
var SortedSet = (function () {
    function SortedSet(sortingFunction) {
        this.mArray = [];
        this._sortingFunction = sortingFunction;
    }
    SortedSet.prototype.get = function (i) {
        return this.mArray[i];
    };
    SortedSet.prototype.push = function (o) {
        var _this = this;
        var appropriatePosition = 0;
        if (this.mArray.indexOf(o) != -1)
            return;
        if (this.mArray.length != 0) {
            this.mArray.forEach(function (value, index) {
                var sortVal = _this._sortingFunction(o, value);
                // l(`sort val of ${o} and ${value} is ${sortVal}`);
                if (sortVal < 1) {
                    appropriatePosition = index + 1;
                }
            });
        }
        else {
            this.mArray.push(o);
            return this.mArray;
        }
        if (this.mArray[appropriatePosition] != null) {
            var length_1 = this.mArray.length;
            for (var i = length_1 - 1; i >= appropriatePosition; i--) {
                // l(`moving ${this.mArray[i]} to ${this.mArray[i + 1]}`);
                this.mArray[i + 1] = this.mArray[i];
            }
        }
        this.mArray[appropriatePosition] = o;
        return this.mArray;
    };
    SortedSet.prototype.remove = function (i) {
        return this.mArray.splice(i, 1);
    };
    SortedSet.prototype.clear = function () {
        this.mArray = [];
    };
    SortedSet.prototype.indexOf = function (e) {
        return this.mArray.indexOf(e);
    };
    SortedSet.prototype.contains = function (e) {
        return this.indexOf(e) != -1;
    };
    return SortedSet;
}());
var mSortedSet = new SortedSet(function (a, b) {
    return a - b;
});
