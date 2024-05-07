package AgriMarketBackend.Entity;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;
import jakarta.persistence.Table;



@Entity
@Table(name = "sellers")
public class Seller {
	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int id;
	private String name;
	private String city;
	private String userid;
	private String pwd;
	private String phone;
	private LocalDateTime createdOn;
	@Lob
	private byte[] certificate;
	private boolean isactive;
		
	public Seller() {
		// TODO Auto-generated constructor stub
		this.createdOn=LocalDateTime.now();
	}
	

	public byte[] getCertificate() {
		return certificate;
	}


	public void setCertificate(byte[] certificate) {
		this.certificate = certificate;
	}


	public boolean isIsactive() {
		return isactive;
	}


	public void setIsactive(boolean isactive) {
		this.isactive = isactive;
	}


	public Seller(int id) {
		this.id = id;
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
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getUserid() {
		return userid;
	}
	public void setUserid(String userid) {
		this.userid = userid;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}

	public LocalDateTime getCreatedOn() {
		return createdOn;
	}
	public void setCreatedOn(LocalDateTime createdOn) {
		this.createdOn = createdOn;
	}

}