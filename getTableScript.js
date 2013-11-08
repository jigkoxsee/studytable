$( "#inbox" ).attr('ng-model', 'data.message');
$( "td" ).attr('align','center');

function CtrlTable($scope)
{
	week = new Array(28);
	arr.forEach(function(entry) {
		//check day
		tmpDay="0";
		switch(entry.sday)
		{
		case "mon":
			tmpDay="0";
			break;

		case "tue":
			tmpDay="4";
			break;

		case "wed":
			tmpDay="8";
			break;

		case "thu":
			tmpDay="12";
			break;

		case "fri":
			tmpDay="16";
			break;

		case "sat":
			tmpDay="20";
			break;
		case "sun":
			tmpDay="24";
			break;

		default:
			tmpDay="24";
			console.log("Day Error : "+entry.sday+" @ "+entry.sname);
		}
		
		//checktime
		patt1 = /[0-9]/gi;
        atxt=entry.studytime;
        console.log(entry.studytime);
        patt1.test(atxt);
        na=patt1.lastIndex;
        atime=atxt.substring(na-1,na+1);

		noInday=0;
        switch(atime)
        {
        case "08":
        	noInday="0";
        	break;

        case "09":
        	noInday="1";
        	break;

        case "13":
        	noInday="2";
        	break;

        case "16":
        	noInday="3";
        	break;
        default:
        	console.log("time Error : "+atime+" @ "+entry.sname);
        }

        week[parseInt(tmpDay)+parseInt(noInday)]=entry.sname+"(Sec"+entry.section+")\r\n"+entry.build+":"+entry.room;
	});
	$scope.data={header:"Study Table"};
	$scope.subject=week;
}