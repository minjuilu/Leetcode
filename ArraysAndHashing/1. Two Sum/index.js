class Solution {
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j]; 
                }
            }
        }
        return [];
    }
}

//Hash Map (One Pass)
class Solution {
    twoSum(nums, target) {
        let map = {}

        for (let i=0; i<nums.length; i++){
            let diff = target - nums[i];
            if(map[diff] !== undefined){
                return [map[diff], i];
            }
            map[nums[i]] = i;
        }
        return [];
    }   
}

class Solution {
    twoSum(nums, target) {
        const prevMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }

            prevMap.set(nums[i], i);
        }

        return [];
    }
}