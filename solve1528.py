class Solution:
    def restoreString(self, s: str, indices: List[int]) -> str:
        a=dict(zip(indices,s))
        sorted_by_keys = dict(sorted(a.items()))
        str=""
        for x,y in sorted_by_keys.items():
            str+=y
        return str    
    