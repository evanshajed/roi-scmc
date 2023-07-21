totalOTARevenue2021=0,totalDigitalRevenue2021=0,pdag2022BroadCast=22,pdag2023BroadCast=12.9,pdag2024BroadCast=8.4,pOTAAdRG2022=11.4,pOTAAdRG2023=-5,pOTAAdRG2024=-1;let OTA_2021=0,OTA_2022=0,OTA_2023=0,OTA_2024=0,Digital_2021=0,Digital_2022=0,Digital_2023=0,Digital_2024=0,Large_2021=0,Mid_2021=0,Small_2021=0,Large_2022=0,Mid_2022=0,Small_2022=0,Large_2023=0,Mid_2023=0,Small_2023=0,Large_2024=0,Mid_2024=0,Small_2024=0;function Projected_OTA_Revenue(e,t){return result=0,t/=100,result=e*(1+t),result}function Projected_Third_Party_Digital_Revenue(e,t){return result=0,t/=100,result=e*(1+t),result}function SetDefaultValue(e){var t=e.value;0===(t=$.trim(t)).length&&(e.value="$0")}function ValueIn3DigitComma(e){return"$"===e.charAt(0)&&(e=e.slice(1)),"NaN"===(e=e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))&&(e=0),e="$"+e}function ExportToPDF(){$("#exportbtn").hide();var e=Math.ceil(1500/1725)-1;html2canvas($("#calc_container")[0],{scale:2,allowTaint:!0}).then(function(t){t.getContext("2d");var a=t.toDataURL("image/jpeg",1),i=new jsPDF("p","pt",[1130,1725]);i.addImage(a,"JPG",15,15,1100,1500);for(var l=1;l<=e;l++)i.addPage(1130,1725),i.addImage(a,"JPG",15,15,0,0,1100,1450);setTimeout(function(){i.save("Marketron.pdf")},1e3)}),$("#exportbtn").show()}function savePDF(){var e=document.body,t=document.documentElement,a=(Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight),document.body.offsetWidth),i=document.body.offsetHeight,l=a+20,r=1.2*l,o=a,n=i;Math.ceil(i/r);const _=document.body;let d=_.scrollHeight;_.scrollWidth;html2canvas(document.body,{quality:2,scale:1,allowTaint:!0,tainTest:!1,loggin:!0,height:1.5*d,y:100}).then(function(e){e.getContext("2d");var t=e.toDataURL("image/jpeg",1),a=(e.toDataURL("image/png").replace("image/png","image/octet-stream"),new jsPDF("p","mm",[l,r]));a.addImage(t,"JPG",10,10,o,e.height),console.log("canvas.height -"+e.height),console.log("canvas.width -"+e.width),console.log("\n"),console.log("PDF_Height -"+r),console.log("PDF_Width -"+l),console.log("\n"),console.log("top_left_margin -10"),console.log("\n"),console.log("canvas_image_height -"+n),console.log("canvas_image_width -"+o),setTimeout(function(){a.save("Calculation.pdf")},1e3)})}function formatCurrency(e,t){var a=e.val();if(""!==a){var i=a.length,l=e.prop("selectionStart");if(a.indexOf(".")>=0){var r=a.indexOf("."),o=a.substring(0,r),n=a.substring(r);o=formatNumberLeft(o),n=formatNumber(n),"blur"===t&&(n+="00"),a=(a="$"+o+"."+(n=n.substring(0,2))).replace("$-","-$")}else{var _=a.indexOf("-");a="$"+(a=formatNumber(a)),_>=0&&(a=a.replace("$","-$"))}e.val(a),l=a.length-i+l,e[0].setSelectionRange(l,l)}}let chart_OTA_Projected_Revenue_Values=[0,0,0,0],chart_Digital_Projected_Revenue_Values=[0,0,0,0],Digital_COMPANY_Projected_Revenue_LARGE=[],Digital_COMPANY_Projected_Revenue_MID=[],Digital_COMPANY_Projected_Revenue_SMALL=[];function chart_OTA_Projected_Revenue(e){new Chart("chart_OTA_Projected_Revenue",{type:"bar",data:{labels:["2021","2022","2023","2024"],datasets:[{label:"OTA Revenue",backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9"],type:"bar",borderColor:"#8e5ea2",data:e}]},options:{interactivityEnabled:!1,hover:{mode:null},events:["mouseout","click","touchstart","touchmove","touchend"],interaction:{mode:"nearest"},animation:!1,legend:{display:!1},hover:{animationDuration:0},responsiveAnimationDuration:0,scales:{yAxes:[{ticks:{suggestedMin:1e5,callback:function(e,t,a){return"$"+(e<1e6?e/1e3+"K":e/1e6+"M")}}}]}}})}function chart_Digital_Projected_Revenue(e){new Chart("chart_Digital_Projected_Revenue",{type:"bar",data:{labels:["2021","2022","2023","2024"],datasets:[{label:"Digital Revenue",backgroundColor:["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9"],type:"bar",borderColor:"#8e5ea2",data:e}]},options:{interactivityEnabled:!1,hover:{mode:null},events:["mouseout","click","touchstart","touchmove","touchend"],interaction:{mode:"nearest"},animation:!1,legend:{display:!1},hover:{animationDuration:0},responsiveAnimationDuration:0,scales:{yAxes:[{ticks:{suggestedMin:1e5,callback:function(e,t,a){return"$"+(e<1e6?e/1e3+"K":e/1e6+"M")}}}]}}})}function chart_Digital_COMPANY_Projected_Revenue(){let e=document.getElementById("chart_Digital_COMPANY_Projected_Revenue").getContext("2d");new Chart(e,{type:"bar",data:{labels:["2021","2022","2023","2024"],datasets:[{label:"Digital Revenue",data:chart_Digital_Projected_Revenue_Values,order:4,borderColor:"rgba(8,47,215,0.35)",backgroundColor:"rgba(8,47,215,0.35)",yAxisID:"A"},{label:"Large Market",data:[Large_2021,Large_2022,Large_2023,Large_2024],type:"line",order:3,fill:!1,borderColor:"rgb(37,163,59)",yAxisID:"B"},{label:"Mid Market",data:[Mid_2021,Mid_2022,Mid_2023,Mid_2024],type:"line",order:2,fill:!1,borderColor:"rgb(11,241,156)",yAxisID:"B"},{label:"Small Market",data:[Small_2021,Small_2021,Small_2023,Small_2024],type:"line",order:1,fill:!1,borderColor:"rgb(6,228,248)",yAxisID:"B"}]},options:{interactivityEnabled:!1,hover:{mode:null},hover:{animationDuration:0},animation:!1,events:["mouseout","click","touchstart","touchmove","touchend"],interaction:{mode:"nearest"},scales:{yAxes:[{id:"A",position:"left",ticks:{suggestedMin:1e5,fontColor:"rgba(8,47,215,0.35)",callback:function(e,t,a){return"$"+(e<1e6?e/1e3+"K":e/1e6+"M")}}},{id:"B",position:"right",ticks:{suggestedMin:1e5,fontColor:"#04300a",callback:function(e,t,a){return"$"+(e<1e6?e/1e3+"K":e/1e6+"M")}},gridLines:{display:!1}}]},legend:{position:"bottom"}}})}function chart_COMPANY(){const e={labels:["January","February","March","April"],datasets:[{type:"bar",label:"Bar Dataset",data:chart_Digital_Projected_Revenue_Values,borderColor:"rgb(255, 99, 132)",backgroundColor:"rgba(255, 99, 132, 0.2)",yAxisID:"y"},{type:"line",label:"Line Dataset",data:[Large_2021,Large_2022,Large_2023,Large_2024],fill:!1,borderColor:"rgb(54, 162, 235)",yAxisID:"y1"},{type:"line",label:"Line Dataset",data:[Mid_2021,Mid_2022,Mid_2023,Mid_2024],fill:!1,borderColor:"rgb(54, 162, 235)",yAxisID:"y1"},{type:"line",label:"Line Dataset",data:[Small_2021,Small_2021,Small_2023,Small_2024],fill:!1,borderColor:"rgb(54, 162, 235)",yAxisID:"y1"}]};let t=document.getElementById("COMPANY").getContext("2d");new Chart(t,{type:"bar",data:e,options:{responsive:!0,interaction:{mode:"index",intersect:!1},stacked:!1,scales:{yAxes:[{id:"y",position:"left",ticks:{suggestedMin:1e5,fontColor:"rgba(8,47,215,0.35)"}},{id:"y1",position:"right",ticks:{suggestedMin:1e5,fontColor:"#04300a"},gridLines:{display:!1}}]}}})}let OTA2022revenue=0,OTA2023revenue=0,OTA2024revenue=0;$(document).ready(function(){chart_OTA_Projected_Revenue(),chart_Digital_Projected_Revenue();let e=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});var t=/[$,\s]/g,a=$("#totalDigitalRevenue2021LARGE").val().replace(t,"");Large_2021=a;let i=Projected_Third_Party_Digital_Revenue(a,pdag2022BroadCast);Large_2022=i,$("#Digital2022Large").val(i.toFixed(2)),$("#Digital2022Large").text(e.format(Large_2022));let l=Projected_Third_Party_Digital_Revenue(Large_2022,pdag2023BroadCast);Large_2023=l,$("#Digital2023Large").val(l.toFixed(2)),$("#Digital2023Large").text(e.format(Large_2023));let r=Projected_Third_Party_Digital_Revenue(Large_2023,pdag2024BroadCast);Large_2024=r,$("#Digital2024Large").val(r.toFixed(2)),$("#Digital2024Large").text(e.format(Large_2024));t=/[$,\s]/g,a=$("#totalDigitalRevenue2021MID").val().replace(t,"");Mid_2021=a;let o=Projected_Third_Party_Digital_Revenue(a,pdag2022BroadCast);Mid_2022=o,$("#Digital2022Mid").val(o.toFixed(2)),$("#Digital2022Mid").text(e.format(Mid_2022));let n=Projected_Third_Party_Digital_Revenue(Mid_2022,pdag2023BroadCast);Mid_2023=n,$("#Digital2023Mid").val(n.toFixed(2)),$("#Digital2023Mid").text(e.format(Mid_2023));let _=Projected_Third_Party_Digital_Revenue(Mid_2023,pdag2024BroadCast);Mid_2024=_,$("#Digital2024Mid").val(_.toFixed(2)),$("#Digital2024Mid").text(e.format(Mid_2024));t=/[$,\s]/g,a=$("#totalDigitalRevenue2021SMALL").val().replace(t,"");Small_2021=a;let d=Projected_Third_Party_Digital_Revenue(a,pdag2022BroadCast);Small_2022=d,$("#Digital2022Small").val(d.toFixed(2)),$("#Digital2022Small").text(e.format(Small_2022));let c=Projected_Third_Party_Digital_Revenue(Small_2022,pdag2023BroadCast);Small_2023=c,$("#Digital2023Small").val(c.toFixed(2)),$("#Digital2023Small").text(e.format(Small_2023));let g=Projected_Third_Party_Digital_Revenue(Small_2023,pdag2024BroadCast);Small_2024=g,$("#Digital2024Small").val(g.toFixed(2)),$("#Digital2024Small").text(e.format(Small_2024)),chart_Digital_COMPANY_Projected_Revenue(),$("#totalDigitalRevenue2021LARGE").on({focus:function(){0==$(this).val().replace(/[$,\s]/g,"")&&($(this).val(""),$(this).text(""))},keyup:function(){let e=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});var t=$(this).val().replace(/[$,\s]/g,"");Large_2021=t;let a=Projected_Third_Party_Digital_Revenue(t,pdag2022BroadCast);Large_2022=a,$("#Digital2022Large").val(a.toFixed(2)),$("#Digital2022Large").text(e.format(Large_2022));let i=Projected_Third_Party_Digital_Revenue(Large_2022,pdag2023BroadCast);Large_2023=i,$("#Digital2023Large").val(i.toFixed(2)),$("#Digital2023Large").text(e.format(Large_2023));let l=Projected_Third_Party_Digital_Revenue(Large_2023,pdag2024BroadCast);Large_2024=l,$("#Digital2024Large").val(l.toFixed(2)),$("#Digital2024Large").text(e.format(Large_2024)),chart_Digital_COMPANY_Projected_Revenue()},blur:function(){var e=$(this).val().replace(/[$,\s]/g,"");let t=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});$(this).val(t.format(e))}}),$("#totalDigitalRevenue2021MID").on({focus:function(){0==$(this).val().replace(/[$,\s]/g,"")&&($(this).val(""),$(this).text(""))},keyup:function(){let e=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});var t=$(this).val().replace(/[$,\s]/g,"");Mid_2021=t;let a=Projected_Third_Party_Digital_Revenue(t,pdag2022BroadCast);Mid_2022=a,$("#Digital2022Mid").val(a.toFixed(2)),$("#Digital2022Mid").text(e.format(Mid_2022));let i=Projected_Third_Party_Digital_Revenue(Mid_2022,pdag2023BroadCast);Mid_2023=i,$("#Digital2023Mid").val(i.toFixed(2)),$("#Digital2023Mid").text(e.format(Mid_2023));let l=Projected_Third_Party_Digital_Revenue(Mid_2023,pdag2024BroadCast);Mid_2024=l,$("#Digital2024Mid").val(l.toFixed(2)),$("#Digital2024Mid").text(e.format(Mid_2024)),chart_Digital_COMPANY_Projected_Revenue()},blur:function(){var e=$(this).val().replace(/[$,\s]/g,"");let t=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});$(this).val(t.format(e))}}),$("#totalDigitalRevenue2021SMALL").on({focus:function(){0==$(this).val().replace(/[$,\s]/g,"")&&($(this).val(""),$(this).text(""))},keyup:function(){let e=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});var t=$(this).val().replace(/[$,\s]/g,"");Small_2021=t;let a=Projected_Third_Party_Digital_Revenue(t,pdag2022BroadCast);Small_2022=a,$("#Digital2022Small").val(a.toFixed(2)),$("#Digital2022Small").text(e.format(Small_2022));let i=Projected_Third_Party_Digital_Revenue(Small_2022,pdag2023BroadCast);Small_2023=i,$("#Digital2023Small").val(i.toFixed(2)),$("#Digital2023Small").text(e.format(Small_2023));let l=Projected_Third_Party_Digital_Revenue(Small_2023,pdag2024BroadCast);Small_2024=l,$("#Digital2024Small").val(l.toFixed(2)),$("#Digital2024Small").text(e.format(Small_2024)),chart_Digital_COMPANY_Projected_Revenue()},blur:function(){var e=$(this).val().replace(/[$,\s]/g,"");let t=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});$(this).val(t.format(e))}}),$("#totalOTARevenue2021").on({focus:function(){0==$(this).val().replace(/[$,\s]/g,"")&&($(this).val(""),$(this).text(""))},keyup:function(){let e=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});var t=$(this).val().replace(/[$,\s]/g,"");OTA_2021=t;let a=Projected_OTA_Revenue(t,pOTAAdRG2022);OTA_2022=a.toFixed(2),$("#OTA2022revenue").val(a.toFixed(2)),$("#OTA2022revenue").text(e.format(OTA_2022));let i=Projected_OTA_Revenue(a,pOTAAdRG2023);OTA_2023=i.toFixed(2),$("#OTA2023revenue").val(i.toFixed(2)),$("#OTA2023revenue").text(e.format(OTA_2023));let l=Projected_OTA_Revenue(i,pOTAAdRG2024);OTA_2024=l.toFixed(2),$("#OTA2024revenue").val(l.toFixed(2)),$("#OTA2024revenue").text(e.format(OTA_2024)),chart_OTA_Projected_Revenue(chart_OTA_Projected_Revenue_Values=[OTA_2021,OTA_2022,OTA_2023,OTA_2024])},blur:function(){var e=$(this).val().replace(/[$,\s]/g,"");let t=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});$(this).val(t.format(e)),chart_OTA_Projected_Revenue(chart_OTA_Projected_Revenue_Values)}}),$("#totalDigitalRevenue2021").on({focus:function(){0==$(this).val().replace(/[$,\s]/g,"")&&($(this).val(""),$(this).text(""))},keyup:function(){let e=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});var t=$(this).val().replace(/[$,\s]/g,"");Digital_2021=t;let a=Projected_Third_Party_Digital_Revenue(t,pdag2022BroadCast);Digital_2022=a,$("#Digital2022revenue").val(a.toFixed(2)),$("#Digital2022revenue").text(e.format(Digital_2022));let i=Projected_Third_Party_Digital_Revenue(a,pdag2023BroadCast);Digital_2023=i,$("#Digital2023revenue").val(i.toFixed(2)),$("#Digital2023revenue").text(e.format(Digital_2023));let l=Projected_Third_Party_Digital_Revenue(i,pdag2024BroadCast);Digital_2024=l,$("#Digital2024revenue").val(l.toFixed(2)),$("#Digital2024revenue").text(e.format(Digital_2024)),chart_Digital_Projected_Revenue(chart_Digital_Projected_Revenue_Values=[Digital_2021,Digital_2022,Digital_2023,Digital_2024]),chart_Digital_COMPANY_Projected_Revenue()},blur:function(){var e=$(this).val().replace(/[$,\s]/g,"");let t=Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});$(this).val(t.format(e)),chart_Digital_Projected_Revenue(chart_Digital_Projected_Revenue_Values),chart_Digital_COMPANY_Projected_Revenue()}})});