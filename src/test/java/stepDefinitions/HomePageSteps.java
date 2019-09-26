package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.TestContext;
import pageObjects.HomePage;


public class HomePageSteps {
	 TestContext testContext;
	 HomePage homePage;
	 public HomePageSteps(TestContext context) {
		 testContext = context;
		 homePage = testContext.getPageObjectManager().getHomePage();
	}
	@Given("^user is on Signon page$")
	public void user_is_on_Signon_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		homePage.navigateTo_HomePage();
		homePage.clkOnSignInlink();
	    //throw new PendingException();
	}
	
}
