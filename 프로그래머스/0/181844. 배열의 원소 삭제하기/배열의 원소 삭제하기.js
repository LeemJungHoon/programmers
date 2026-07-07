function solution(arr, delete_list) {
    return arr.filter((item,idx) => !delete_list.includes(item));
}