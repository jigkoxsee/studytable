<!DOCTYPE html>
<html>
<head>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=/windows-874">
	<script src='http://161.246.5.237/web/jsregex/jquery-1.10.2.js' type='text/javascript'></script>
	<script src='http://161.246.5.237/web/jsregex/angular.js' type='text/javascript'></script>
    <!-- Bootstrap -->
    <link href="css/bootstrap.css" rel="stylesheet">
	<script >
		var myvar = <?php echo json_encode($_POST["data"]); ?>;
		var arr = jQuery.parseJSON(myvar);
		/*arr.forEach(function(entry) {
			console.log(entry.sname);
		});*/
	</script>
	
	
</head>

<body class="container">
	<h1>HELLO</h1>
	<div class="main" ng-app="">
		<input type="text" id="inbox" class="form-control" >
		<h1>{{data.message}}</h1>


		<div class="panel panel-default" ng-controller="CtrlTable">
			<div class="panel-heading"><h1>{{data.header}}</h1></div>
			  <div class="panel-body">
			    <p>2 / 2556</p>
			  </div>
			<table class="table table-hover table-bordered" id="studytable">
		        <thead>
		          <tr >
		            <th>Day</th>
		            <th>8.00 - 9.00</th>
		            <th>9.00 - 12.00</th>
		            <th>13.00 - 16.00</th>
		            <th>16.30 - 19.30</th>
		          </tr>
		        </thead>
		        <tbody>
		          <tr>
		            <td>Mon</td>
		            <td>{{subject[0]}}</td>
		            <td>{{subject[1]}}</td>
		            <td>{{subject[2]}}</td>
		            <td>{{subject[3]}}</td>
		          </tr>
		          <tr>
		            <td>Tue</td>
		            <td>{{subject[4]}}</td>
		            <td>{{subject[5]}}</td>
		            <td>{{subject[6]}}</td>
		            <td>{{subject[7]}}</td>
		          </tr>
		          <tr>
		            <td>Wed</td>
		            <td>{{subject[8]}}</td>
		            <td>{{subject[9]}}</td>
		            <td>{{subject[10]}}</td>
		            <td>{{subject[11]}}</td>
		          </tr>
		          <tr>
		            <td>Thu</td>
		            <td>{{subject[12]}}</td>
		            <td>{{subject[13]}}</td>
		            <td>{{subject[14]}}</td>
		            <td>{{subject[15]}}</td>
		          </tr>
		          <tr>
		            <td>Fri</td>
		            <td>{{subject[16]}}</td>
		            <td>{{subject[17]}}</td>
		            <td>{{subject[18]}}</td>
		            <td>{{subject[19]}}</td>
		          </tr>
		          <tr>
		            <td>Sat</td>
		            <td>{{subject[20]}}</td>
		            <td>{{subject[21]}}</td>
		            <td>{{subject[22]}}</td>
		            <td>{{subject[23]}}</td>
		          </tr>
		          <tr>
		            <td>Sun</td>
		            <td>{{subject[24]}}</td>
		            <td>{{subject[25]}}</td>
		            <td>{{subject[26]}}</td>
		            <td>{{subject[27]}}</td>
		          </tr>
		        </tbody>
		      </table>

		</div>
	</div>
	





	<script src='http://161.246.5.237/web/jsregex/getTableScript.js' type='text/javascript'></script>
	<script src="js/bootstrap.js"></script>
</body>
</html>
