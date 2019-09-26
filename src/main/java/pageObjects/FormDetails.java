package pageObjects;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

public class FormDetails {
	WebDriver driver;
	
	public FormDetails(WebDriver driver){
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Title')]//following::input[1]")
	private static WebElement rbGener1;
	@FindBy(how = How.XPATH, using = "//*[contains(text(),'Title')]//following::input[2]")
	private static WebElement rbGener2;
	@FindBy(how=How.XPATH,using = "//*[@id='customer_firstname']")
	private static WebElement txtFirstName;
	@FindBy(how=How.XPATH,using = "//*[@id='customer_lastname']")
	private static WebElement txtLastName;
	@FindBy(how = How.XPATH, using = "//*[@id='passwd']")
	private static WebElement txtPassword;
	@FindBy(how = How.XPATH, using = "//*[@id='address1']")
	private static WebElement txtAddress;
	@FindBy(how = How.XPATH, using = "//*[@id='city']")
	private static WebElement txtCity;
	@FindBy(how = How.XPATH, using = "//*[@id='id_state']")
	private static WebElement listState;
	@FindBy(how = How.XPATH, using = "//*[@id='postcode']")
	private static WebElement txtPostCode;
	@FindBy(how = How.XPATH, using = "//*[@id='id_country']")
	private static WebElement listCountry;
	@FindBy(how = How.XPATH, using = "//*[@id='phone_mobile']")
	private static WebElement txtMobileNumber;
	@FindBy(how = How.XPATH, using = "//*[@id='alias']")
	private static WebElement txtAlias;
	@FindBy(how = How.XPATH, using = "//span[text()='Register']")
	private static WebElement btnRegister;
	
	public void selectRBtnasPerInput(String arg1) {
		String title1 = "mr";
		String title2 = "mrs";
		if(title1.equalsIgnoreCase(arg1)) {
			rbGener1.click();
		}
		else if(title2.equalsIgnoreCase(arg1)) {
			rbGener2.click();
		}
		else {
			System.out.println("not a valid input"+arg1);
			//assert "krishna" != null:"krishna";
			//throw new Error("validation failed");	
		}
			
	}
	
	public void enterFirstName(String arg1) {
		txtFirstName.sendKeys(arg1);
	}
	public void enterSurName(String arg1) {
		txtLastName.sendKeys(arg1);
	}
	public void enterPassword(String arg1) {
		txtPassword.sendKeys(arg1);
	}
	public void enterAddressline1(String arg1) {
		txtAddress.sendKeys(arg1);
	}
	public void enterCity(String arg1) {
		txtCity.sendKeys(arg1);
	}
	public void selectState(String arg1) {
		listState.click();
		 Select dropdownState = new Select(listState);
		 dropdownState.selectByVisibleText(arg1);
	}
	public void enterPostalCode(String arg1) {
		txtPostCode.sendKeys(arg1);
	}
	public void selectCountry(String arg1) {
		listCountry.click();
		 Select dropdownCountry = new Select(listCountry);
		 dropdownCountry.selectByVisibleText(arg1);
	}
	public void enterMobileNum(String arg1) {
		txtMobileNumber.sendKeys(arg1);
	}
	public void enterAliasName(String arg1) {
		txtAlias.clear();
		txtAlias.sendKeys(arg1);
	}
	public void clkOnRegistration() {
		btnRegister.click();
	}
	
}
