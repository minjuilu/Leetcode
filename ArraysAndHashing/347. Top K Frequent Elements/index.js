class Solution {
    topKFrequent(nums, k) {
        // 步驟 1: 統計頻率
        let map = {};
        for (let num of nums) {
            map[num] = (map[num] || 0) + 1;
        }
        
        // 步驟 2: 轉換成陣列並按頻率排序
        let sorted = Object.entries(map).sort((a, b) => b[1] - a[1]);
        
        // 步驟 3: 取出前 k 個最常出現的數字
        let result = sorted.slice(0, k).map(item => item[0]);
        
        return result;
    }
}