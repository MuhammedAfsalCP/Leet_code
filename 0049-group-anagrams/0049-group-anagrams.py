class Solution(object):
    def groupAnagrams(self, strs):
        dict1=defaultdict(list)
        for x in strs:
            sort="".join(sorted(x))
            dict1[sort].append(x)
        return list(dict1.values())
        