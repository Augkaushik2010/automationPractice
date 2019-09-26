package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

//import gherkin.formatter.Reporter;

import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
//import org.openqa.selenium.support.ui.Select;

public class MyAccountPage {
	WebDriver driver;
	//ConfigFileReader configFileReader;
	
	public MyAccountPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
		//configFileReader= new ConfigFileReader();
	}
	
	public boolean comparePageTitle() {
		String pgTitleDisplayed = driver.getTitle();
		if(pgTitleDisplayed.contains("My account - My Store")) {
			System.out.println("user logged in successfully and the title of the page is: "+pgTitleDisplayed);
			return true;
		}
		else {
			System.out.println("user not logged in successfully and the title of the page is: "+pgTitleDisplayed);
			return false;
		}
	}
	@FindBy(how = How.XPATH, using = "//*[@class='header_user_info'][1]")
	private static WebElement loggedInUserName;
	@FindBy(how = How.XPATH, using = "//span[text()='My wishlists']")
	private static WebElement lnkmyWishlists;
	@FindBy(how = How.XPATH, using = "//table[@class='table table-bordered']/tbody/tr[1]/td[2]")
	private static WebElement qntyInWishlistsTable;
	@FindBy(how = How.XPATH, using = "//*[@title='Log me out']")
	private static WebElement signoutbtn;
	
	public boolean verifyloggedInUserName(String arg1, String arg2) {
		String dispUserName = loggedInUserName.getText();
		String inputUserName = arg1+" "+arg2;
		System.out.println(inputUserName);
		System.out.println(dispUserName);
		if(inputUserName.equalsIgnoreCase(dispUserName)) {
			System.out.println("user name displayed after logged in: "+dispUserName);
			return true;
		}
		else {
			System.out.println("user name not displayed as expected after logged in: "+dispUserName);
			return false;
		}
	}
	
	public boolean verifyMywishlistlnkDisplayed(String arg1) {
		String linkTextDisplayed = lnkmyWishlists.getText();
		if(linkTextDisplayed.equalsIgnoreCase(arg1)) {
			System.out.println("my wishlists link displayed.");
			return true;
		}
		else {
			System.out.println("my wishlists didn't displayed.");
			return false;
		}
	}
	public void clkMyWishlistslink() {
		lnkmyWishlists.click();
	}
	
	/*public void VerifyTheQuantityequalsToOne() {
		String quantitydisplayed = qntyInWishlistsTable.getText();
		int quntydisp = Integer.parseInt(quantitydisplayed);
		
		if(quntydisp == 2) {
			System.out.println("Item added successfully to the wishlist");
		}
		else {
			System.out.println("Item is not added successfully to the wishlist");
			driver.close();
			throw new Error("validation failed");
		}
		
		
	}*/
	public boolean VerifyTheQuantityequalsToOne() {
		String quantitydisplayed = qntyInWishlistsTable.getText();
		int quntydisp = Integer.parseInt(quantitydisplayed);
		if(quntydisp == 1) {
			System.out.println("Item added successfully to the wishlist");
			return true;
		}
		else {
			System.out.println("Item is not added successfully to the wishlist");
			//driver.close();
			//throw new Error("validation failed");
			return false;
		}
	}
	
	public void logoutfromTheApplication() {
		signoutbtn.click();
	}
	
}
