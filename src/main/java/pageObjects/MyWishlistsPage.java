package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class MyWishlistsPage {
	WebDriver driver;
	//ConfigFileReader configFileReader;
	
	public MyWishlistsPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
		//configFileReader= new ConfigFileReader();
	}
	@FindBy(how = How.XPATH, using = "//*[text()='Top sellers']")
	private static WebElement listTopSellers;
	@FindBy(how = How.XPATH, using = "//*[@id='best-sellers_block_right']//li[1]//a[@class='product-name']")
	private static WebElement frstItemInTopSellers;
	
	public boolean verifyTopSellersListDisplayed(String arg1) {
		String dispText = listTopSellers.getText();
		if(dispText.equalsIgnoreCase(arg1)) {
			System.out.println("Top sellers list displayed in My Wishlists page.");
			return true;
		}
		else {
			System.out.println("Top sellers list is not displayed in My Wishlists page.");
			return false;
		}
	}
	
	public void clkOnFirstItemInTopSellers() {
		frstItemInTopSellers.click();
	}
	
	
}
