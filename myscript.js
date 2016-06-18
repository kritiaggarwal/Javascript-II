		function change()
		{
			var b=document.getElementById('button1');
			if(b.value=="Unlike")
			{
				b.setAttribute('value',"Like");
				b.style.backgroundColor="cyan";
			}
			else if(b.value=="Like")
			{
				b.setAttribute('value',"Unlike");
				b.style.backgroundColor="red";
			}
		}
		function hide()
		{
			var rows=document.getElementById('boddy').childNodes;
			for(var i=1;i<rows.length;i++)
			{
				if(((i-1)/2)%2==0)
					rows[i].style.display="none";
			}
		}
		function show()
		{
			var rows=document.getElementById('boddy').childNodes;
			for(var i=1;i<rows.length;i++)
			{
				if(((i-1)/2)%2==0)
					rows[i].style.display="";
			}
		}
		function check()
		{
			var elem=document.getElementById("inputt");
			var val=elem.value;
			if(!(/^0|[1-9][0-9]*$/.test(val) || val==" " || val==""))
			{
				elem.style.backgroundColor='red';
				elem.setAttribute('readonly','true');
				setTimeout(function(){elem.removeAttribute('readonly'); elem.style.backgroundColor='white';},5000);
			}
		}