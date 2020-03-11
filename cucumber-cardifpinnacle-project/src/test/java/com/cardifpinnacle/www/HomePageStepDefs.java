package com.cardifpinnacle.www;

import com.cardifpinnacle.www.pages.HomePage;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class HomePageStepDefs {
    @Given("^user is on Homepage$")
    public void userIsOnHomepage() {
        String expectedText = "Cardif Pinnacle logo";
        Assert.assertEquals(new HomePage().verifyHomepage(),expectedText);
    }
    @When("^I click on \"([^\"]*)\"$")
    public void iClickOn(String tab) {
        if (tab.equalsIgnoreCase("About us")) {
            new HomePage().clickOnAboutUsTab();
            String expectedText1 = "ABOUT US";
            Assert.assertEquals(expectedText1, new HomePage().verifyAboutUsTab());

        } else if (tab.equalsIgnoreCase("Products")) {
            new HomePage().clickOnProducts();
            String expectedText2 = "PRODUCTS";
            Assert.assertEquals(expectedText2, new HomePage().verifyProducts());

        } else if (tab.equalsIgnoreCase("Careers")) {
            new HomePage().clickOnCareers();
            String expectedText3 = "JOIN US!";
            Assert.assertEquals(expectedText3, new HomePage().verifyCareers());

        } else if (tab.equalsIgnoreCase("Partnership Solutions")) {
            new HomePage().clickOnPartnership();
            String expectedText4 = "PARTNERSHIP SOLUTIONS";
            Assert.assertEquals(expectedText4, new HomePage().verifyPartnership());

        } else if (tab.equalsIgnoreCase("Customers")) {
            new HomePage().clickOnCustomers();
            String expectedText5 = "WELCOME TO OUR CUSTOMERS' AREA";
            Assert.assertEquals(expectedText5, new HomePage().verifyCustomers());

        } else if (tab.equalsIgnoreCase("Affiliates")) {
            new HomePage().clickOnAffiliates();
            String expectedText6 = "ABOUT HELPUCOVER";
            Assert.assertEquals(expectedText6, new HomePage().verifyAffiiliates());

        } else if (tab.equalsIgnoreCase("News")) {
            new HomePage().clickOnNews();
            String expectedText7 = "NEWS";
            Assert.assertEquals(expectedText7, new HomePage().verifyNews());

        } else if (tab.equalsIgnoreCase("Contact Us")) {
            new HomePage().clickOnContactUs();
            String expectedText9 = "CONTACT U";
            Assert.assertEquals(expectedText9, new HomePage().verifyContactUs());
        }
    }
    @Then("^I should navigate to \"([^\"]*)\" successfully$")
    public void iShouldNavigateToSuccessfully(String tab)  {

    }
}
