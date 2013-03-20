var win=Titanium.UI.currentWindow;
var username = Titanium.UI.createTextField({  
    color:'#336699',  
    top:10,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Username',  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});
win.add(username);
var password = Titanium.UI.createTextField({  
    color:'#336699',  
    top:60,  
    left:10,  
    width:300,  
    height:40,  
    hintText:'Password',  
    passwordMask:true,  
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,  
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,  
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED  
});  
win.add(password); 
var loginBtn = Titanium.UI.createButton({  
    title:'Login',  
    top:110,  
    width:90,  
    height:35,  
    borderRadius:1,  
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:'14'}  
});  
win.add(loginBtn); 
    var loginReq = Titanium.Network.createHTTPClient();  

      loginReq.onload = function()  
     {  
    var json = this.responseData;  
    var response = JSON.parse(json);  
    if (response.logged == true)  
    {  
    	
        Ti.API.info("Welcome " + response.name + ". Your email is: ");  
    }  
    else  
    {   
        Ti.API.info(response.message);  
    }  
};     
  
  
     loginBtn.addEventListener('click',function(e)  
    {  
        if (username.value != '' && password.value != '')  
        {  
            loginReq.open("POST","http://nxgninnovations.com/playground/post_auth.php");  
            var params = {  
                username : username.value,  
                password : password.value  
            };  
            loginReq.send(params);  
        }  
        else  
        {  
            alert("Username/Password are required");  
        }  
    });  
   
  