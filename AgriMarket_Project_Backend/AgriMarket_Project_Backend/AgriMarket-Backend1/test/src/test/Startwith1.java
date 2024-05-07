package test;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

public class Startwith1 {
	
	public static void main(String[] args) {
		
		List<String> str=Arrays.asList("ravi","mohan","rohan","ravi");
		List<String> intt=str.stream().map(e->e+"").filter(e->e.startsWith("r")).collect(Collectors.toList());
		System.out.println(intt);
		
		
	}

}
