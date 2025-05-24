class Solution(object):
    def findWordsContaining(self, words, x):
        list1=[]
        for i in range(len(words)) :
            a=x in words[i]
            if a :
                list1.append(i)

        return list1

        