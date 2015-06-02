// JavaScript Document
function ajax(url, fnSucc, fnFailed)
{
	//1.创建Ajax对象
	if(window.XMLHttpRequest)
	{
		var oAjax=new XMLHttpRequest();	
	}	
	else
	{
		var oAjax=new ActiveXObject("Microsoft.XMLHTTP");	
	}
	
	//2.连接服务器
	//open(方法,文件名,异步传输);
	//同步：事情一件件来
	//异步：多个事情可以一起做
	oAjax.open('GET', url, true);
	
	//3.发送请求
	oAjax.send();
	
	//4.接受返回
	oAjax.onreadystatechange=function()
	{
		//oAjax.readyState //浏览器和服务器,运行到哪一步了
		if(oAjax.readyState==4)//读取完成
		{
			if(oAjax.status==200)//成功
			{
				fnSucc(oAjax.responseText);
				//alert('success:'+oAjax.responseText);	
			}
			else
			{	
				if(fnFailed)
				{
					fnFailed(oAjax.status);	
				}
				//alert('failed:'+oAjax.status);		
			}
		}	
	};
}