class Solution {
    isPalindrome(s) {
        s = s.replace(/[^a-zA-Z0-9]/g,'').toLocaleLowerCase();
        return s === s.split('').reverse().join('')
    }
}

//two pointers
class Solution {
    isPalindrome(s) {
        let left = 0, right = s.length - 1;

        while (left < right) {
            if (!/^[a-zA-Z0-9]$/.test(s[left])) {
                left++;
            } else if (!/^[a-zA-Z0-9]$/.test(s[right])) {
                right--;
            } else {
                if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                    return false;
                }
                left++;
                right--;
            }
        }

        return true;
    }
}

