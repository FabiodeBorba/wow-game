package wow.controller.beans;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.RequestScoped;

@ManagedBean
@RequestScoped
public class LoginBean {


	private String name;

	public String sessionName(){
		return "start?faces-redirect=true";
	}
	
	public String getName() {
		
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}

}
