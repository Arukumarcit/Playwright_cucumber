Feature: Pruchase Mobile from demoblaze

Scenario: Add cart to Iphone Mobile
Given Navigate to demoblaze website and login with username 'pavanol' and password 'test@123'
When Search the Samsung mobile model 'Samsung galaxy s6'
Then Add mobile to cart 

Scenario: Add cart to Andriod Mobile
Given Navigate to demoblaze website and login with username 'pavanol' and password 'test@123'
When Search the Samsung mobile model 'Nexus 6'
Then Add mobile to cart 
@test
Scenario: Add cart to Microsoft Mobile
Given Navigate to demoblaze website and login with username '' and password 'test@123'
When Search the Samsung mobile model 'Microsoft'
Then Add mobile to cart 


