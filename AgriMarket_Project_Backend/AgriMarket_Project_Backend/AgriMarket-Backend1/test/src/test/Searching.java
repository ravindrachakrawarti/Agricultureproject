package test;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

class Project {

    int id;
    String name;
    String project;
    int price;
    
	public Project(int id, String name, String project, int price) {
		super();
		this.id = id;
		this.name = name;
		this.project = project;
		this.price = price;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getProject() {
		return project;
	}

	public void setProject(String project) {
		this.project = project;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
 
    
 }

public class Searching {

	 public static void main(String[] args) {
	        
         List<Project> list=new ArrayList<Project>();

         list.add(new Project(1,"ravin","hp",20000));
         list.add(new Project(2,"ravindra","bpl",40000));
         list.add(new Project(3,"ravi","dell",80000));
         list.add(new Project(4,"rav","apple",70000));
         
     Map<String,Long> listp= list.stream().collect(Collectors.groupingBy(Project::getName,Collectors.counting()));
     
     
     System.out.println(listp);
  
     
     list.stream().filter(Product -> Product.getPrice() > 30000 && Product.getPrice()<80000)
     .forEach(Product -> System.out.println(Product.getId()+" "+Product.getName()));
     
     
     
     
    Project pro= list.stream().max((p1,p2)->p1.getPrice()<p2.getPrice() ? 1 : -1).get();
     System.out.println(pro.getPrice());
     
     
     
     
     
     
     
     
     
     List<String> list2=Arrays.asList("JAVA", "J2EE", "Spring", "Hibernate");
     list2.stream().forEach(e->System.out.print(e+" "));
     
     
     
     
     
     List<String> lines = Arrays.asList("java", "c", "python");

     List<String> result = lines.stream()       // convert list to stream
             .filter(e->e!="c") // we dont like c
             .collect(Collectors.toList());     // collect the output and convert streams to a List

     result.forEach(System.out::println); 
     
     
     

     List<Integer> line = Arrays.asList(1,2,3,4,5);
     
     line.stream().map(e->e*e).forEach(System.out::println);
     
     List<Integer> lint= line.stream().map(e->e*2).collect(Collectors.toList());
     lint.forEach(e->System.out.println(e));
     
     
     
     
     List<Integer> evens = Arrays.asList(2, 4, 6);
     List<Integer> odds = Arrays.asList(3, 5, 7);
     List<Integer> primes = Arrays.asList(2, 3, 5, 7, 11);
     
     List<Integer> flatmap=Stream.of(evens,odds,primes).flatMap(e->e.stream()).collect(Collectors.toList());
     
     flatmap.forEach(e->System.out.println(e));
     
    }
	 
	
}
