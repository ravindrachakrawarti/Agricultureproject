package test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Stream1{

	public static void main(String[] args) {
		
		List<String> list = new ArrayList<>();
		
		list.add("1");
		list.add("2");
		list.add("3");
		list.add("4");
		Stream<String> stream = list.stream();
		
		list.stream().forEach(e->System.out.print(e));
		
		
		int arr[]= {1,2,3,1};
		
		List<Integer> pri=Arrays.stream(arr).boxed().collect(Collectors.toList());
		
		System.out.println(pri);
		
		Set<Integer> set=new HashSet(pri);
		
		if(set.size()==pri.size())
		{
			
				
				System.out.println("false");
			
		}else {
		System.out.println("true");
		}
		
		
	}
}
