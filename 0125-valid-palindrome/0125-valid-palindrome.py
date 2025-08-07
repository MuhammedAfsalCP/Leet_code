class Solution(object):
    def isPalindrome(self, s):
        string=""
        for x in s:
            if  x.isalnum():
                string+=x.lower()
        print(string)

        return string==string[::-1]
        