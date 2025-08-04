class Solution(object):
    def isValid(self, s):
        stack=[]
        mapping = {')': '(', '}': '{', ']': '['}
        for x in s :
            if x in mapping.values():
                stack.append(x)
            elif x in mapping:
                if not  stack or stack[-1]!=mapping[x]:
                    return False
                stack.pop()
            else :
                return False
        return not  stack
        