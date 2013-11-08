$( ".main" ).append( "<p>Test</p>" );
$( ".inbox" ).attr('ng-model', 'data.message');
function CtrlTable($scope)
{
	$scope.data={header:"Study Table555"};

}