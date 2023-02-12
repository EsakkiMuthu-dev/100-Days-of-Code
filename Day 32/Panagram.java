class Solution {
    public boolean checkIfPangram(String sentence) {
//         int n =sentence.length();
//         if(n<26) return false;
//         int[] letters = new int[26];

//         for(int i=0;i<n;i++) letters[sentence.charAt(i)%97]++;

//         for(int i=0;i<26;i++)
//         {
//             if(letters[i] == 0) return false;
//         }
   
//         return true;
        
               // We iterate over 'sentence' for 26 times, one for each letter 'currChar'.
        for (int i = 0; i < 26; ++i) {
            char currChar = (char)('a' + i);

            // If 'sentence' doesn't contain currChar, it is not a pangram.
            if (sentence.indexOf(currChar) == -1)
                return false;
        }
        
        // If we manage to find all 26 letters, it is a pangram.
        return true;
    }
}

    }

}
