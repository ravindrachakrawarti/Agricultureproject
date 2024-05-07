package test;

public class Product {

	int id;
	String project;
	int Price;
	public Product(int id, String project, int price) {
		super();
		this.id = id;
		this.project = project;
		Price = price;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getProject() {
		return project;
	}
	public void setProject(String project) {
		this.project = project;
	}
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		Price = price;
	}
	
}
