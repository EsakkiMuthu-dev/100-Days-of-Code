import collections
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        output = collections.defaultdict(list)
        for i in strs:
            output[tuple(sorted(i))].append(i)

        return output.values()
        
        # d={}
        # for i in strs:
        #     # tuple(sorted(self.items()))
        #     try:
        #         d[tuple(sorted(collections.Counter(i).items()))].append(i)
        #     except:
        #         d[tuple(sorted(collections.Counter(i).items()))]=[i]

        # return d.values()
