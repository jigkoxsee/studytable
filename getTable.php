<!DOCTYPE html>
<html>
<head>

	<script src='http://161.246.5.237/web/jsregex/jquery-1.10.2.js' type='text/javascript'></script>
	<script src='http://161.246.5.237/web/jsregex/angular.js' type='text/javascript'></script>
	<script >
		var myvar = <?php echo json_encode($_POST["data"]); ?>;
		var arr = jQuery.parseJSON(myvar);
		arr.forEach(function(entry) {
			console.log(entry.sname);
		});
	</script>
	
	
</head>

<body>
	<h1>HELLO</h1>
	<div class="main" ng-app="">
	<input type="text" class="inbox" >
	{{5*8}}
	<h1>{{data.message}}</h1>
	</div>
	





	<script src='http://161.246.5.237/web/jsregex/getTableScript.js' type='text/javascript'></script>
</body>
</html>
