fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, iteratee) {
      for (const key in collection) {
        iteratee(collection[key], key, collection);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      let mappedArray = [];
      for (const key in collection) {
        mappedArray.push(iteratee(collection[key], key, collection));
      }
      return mappedArray;
    },

    reduce: function(collection, iteratee, acc) {
      let reducedValue = acc;
      for (const key in collection) {
        reducedValue = iteratee(reducedValue, collection[key], collection);
      }
      return reducedValue;
    },

    find: function(collection, predicate) {
      for (const key in collection) {
        if (predicate(collection[key])) {
          return collection[key];
        }
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      let filteredCollection = [];
      for (const key in collection) {
        if (predicate(collection[key])) {
          filteredCollection.push(collection[key]);
        }
      }
      return filteredCollection;
    },

    size: function(collection) {
      let size = 0;
      for (const key in collection) {
        ++size;
      }
      return size;
    },

    first: function(array, n) {
      if (n) {
        let foundItems = [];
        for (let i = 0; i < n; i += 1) {
          foundItems.push(array[i]);
        }
        return foundItems;
      } else {
        return array[0];
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(-n);
      } else {
        return array[array.length - 1];
      }
    },

    compact: function(array) {
      let compactCollection = [];
      for (const key in array) {
        if (array[key]) {
          compactCollection.push(array[key]);
        }
      }
      return compactCollection;
    },

    sortBy: function(array, iteratee) {
      arrayCopy = [...array];
      arrayCopy.sort(function(a, b) {
        if (typeof iteratee(a) === "string") {
          var x = iteratee(a).toLowerCase();
          var y = iteratee(b).toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        } else {
          return iteratee(a) - iteratee(b);
        }
      });
      return arrayCopy;
    },

    flatten: function(nestedArray, shallow) {
      let flattenedArray = [];
      function recursiveFlatten(array) {
        for (const index in array) {
          let item = array[index];
          if (Array.isArray(item)) {
            if (shallow) {
              for (const indexTwo in item) {
                flattenedArray.push(item[indexTwo]);
              }
            } else {
              recursiveFlatten(item);
            }
          } else {
            flattenedArray.push(item);
          }
        }
      }
      recursiveFlatten(nestedArray);
      return flattenedArray;
    },

    keys: function(object) {
      keyValues = [];
      for (const key in object) {
        keyValues.push(key);
      }
      return keyValues;
    },

    values: function(object) {
      values = [];
      for (const key in object) {
        values.push(object[key]);
      }
      return values;
    },

    uniq: function(array, isSorted, iteratee) {
      let transformation = function(item) {
        return item;
      };
      if (iteratee) {
        transformation = iteratee;
      }
      uniqArray = [];
      for (const index in array) {
        let item = transformation(array[index]);
        let addToUniqueArray = true;
        for (let i = 0; i < uniqArray.length; i += 1) {
          if (item === transformation(uniqArray[i])) {
            addToUniqueArray = false;
          }
        }
        if (addToUniqueArray) {
          uniqArray.push(item);
        }
      }
      return uniqArray;
    },

    functions: function(object) {
      functionNames = [];
      for (const key in object) {
        if (typeof object[key] === "function") {
          functionNames.push(object[key].name);
        }
      }
      return functionNames;
    }
  };
})();

//debugger;
