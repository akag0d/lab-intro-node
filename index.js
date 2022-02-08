class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a, b) => a - b);
    this.length += 1;
  }

  get(pos) {
    if (pos <= this.length) {
      return this.items[pos];
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      var max = Math.max.apply(null, this.items);
      return max;
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      var min = Math.min.apply(null, this.items);
      return min;
    }
  }

  sum() {
    if (this.length === 0) {
      return 0
    } else {
      return this.items.reduce((a,b) => a+b)
    }

  }

  avg() {
    if (this.length === 0) {
      throw new Error('EmptySortedList')
    } else {
      return (this.items.reduce((a,b) => a+b)) / this.length
    }
  }
}

module.exports = SortedList;
