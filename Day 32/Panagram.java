class Solution {
    public boolean checkIfPangram(String sentence) {
        int n =sentence.length();
        if(n<26) return false;
        int[] letters = new int[26];

        for(int i=0;i<n;i++) letters[sentence.charAt(i)%97]++;

        for(int i=0;i<26;i++)
        {
            if(letters[i] == 0) return false;
        }
   
        return true;
    }

}
