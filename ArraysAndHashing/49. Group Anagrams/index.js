// 1. 把每個單字詞的字母排序
// 2. 把排好序的字詞當成 key，將原本字詞放進 value 的陸續陣列
// 3. 最後只需取出每個 key 對應的 value

class Solution {
    groupAnagrams(strs) {
        let map = {};

        for(let s of strs){
            let sortedS = s.split('').sort().join('');
            if(!map[sortedS]) {     // 如果沒有這個 key，要先初始化，不然會是 undefined
                map[sortedS] = []
            }
            map[sortedS].push(s);
        }
        return Object.values(map);
    }
}
// 用 ASCII 編碼
class Solution {
    groupAnagrams(strs) {
        const map = {};
        for (let s of strs){
            let count = new Array(26).fill(0);
            for (let c of s){
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            const key = count.join(',');  // key為字串
            if(!map[key]){
                map[key] = [];
            }
            map[key].push(s);
        }
        return Object.values(map);
    }
}
