interface IStorageItem {
  key: string;
  value: any;
}

class StorageItem {
  key: string;
  value: any;

  constructor(data: IStorageItem) {
    this.key = data.key;
    this.value = data.value;
  }
}

export const StorageHelper = {
  isSupported:
    typeof window['localStorage'] != 'undefined' &&
    window['localStorage'] != null,

  // add value to storage
  add(key: string, item: string) {
    if (this.isSupported) {
      localStorage.setItem(key, JSON.stringify(item));
    }
  },

  // get all values from storage (all items)
  getAllItems(): StorageItem[] {
    var list = new Array<StorageItem>();

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key || '');

      list.push(
        new StorageItem({
          key: key || '',
          value: value,
        }),
      );
    }

    return list;
  },

  // get only all values from localStorage
  getAllValues(): any[] {
    var list = new Array<any>();

    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      var value = localStorage.getItem(key || '');

      list.push(value);
    }

    return list;
  },

  // get one item by key from storage
  get(key: string): any {
    if (this.isSupported) {
      var item = localStorage.getItem(key);

      return item ? JSON.parse(item) : null;
    } else {
      return null;
    }
  },

  // remove value from storage
  remove(key: string) {
    if (this.isSupported) {
      localStorage.removeItem(key);
    }
  },

  // clear storage (remove all items from it)
  clear() {
    if (this.isSupported) {
      localStorage.clear();
    }
  },
};
