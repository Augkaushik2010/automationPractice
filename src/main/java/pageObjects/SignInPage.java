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
	//ConfigFileReader configFileReader;
	
	public SignInPage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
		//configFileReader= new ConfigFileReader();
	}
	@FindBy(how = How.XPATH, using = "//*[@id='email_create']")
	private static WebElement txtEmailAddress;
	@FindBy(how=How.XPATH,using = "//*[@name='SubmitCreate' and @id='SubmitCreate']")
	private static WebElement btnCreateAccount;
	
	public void enterEmailAddress(String arg1) {
		txtEmailAddress.sendKeys(arg1);
	}
	public void clkOnCreateAccountBtn() {
		btnCreateAccount.click();
	}
	
}
