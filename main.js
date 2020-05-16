/*   
  Project sourced from Zua 
  https://github.com/thatziv/webhook 

Thank you Zua - TofuBytesDev
*/
$(function(){
    $('#btn').click(function(){
        var link = $('#link').val();
        var username = $('#username').val();
        var content = $('#content').val();
        if (link==null || link=="",content==null || content=="")
        {
            alert("Please Fill Out All The Fields");
            return false;
        }
		$('#CompletedModal').modal('show');
		$.post(link, {"content": content, "username": username,});
    });
});
