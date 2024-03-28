<html>
<head>
            <title>Display Picture</title>
</head>
<body onload=window.focus()>
      <center>
      		<img src="<?echo @$_GET["pic_url"]?>">
      		<br><br>
      		<form>
      			<input type="Button" OnClick="self.close();" value="Close Window">
      		</form>
      </center>
</body>
</head>
</html>