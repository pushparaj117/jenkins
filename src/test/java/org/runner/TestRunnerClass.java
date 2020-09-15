package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\resources",
						glue= {"org.stepdef"},plugin = {
								"pretty" , "json:src\\test\\resources\\Report\\cucumber.json",
								"junit:src\\test\\resources\\Report\\cucumber.xml",
								"html:src\\test\\resources\\Report"})

public class TestRunnerClass {
	
	
	
	
}
