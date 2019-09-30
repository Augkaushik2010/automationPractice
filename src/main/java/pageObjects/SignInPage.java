package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
//import dataProvider.ConfigFileReader;
//import managers.FileReaderManager;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class SignInPage {
	WebDriver driver;
	
	public SignInPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	//Sign in page - Email address field when creating new account
	@FindBy(how = How.XPATH, using = "//*[@id='email_create']")
	private static WebElement txtEmailAddress;
	//Sign in page - create account button field when creating new account
	@FindBy(how=How.XPATH,using = "//*[@name='SubmitCreate' and @id='SubmitCreate']")
	private static WebElement btnCreateAccount;
	//Sign in page - if error displays after entering the same Email address field
	@FindBy(how = How.XPATH, using = "//ol[1]//li[1]")
	private static WebElement errDescription;
	
	//The below method enters four unique characters as prefix to email address sent from feature file
	public void enterEmailAddress(String arg1) {
		String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"0123456789";
		StringBuilder sb = new StringBuilder(4);
		for (int i = 0; i < 4; i++) { 
            int index = (int)(AlphaNumericString.length()* Math.random()); 
            sb.append(AlphaNumericString.charAt(index)); 
        } 
		String prefixAdd = sb.toString();
		txtEmailAddress.sendKeys(prefixAdd+arg1);
	}
	
	//The below method clicks on Create Account button after entering email address
	public void clkOnCreateAccountBtn() {
		btnCreateAccount.click();
	}
	
}
