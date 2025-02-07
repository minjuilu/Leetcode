class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }

        let sortedS = s.toLowerCase().split('').sort((a,b)=> a.localeCompare(b));
        let sortedT = t.toLowerCase().split('').sort((a,b)=> a.localeCompare(b));

        for(let i=0; i<s.length; i++){
            if (sortedS[i] !== sortedT[i]){
                return false
            }
        }
        return true
    }
}

//
class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length){
            return false
        }
        return s.split('').sort().join('') === t.split('').sort().join('')
    }
}

//
class Solution {
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        
        let count = new Array(26).fill(0);
        
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 97]++;
            count[t.charCodeAt(i) - 97]--;
        }
        
        return count.every(val => val === 0);
    }
}
