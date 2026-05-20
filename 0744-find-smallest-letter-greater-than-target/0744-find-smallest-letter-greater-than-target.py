class Solution(object):
    def nextGreatestLetter(self, letters, target):
        """
        :type letters: List[str]
        :type target: str
        :rtype: str
        """
        for x in letters:
            if target<x:
                return x
        return letters[0]
            
        