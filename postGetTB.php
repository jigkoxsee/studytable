<form name="edit"
method="post"
action="http://www.reg.kmitl.ac.th/u_student/report_studytable_show.php"
target="_blank"
enctype="multipart/form-data">
<input type="hidden" name="command" value="">
	<select name="year" onchange="return RefreshEdit();" style="width:64px">
		<option value="2556">2556</option>
	</select>
	<select name="semester" style="width:64px">
		<option value="2">2</option>
	</select>
	<input type="submit" name="watch" value=" ดูตารางเรียน " title="submit">
</form>
