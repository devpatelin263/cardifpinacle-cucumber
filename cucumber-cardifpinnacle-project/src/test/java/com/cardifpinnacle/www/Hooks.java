package com.cardifpinnacle.www;


import com.cardifpinnacle.www.basepage.BasePage;
import com.cardifpinnacle.www.browserselector.BrowserSelector;
import com.cardifpinnacle.www.loadproperty.LoadProperty;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;


public class Hooks extends BasePage {
    BrowserSelector browserSelector = new BrowserSelector();
    String browser = new LoadProperty().getProperty("browser");

    @Before
    public void setUp(){
        browserSelector.selectBrowser(browser);
    }

    @After
    public void tearDown(Scenario scenario){
        try {
            if (scenario.isFailed()) {
                final byte[] screenshot = ((TakesScreenshot) Hooks.driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot,"image/png");
            }
        } catch (WebDriverException e) {
            e.printStackTrace();
        }
        driver.quit();
    }
}
