const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

const shuffle = (arr, numSwaps) => {
    for (let i = 0; i < numSwaps; i++) {
        const idx1 = Math.floor(Math.random() * arr.length);
        const idx2 = Math.floor(Math.random() * arr.length);
        swap(arr, idx1, idx2);
    }
};

const bubble_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

const selection_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(arr, i, minIndex);
        }
    }
};

const quick_sort = (arr, low, high) => {
    if (low < high) {
        const pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
};

const particionamento = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};
