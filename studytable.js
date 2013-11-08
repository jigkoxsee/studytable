function getTB(){
        //thai day formation
        function thDay(d){
            if(d=="จ"){
                return 1;
            }
            else if(d=="อ"){
                return 2;
            }
            else if(d=="พ"){
                return 3;
            }
            else if(d=="พฤ"){
                return 4;
            }
            else if(d=="ศ"){
                return 5;
            }
            else if(d=="ส"){
                return 6;
            }
            else{
                return 7;
            }
        }

        //sorting day function
        function compare(a,b) {
            patt1 = /[0-9]/gi;
            atxt=a.studytime.innerHTML;
            patt1.test(atxt);
            na=patt1.lastIndex;
            atime=atxt.substring(na-1,na+1);

            patt2 = /[0-9]/gi;
            btxt=b.studytime.innerHTML;
            patt2.test(btxt);
            nb=patt2.lastIndex;
            btime=btxt.substring(nb-1,nb+1);

            aday=atxt.substring(0,na-3);
            bday=btxt.substring(0,nb-3);

            if (thDay(aday) < thDay(bday))
                return -1;
            if (thDay(aday) > thDay(bday))
                return 1;
            return 0;
        }


        //sorting time in day function
        function compareTime(a,b) {
            patt1 = /[0-9]/gi;
            atxt=a.studytime.innerHTML;
            patt1.test(atxt);
            na=patt1.lastIndex;
            atime=atxt.substring(na-1,na+1);

            patt2 = /[0-9]/gi;
            btxt=b.studytime.innerHTML;
            patt2.test(btxt);
            nb=patt2.lastIndex;
            btime=btxt.substring(nb-1,nb+1);

           if (atime < btime)
                return -1;
            if (atime > btime)
                return 1;
            return 0;
        }





        // get table
        var subject_row = new Array();
        var subject_all    = new Array();
        var subject    = new Object();
        var number=9;

        //-----------
        mybody      = document.getElementsByTagName("body")[0];
        mytable     = mybody.getElementsByTagName("table")[0];
        mytablebody = mytable.getElementsByTagName("tbody")[0];

        for (var i=0;i<20;i++)
        { 
            subject_row[i]  = mytablebody.getElementsByTagName("tr")[19+(i*2)];
            //console.log(subject_row[i]);
            if (!subject_row[i])
            {
                number=i;
                break;
            }
            subject = new Object();
            subject.no = subject_row[i].getElementsByTagName("td")[0];
            if (subject.no.innerHTML=="")
            {
                number=i;
                break;
            }
            subject.sid = subject_row[i].getElementsByTagName("td")[2];
            subject.sname = subject_row[i].getElementsByTagName("td")[4];//alert(subject_name[i].innerHTML);
            subject.w = subject_row[i].getElementsByTagName("td")[6];
            subject.section = subject_row[i].getElementsByTagName("td")[8];
            subject.studytime = subject_row[i].getElementsByTagName("td")[10];
            subject.room = subject_row[i].getElementsByTagName("td")[12];
            subject.build = subject_row[i].getElementsByTagName("td")[14];
            subject_all[i]=subject;
        }
        
       $("body").empty();

        subject_all.sort(compare);




        subject_1    = new Array();
        subject_2    = new Array();
        subject_3    = new Array();
        subject_4    = new Array();
        subject_5    = new Array();
        subject_6    = new Array();
        subject_7    = new Array();
        lastDay="0";
        noOfDayInWeek=1;

        // divide subject into day
        for (var i=0;i<number;i++)
        { 
            studytime = subject_all[i].studytime.innerHTML;
            if(lastDay=="0"){
                lastDay=studytime.substring(0,studytime.indexOf("."));
            }
            else if(lastDay!=studytime.substring(0,studytime.indexOf("."))){
                noOfDayInWeek++;
                lastDay=studytime.substring(0,studytime.indexOf("."));
            }
            if(lastDay==studytime.substring(0,studytime.indexOf("."))){
                switch(noOfDayInWeek)
                {
                    case 1:
                        subject_1.push(subject_all[i]);
                        break;
                    case 2:
                        subject_2.push(subject_all[i]);
                        break;
                    case 3:
                        subject_3.push(subject_all[i]);
                        break;
                    case 4:
                        subject_4.push(subject_all[i]);
                        break;
                    case 5:
                        subject_5.push(subject_all[i]);
                        break;
                    case 6:
                        subject_6.push(subject_all[i]);
                        break;
                    default://7
                      subject_7.push(subject_all[i]);
                }
            }
        }

        // print
        //for (var i=0;i<number;i++){ 
            function printSubjectInDate(entry){
                $("body").append("<p>");
    //$("body").append(entry.studytime.innerHTML.substring(studytime.indexOf(".")+2,studytime.indexOf(".")+14));
                $("body").append(" "+entry.sname.innerHTML);
                $("body").append(" ( SEC: "+entry.section.innerHTML+")<br/>");
                $("body").append(" "+entry.room.innerHTML);
                $("body").append(" : "+entry.build.innerHTML);
                $("body").append("</p>");
            }


            subject_1.sort(compareTime);
            subject_2.sort(compareTime);
            subject_3.sort(compareTime);
            subject_4.sort(compareTime);
            subject_5.sort(compareTime);
            subject_6.sort(compareTime);
            subject_7.sort(compareTime);


            $("body").append("<br/>DAY 1 :");
            $("body").append(subject_1[0].studytime.innerHTML.substring(0,studytime.indexOf(".")+2));
            subject_1.forEach(function(entry) {
                printSubjectInDate(entry);
                
            });

            $("body").append("<br/>DAY 2 :");
            $("body").append(subject_2[0].studytime.innerHTML.substring(0,studytime.indexOf(".")+2));
            subject_2.forEach(function(entry) {
                printSubjectInDate(entry);
            });

            $("body").append("<br/>DAY 3 :");
            $("body").append(subject_3[0].studytime.innerHTML.substring(0,studytime.indexOf(".")+2));
            subject_3.forEach(function(entry) {
                printSubjectInDate(entry);
            });

            $("body").append("<br/>DAY 4 :");
            $("body").append(subject_4[0].studytime.innerHTML.substring(0,studytime.indexOf(".")+2));
            subject_4.forEach(function(entry) {
                printSubjectInDate(entry);
            });

            $("body").append("<br/>DAY 5 :");
            $("body").append(subject_5[0].studytime.innerHTML.substring(0,studytime.indexOf(".")+2));
            subject_5.forEach(function(entry) {
                printSubjectInDate(entry);
            });

            $("body").append("<br/>DAY 6 :");
            //$("body").append(subject_6[0].studytime.innerHTML.substring(0,studytime.indexOf(".")+1)+"<br/>");
            subject_6.forEach(function(entry) {
                printSubjectInDate(entry);
            });

            $("body").append("<br/>DAY 7 :");
            //$("body").append(subject_7[0].studytime.innerHTML.substring(0,studytime.indexOf(".")+1)+"<br/>");
            subject_7.forEach(function(entry) {
                printSubjectInDate(entry);
            });

        //}
    }