class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        a=set(sentence)
        if len(a)==26:
            return True
        else:
            return False    