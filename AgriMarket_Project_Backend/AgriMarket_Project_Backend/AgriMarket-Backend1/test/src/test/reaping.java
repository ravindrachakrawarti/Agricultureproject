package test;

import java.util.*;
import java.util.stream.Collectors;

public class reaping {
	
	
	

	
	
	
	public static void main(String[] args) {
		
		
//		"ravindra".chars().forEach(e->System.out.println((char)e));
//		
//	"ravin".chars().mapToObj(e->Character.valueOf((char)e)).findFirst()
//.ifPresent(e->System.out.println(e));
	
     "ravindra".chars().mapToObj(e->((char)e)).collect(Collectors.toSet()).forEach(e->System.out.println(e));
	
	
     
     
     List<Integer> lst=Arrays.asList(3,5,8,9,4,6,7);
     
     Set<Integer> obj=lst.stream().collect(Collectors.toSet());
     
     List<Integer> objj=lst.stream().distinct().collect(Collectors.toList());
     
     objj.forEach(e->System.out.print(e+" "));
     
     
	obj.forEach(e->System.out.println(e));

	List<Integer> st1=lst.stream().sorted().collect(Collectors.toList());
	
	  st1.forEach(e->System.out.println(e));
	
	 OptionalDouble ave= lst.stream().mapToInt(e->e*e).filter(e->e>50).average();
	  if(ave.isPresent())
		  System.out.println(ave.getAsDouble());
	   
		List<String> lst1=Arrays.asList("ravt","mohan","nanu");
		List<String> st2=lst1.stream().sorted().collect(Collectors.toList());
		st2.forEach(e->System.out.println(e));
	}

}
