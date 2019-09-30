package stepDefinitions;

import cucumber.TestContext;
import pageObjects.SignInPage;
import cucumber.api.java.en.When;

public class SignInPageSteps {
	TestContext testContext;
	SignInPage signinPage;
	
	public SignInPageSteps(TestContext context) {
		 testContext = context;
		 signinPage = testContext.getPageObjectManager().getSignInPage();
		 }
	
	@When("^user enter \"([^\"]*)\" and click on create an account button$")
	public void user_enter_and_click_on_create_an_account_button(String arg1) {
		signinPage.enterEmailAddress(arg1);
		signinPage.clkOnCreateAccountBtn();
	    
	}
	
	
}
