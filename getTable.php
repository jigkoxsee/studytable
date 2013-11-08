<!DOCTYPE html>
<html>
<head>

	<script src='http://161.246.5.237/web/jsregex/jquery-1.10.2.js' type='text/javascript'></script>
	<script src='http://161.246.5.237/web/jsregex/angular.js' type='text/javascript'></script>
	<script>
		function getQueryVariable(variable)
		{
			var query = window.location.search.substring(1);
			var vars = query.split("&");
			for (var i=0;i<vars.length;i++) {
				var pair = vars[i].split("=");
				if(pair[0] == variable){return pair[1];}
			}
			return(false);
		}
	</script>

</head>
<body>
	<h1>HELLO</h1>
	<script>
		console.log(getQueryVariable("id"));
		console.log(getQueryVariable("<?php echo 'image';?>"));
		
	</script>

</body>
</html>
