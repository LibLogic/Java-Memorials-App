<script>
  window.fbAsyncInit = function() {
    FB.init({
      appId            : 'your-app-id',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v8.0'
    });
  };
</script>
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>


<html>
 <head>
  <script>
   function myFunction() {
   var x = document.URL;
   document.getElementById("jinu").src = 'https://www.facebook.com/plugins/share_button.php?href='+x+'&layout=button_count&size=large&mobile_iframe=true&width=83&height=28&appId';
  }
  </script>
</head>
 <body onload="myFunction()">
 <iframe id="jinu" src="" width="83" height="28" style="border:none;overflow:hidden" scrolling="no"  frameborder="0" allowTransparency="true"></iframe>
 </body>
</html>