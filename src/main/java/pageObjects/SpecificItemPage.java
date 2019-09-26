package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class SpecificItemPage {
	WebDriver driver;
	//ConfigFileReader configFileReader;
	
	public SpecificItemPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
		//configFileReader= new ConfigFileReader();
	}
	@FindBy(how = How.XPATH, using = "//span[text()='Add to cart']//following::a[@id='wishlist_button']")
	private static WebElement wishlstButton;
	@FindBy(how = How.XPATH, using = "//*[text()='Added to your wishlist.']")
	private static WebElement addedToYourWishlist;
	@FindBy(how = How.XPATH, using = "//*[text()='Added to your wishlist.']//following::a[1]")
	private static WebElement closeBtn;
	@FindBy(how = How.XPATH, using = "//*[@class='account']")
	private static WebElement myAccount;
	
	public boolean verifyWishlistbuttonDisplayedUnderAddToCartBtn() {
		if(wishlstButton.isDisplayed()) {
			System.out.println("Add To Wishlist displayed under Add To Cart button.");
			return true;
		}
		else {
			System.out.println("Add To Wishlist is not displayed under Add To Cart button.");
			return false;
		}
	}
	public void clkOnAddToWishlistButton() {
		wishlstButton.click();
	}
	public boolean verifyTheMsgAfterClkOnWishlistBtn(String arg1) {
		String dispText = addedToYourWishlist.getText();
		if(dispText.equalsIgnoreCase(arg1)) {
			System.out.println("Expected message displayed: "+dispText);
			return true;
		}
		else {
			System.out.println("Expected Text: "+arg1 +" but actual text displayed : "+dispText);
			return false;
		}
	}
	public void closeTheDialogOpened() {
		closeBtn.click();
	}
	public void navigateToMyAccountPg() {
		myAccount.click();
	}
	
}
