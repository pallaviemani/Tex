function areLetters(field)
{
letters=/^[A-Za-z., ]+$/;
if(field.value.match(letters))
{
return true;
}
else{
field.focus();
field.select();
return false;
}
}
function isdate(field) {
        var date = /^(((0[1-9]|[12]\d|3[01])\/(0[13578]|1[02])\/((19|[2-9]\d)\d{2}))|((0[1-9]|[12]\d|30)\/(0[13456789]|1[012])\/((19|[2-9]\d)\d{2}))|((0[1-9]|1\d|2[0-8])\/02\/((19|[2-9]\d)\d{2}))|(29\/02\/((1[6-9]|[2-9]\d)(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))))$/g;
        if (field.value.match(date)) {
            return true;
        }
		else{
		field.focus();
		field.select();
		return false;
		}
    }
function isNotEmpty(field)
{
	if(field.value.length==0)
	{
		field.focus();
		return false;
	}
	else
		return true;
}
function areNumbers(field)
{
numbers=/^[0-9]+$/;
if(field.value.match(numbers))
{
	return true;
}
else{
field.focus();
field.select();
return false;
}
}
function isEmail(field)
{
	var email=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(field.value.match(email))
	{
		return true;
	}
	else{
		field.focus();
		field.select();
		}

}
function passwordsMatch(p1,p2)
{
	if(p1.value.match(p2.value))
		return true;
	else
	{
		return false;
	}
}
function lengthlt(field,length)
{
if (field.value.length<=length)
{
return true;
}
return false;
}
function lengthgt(field,length)
{
if (field.value.length>=length)
{
return true;
}
return false;
}
function selfoc(field)
{
field.select();
field.focus();
}