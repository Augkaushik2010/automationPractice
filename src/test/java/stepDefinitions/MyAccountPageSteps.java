package stepDefinitions;
import cucumber.TestContext;
import pageObjects.MyAccountPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class MyAccountPageSteps {
	TestContext testContext;
	MyAccountPage myaccountPage;
	public MyAccountPageSteps(TestContext context) {
		 testContext = context;
		 myaccountPage = testContext.getPageObjectManager().getMyAccountPage();
	}
	
	@Then("^user logged in and navigate to my account page$")
	public void user_logged_in_and_navigate_to_my_account_page() {
			if(myaccountPage.comparePageTitle()) {
				//do nothing
			}
			else {
				myaccountPage.logoutfromTheApplication();
				testContext.getWebDriverManager().closeDriver();
				throw new Error("Navigation to My Account page unsucessful.");
			}
	}
	@Then("^user name \"([^\"]*)\" followed by \"([^\"]*)\" displayed in top right corner$")
	public void user_name_followed_by_displayed_in_top_right_corner(String arg1,String arg2) {
		if(myaccountPage.verifyloggedInUserName(arg1, arg2)) {
			//do nothing
		}
		else {
			myaccountPage.logoutfromTheApplication();
			testContext.getWebDriverManager().closeDriver();
			throw new Error("User name not displayed as expected."+arg1+" "+arg2);
		}
	}
	@Then("^user can see \"([^\"]*)\" link in My Account Page$")
	public void user_can_see_link_in_My_Account_Page(String arg1) {
		if(myaccountPage.verifyMywishlistlnkDisplayed(arg1)) {
			// do nothing
		}
		else {
			myaccountPage.logoutfromTheApplication();
			testContext.getWebDriverManager().closeDriver();
			throw new Error(" My Wishlists link is not displayed in My Account page.");
		}
	}
	@When("^user clicks on my wishlists link$")
	public void user_clicks_on_my_wishlists_link() {
		myaccountPage.clkMyWishlistslink();
	}
	@Then("^user can confirm that item is added to the wishlist$")
	public void user_can_confirm_that_item_is_added_to_the_wishlist() {
		if(myaccountPage.VerifyTheQuantityequalsToOne()) {
			//do nothing
		}
		else {
			myaccountPage.logoutfromTheApplication();
			testContext.getWebDriverManager().closeDriver();
			throw new Error("validation failed");
		}
	}
	@Then("^logout from the application$")
	public void logout_from_the_application() {
		myaccountPage.logoutfromTheApplication();
		testContext.getWebDriverManager().closeDriver();
	}
}
