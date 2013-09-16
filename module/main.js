Ext.onReady(function(){ 
	var main =new Ext.Viewport({
		layout:"border",
		title:'Ext.layout.container.Border布局示例',   
        layout:'border',   
        frame:true,   
        height:450,   
        width:600,     
        defaults:{//设置默认属性   
            collapsible:true  
        },   
        items:[{   
            title:'North Panel',   
            html:'上边',   
            region:'north',//指定子面板所在区域为north   
            height:80,
            html:"<div>111</div>"
        },{   
            title:'South Panel',   
            html:'下边',   
            region:'south',//指定子面板所在区域为south   
            height:80   
        },{   
            title:'West Panel',   
            html:'左边',   
            region:'west',//指定子面板所在区域为west   
            width:250   
        },{   
            title:'east Panel',   
            html:'右边',   
            region:'east',//指定子面板所在区域为east   
            width:160   
        },{   
            title:'Main Content',   
            html:'中间',   
            region:'center'//指定子面板所在区域为center   
        }]   
	});
	main.show();
}); 