package test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.OptionalInt;
import java.util.Set;
import java.util.stream.Collectors;

import test.emp;

    public class collect {
	
	public static void main(String[] args) {
		
	
	
	ArrayList<emp> empList = new ArrayList<emp>();
	
	empList.add(new emp("A",60,"M",1,45000));
	empList.add(new emp("Ball",50,"M",2,55000));
	empList.add(new emp("C",40,"F",3,65000));
	empList.add(new emp("D",50,"F",4,65000));
	
	
Set<Double> duplicate=	empList.stream().map(e->e.getSalary()).collect(Collectors.toSet());

System.out.println(duplicate);
	
	
    List<String> ste=empList.stream().filter(e->e.age>40).map(emp::getName).collect(Collectors.toList());
	System.out.println(ste);
	
	
    Long count=empList.stream().filter(e->e.salary>50000).count();
	
    System.out.println(count);
	
 
        List<emp> shorte= empList.stream().sorted(Comparator.comparing(emp::getAge)).collect(Collectors.toList());
   
    shorte.forEach(e->System.out.println(e.getAge()));
        
        
    OptionalInt max = empList.stream().
                      mapToInt(emp::getAge).max();

      if(max.isPresent())
    	
        System.out.println("Maximum age of Employee: "+max.getAsInt());
    
    
    
      
      List<String> abc=empList.stream().map(emp::getName).collect(Collectors.toList());
     
      System.out.println(abc);
    for(String s:abc)
    {
    	if(s=="Ball")
    	{
    		System.out.println("this is yes"+s);
    	}
    }
      
      String strjoin= String.join(",", abc);
      
      System.out.println("join string   "+strjoin);
      
    
	   
	List<String> name=empList.stream().map(e->e.getName()+"").filter(e->e.startsWith("Ball")).collect(Collectors.toList());
    name.forEach(e->System.out.println(e));
    
	Map<String, Long> collect=empList.stream().collect(Collectors.groupingBy(emp::getGender,Collectors.counting()));
    System.out.println(collect);

    Map<String, Double> collect1=empList.stream().collect(Collectors.groupingBy(emp::getGender,Collectors.averagingDouble(emp::getSalary)));
    System.out.println(collect1);

    Map<String, Long> collect3=empList.stream().collect(Collectors.groupingBy(emp::getName,Collectors.counting()));
    System.out.println(collect3);

    Map<String,List<String>> collect5 = empList.stream().collect(Collectors.groupingBy(emp::getGender,Collectors.mapping(emp::getName, Collectors.toList())));

    collect5.forEach((gender, nameList) ->
    System.out.println( gender+ "\t" + nameList));
   
    List<emp> collect2= empList.stream().sorted(Comparator.comparing(emp::getAge)).collect(Collectors.toList());

   
    collect2.forEach(ele->System.out.println("age "+ele.getAge()+"  name"+ele.getName()));
   
   
   
	
	
	}
}
