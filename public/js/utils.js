export function sumBy(list, selector) {                       // list: array generic; selector: funcție ce întoarce un număr
  return list.reduce((acc, item) => acc + selector(item), 0); // reduce acumulează suma valorilor extrase de selector
}

export function toDictBy(list, keySelector) {                 // keySelector extrage cheia unică pentru fiecare element
  return list.reduce((dict, item) => {                       // dict: obiect-acumulator
    dict[keySelector(item)] = item;                          // setează elementul sub cheia calculată
    return dict;                                             // întoarce acumulatorul pentru pasul următor
  }, {});                                                    // pornește de la obiect gol
}
