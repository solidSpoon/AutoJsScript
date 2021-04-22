auto.waitFor();

app.launchApp("钉钉");
//sleep(1000);

id("home_bottom_tab_button_contact").findOne().click();
sleep(100);
click("部门群");
sleep(1500);

click(158, 1702);
sleep(1500);
click(601,1160);
sleep(1000);
setText("德惠市 36.6");
sleep(100);
back();
    