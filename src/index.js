class Sorter {
  constructor(arg = []) {
    this._data = arg;
    this._comparator = (a, b) => a - b;
    this._length;
  }

  add(element) {
    this._data.push(element);
  }

  at(index) {
    return this._data[index];
  }

  get length() {
    return this._data.length;
  }

  toArray() {
    return this._data;
  }

  sort(indices = []) {
    let newArray = indices
      .sort((a, b) => a - b)
      .map(index => this._data[index])
      .sort(this._comparator);

    indices.forEach((index) => {
      this._data[index] = newArray[0];
      newArray.splice(0, 1);
    })
  }

  setComparator(compareFunction) {
    this._comparator = compareFunction;
  }
}
module.exports = Sorter;