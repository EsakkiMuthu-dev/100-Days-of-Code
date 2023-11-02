import java.util.ArrayList;

public class Unions {
/*
     
    Program 3:
    Find the union intersection of two list and also find except (remove even elements from list1 and
    odd elements from list2)
    Input
    List 1: 1,3,4,5,6,8,9
    List 2: 1, 5,8,9,2
    Union: 1, 3,4,5,6,8,9,2
    Intersection: 1,5,8,9
    Except: 1, 3, 5,9,8,2

    Set1 { 1,2 3}
    set2 {3,4,5}
    Union {1,2,3,4,5}
    Intersection {3}


 */
    public static void main(String[] args) {
        ArrayList<Integer> list1 = new ArrayList<>();
        list1.add(1);
        list1.add(3);
        list1.add(4);
        list1.add(5);
        list1.add(6);
        list1.add(8);
        list1.add(9);
        ArrayList<Integer> list2 = new ArrayList<>();
        list2.add(1);
        list2.add(5);
        list2.add(8);
        list2.add(9);
        list2.add(2);

        unionAndIntersection(list1, list2);
        except(list1,list2);
       
    }
    public static void except(ArrayList<Integer> list1,ArrayList<Integer> list2)
    {
        //S1: List1  iterate through -> remove even 
        // S2: List2 iterate through -> remove odd
        ArrayList<Integer> except= new ArrayList<>();
        for(int i=0;i<list1.size();i++)
        {
            if(list1.get(i)%2!=0)
            {
                except.add(list1.get(i));
            }
        }
        for(int i=0;i<list2.size();i++)
        {
            if(list2.get(i)%2==0 &&  !except.contains(list2.get(i)))
            {
                except.add(list2.get(i));
            }
        }
       
        System.out.println(except);
    }

    public static void unionAndIntersection(ArrayList<Integer> list1,ArrayList<Integer> list2){

        ArrayList<Integer> union = new ArrayList<>();
        union.addAll(list1);
        ArrayList<Integer> intersection = new ArrayList<>();
        
        // s1: iterate through list2
        // s2: check wther elem is present on list1
        // s3: if present add to intersection  
        //      if not present add to union

        for(int i=0;i<list2.size();i++)
        {
            if(union.contains(list2.get(i)))
            {
                intersection.add(list2.get(i));
            }else{
                union.add(list2.get(i));
            }
        }
        System.out.println(union);
        System.out.println(intersection);


    }
}
