class HashTable {
  constructor(length) {
    this._storage = [];
    this._length = length;
  }

  _hash(string) {
    let hash = 0;
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }

    return hash % this._length;
  }

  insert(key, value) {

    if(this._storage[this._hash(key)]){

      this._storage[this._hash(key)] =  value
    }

     this._storage[this._hash(key)] =  value
  }

  retrieve(key) {

    return this._storage[this._hash(key)]
  }

  remove(key) {
    delete this._storage[this._hash(key)]
  }
}
