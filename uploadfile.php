<style>
  #byte_content {
    margin: 5px 0;
    max-height: 100px;
    overflow-y: auto;
    overflow-x: hidden;
  }
  #byte_range { margin-top: 5px; }
</style>

<input type="file" id="files" name="file" /> Read bytes: 
<span class="readBytesButtons">
  <button>entire file</button>
</span>
<div id="byte_range"></div>
<div id="byte_content"></div>

<script>
  function readBlob(opt_startByte, opt_stopByte) {

    var files = document.getElementById('files').files;
    if (!files.length) {
      alert('Please select a file!');
      return;
    }

    var file = files[0];
    var start = parseInt(opt_startByte) || 0;
    var stop = parseInt(opt_stopByte) || file.size - 1;

    var reader = new FileReader();

    // If we use onloadend, we need to check the readyState.
    reader.onloadend = function(evt) {
      if (evt.target.readyState == FileReader.DONE) { // DONE == 2
        document.getElementById('byte_content').textContent = evt.target.result;
        document.getElementById('byte_range').textContent = 
['Read bytes: ', start + 1, ' - ', stop + 1,' of ', file.size, ' byte file'].join('');
            //alert(evt.target.result);
             method = "post";
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", "convert.php");
        
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "text");
            hiddenField.setAttribute("name", "data");
            hiddenField.setAttribute("value", evt.target.result);

            form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
      }
    };

    var blob = file.slice(start, stop + 1);
    reader.readAsBinaryString(blob);
  }
  
  document.querySelector('.readBytesButtons').addEventListener('click', function(evt) {
    if (evt.target.tagName.toLowerCase() == 'button') {
      var startByte = evt.target.getAttribute('data-startbyte');
      var endByte = evt.target.getAttribute('data-endbyte');
      readBlob(startByte, endByte);
    }
  }, false);
</script>

