package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
//import dataProvider.ConfigFileReader;
import managers.FileReaderManager;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
public class HomePage {
	WebDriver driver;
	//ConfigFileReader configFileReader;
	
	public HomePage(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
		//configFileReader= new ConfigFileReader();
	}
	public void navigateTo_HomePage() {
		driver.get(FileReaderManager.getInstance().getConfigReader().getApplicationUrl());
	}
	@FindBy(how=How.XPATH,using = "//*[contains(text(),'Sign in')]")
	private static WebElement lnkSignIn;
	
	public void clkOnSignInlink() {
		lnkSignIn.click();
	}
	
}
