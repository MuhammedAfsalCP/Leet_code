class Solution(object):
    def strStr(self, haystack, needle):
        if needle in haystack:
            index = haystack.index(needle)
            return index
        else:
            return -1
        