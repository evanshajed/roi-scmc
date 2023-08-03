                    // G R O S S

                    const keywords_gross = [
                        "CG_BW_Display",
                        "CG_BW_Geofencing",
                        "CG_BW_Video",
                        "CG_BW_Video_Geofencing",
                        "CG_BW_OTT_CTV",
                        "CG_Commission"
                    ];

CG_BW_Display=60;   CG_BW_Geofencing=5;  CG_BW_Video=20; CG_BW_Video_Geofencing=5; CG_BW_OTT_CTV=10;
CG_RR_Display=12;     CG_RR_Geofencing=15;    CG_RR_Video=22;   CG_RR_Video_Geofencing=26;   CG_RR_OTT_CTV=33;
CG_MC_Display=4.25;   CG_MC_Geofencing=5;     CG_MC_Video=12.5; CG_MC_Video_Geofencing=13.50;CG_MC_OTT_CTV=17;
CG_M_Display=7.75;    CG_M_Geofencing=10;     CG_M_Video=9.50;  CG_M_Video_Geofencing =12.50;CG_M_OTT_CTV=16;

CG_M_P_Display=0.65;CG_M_P_Geofencing=0.67; CG_M_P_Video=0.43;CG_M_P_Video_Geofencing=0.48; CG_M_P_OTT_CTV=0.48;
//commission %:
CG_Commission=20;

CG_Block_V_1=10000; let CG_Block_MCMC_1=0; let CG_Block_SC_1=0; let CG_Block_MC_1=0; let CG_Block_SNR_1=0;
CG_Block_V_2=30000; let CG_Block_MCMC_2=0; let CG_Block_SC_2=0; let CG_Block_MC_2=0; let CG_Block_SNR_2=0;
CG_Block_V_3=50000; let CG_Block_MCMC_3=0; let CG_Block_SC_3=0; let CG_Block_MC_3=0; let CG_Block_SNR_3=0;


///////////////////////////////////////////////////////////////////////////////////
function gross_margin_display(){

    var regex = /[$,%\s]/g;
    var CG_RR_Display_stripped = CG_RR_Display.replace(regex, '');
    var CG_MC_Display_stripped = CG_MC_Display.replace(regex, '');
    //console.log (CG_RR_Display_stripped - CG_MC_Display_stripped);
    return (CG_RR_Display_stripped - CG_MC_Display_stripped).toFixed(2);
}
function gross_margin_display_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = gross_margin_display() / CG_RR_Display.replace(regex,'');

    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    //console.log( percent.toFixed(2));

    return percent.toFixed(2);
}
///////////////////////////////////////////////////////////////////////////////////
function gross_margin_geofencing(){
    var regex = /[$,%\s]/g;
    var CG_RR_Geofencing_stripped = CG_RR_Geofencing.replace(regex,'');
    var CG_MC_Geofencing_stripped = CG_MC_Geofencing.replace(regex,'');

    return (CG_RR_Geofencing_stripped - CG_MC_Geofencing_stripped);
}
function gross_margin_geofencing_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = gross_margin_geofencing() / CG_RR_Geofencing.replace(regex,'');

    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    //console.log( percent.toFixed(2));

    return percent.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////
function gross_margin_video(){
    var regex = /[$,%\s]/g;
    var CG_RR_Video_stripped = CG_RR_Video.replace(regex,'');
    var CG_MC_Video_stripped = CG_MC_Video.replace(regex,'');

    return (CG_RR_Video_stripped - CG_MC_Video_stripped);
}
function gross_margin_video_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = gross_margin_video() / CG_RR_Video.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    return percent.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////
function gross_margin_video_geofencing(){
    var regex = /[$,%\s]/g;
    var CG_RR_Video_Geofencing_stripped = CG_RR_Video_Geofencing.replace(regex,'');
    var CG_MC_Video_Geofencing_stripped = CG_MC_Video_Geofencing.replace(regex,'');
    return (CG_RR_Video_Geofencing_stripped - CG_MC_Video_Geofencing_stripped);
}
function gross_margin_video_geofencing_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = gross_margin_video_geofencing() / CG_RR_Video_Geofencing.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;

    return percent.toFixed(2);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function gross_margin_ott_ctv(){
    var regex = /[$,%\s]/g;
    var CG_RR_OTT_CTV_stripped = CG_RR_OTT_CTV.replace(regex,'');
    var CG_MC_OTT_CTV_stripped = CG_MC_OTT_CTV.replace(regex,'');
    return (CG_RR_OTT_CTV_stripped - CG_MC_OTT_CTV_stripped);
}
function gross_margin_ott_ctv_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = gross_margin_ott_ctv() / CG_RR_OTT_CTV.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;

    return percent.toFixed(2);
}
///////////////////////////////////////////////////////////////////////////////////


                    ///////////////////////////////////////////////////////////////////////////////////

                    function gross_MCMC_row_1(){
                        var regex = /[$,%\s]/g;
                        var S_CG_Block_V_1         = CG_Block_V_1.toString().replace(regex,'');

                        var S_CG_BW_Display        = CG_BW_Display.toString().replace(regex,'') /100;
                        var S_CG_BW_Geofencing     = CG_BW_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_Video          = CG_BW_Video.toString().replace(regex,'')/100;
                        var S_CG_BW_Video_Geofencing = CG_BW_Video_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_OTT_CTV        = CG_BW_OTT_CTV.toString().replace(regex,'')/100;
                        var S_CG_RR_Display        = CG_RR_Display.toString().replace(regex,'');

                    var S_CG_M_Display         = CG_M_Display.toString().replace(regex,'');
                    S_CG_M_Display = S_CG_M_Display.slice(0, CG_M_Display.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_Video           = CG_M_Video.toString().replace(regex,'');
                    S_CG_M_Video = S_CG_M_Video.slice(0, CG_M_Video.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_Geofencing      = CG_M_Geofencing.toString().replace(regex,'');
                    S_CG_M_Geofencing = S_CG_M_Geofencing.slice(0, CG_M_Geofencing.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_Video_Geofencing= CG_M_Video_Geofencing.toString().replace(regex,'');
                    S_CG_M_Video_Geofencing = S_CG_M_Video_Geofencing.slice(0, CG_M_Video_Geofencing.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_OTT_CTV         = CG_M_OTT_CTV.toString().replace(regex,'');
                    S_CG_M_OTT_CTV = S_CG_M_OTT_CTV.slice(0, CG_M_OTT_CTV.toString().replace(regex,'').indexOf('('));

                        var S_CG_RR_OTT_CTV        = CG_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CG_RR_Geofencing     = CG_RR_Geofencing.toString().replace(regex,'');
                        var S_CG_RR_Video          = CG_RR_Video.toString().replace(regex,'');
                        var S_CG_RR_Video_Geofencing = CG_RR_Video_Geofencing.toString().replace(regex,'');


                        //console.log((((( S_CG_Block_V_1 * S_CG_BW_Display ) / S_CG_RR_Display  )  * S_CG_M_Display)+(((S_CG_Block_V_1 * S_CG_BW_OTT_CTV )  / S_CG_RR_OTT_CTV)  * S_CG_M_OTT_CTV)+(((S_CG_Block_V_1* S_CG_BW_Display)/ S_CG_RR_Geofencing)*S_CG_M_Geofencing)+(((S_CG_Block_V_1*S_CG_BW_Video )/S_CG_RR_Video)*S_CG_M_Video)+(((S_CG_Block_V_1*S_CG_BW_Video_Geofencing)/S_CG_RR_Video_Geofencing)*S_CG_M_Video_Geofencing)));

                        console.log(
                            "GROSS"+
                            S_CG_Block_V_1  +"--"+ S_CG_BW_Display          +"--"+ S_CG_RR_Display          +"--"+ S_CG_M_Display+"\n"
                            +S_CG_Block_V_1 +"--"+ S_CG_BW_OTT_CTV          +"--"+ S_CG_RR_OTT_CTV          +"--"+ S_CG_M_OTT_CTV+"\n"
                            +S_CG_Block_V_1 +"--"+ S_CG_BW_Geofencing       +"--"+ S_CG_RR_Geofencing       +"--"+ S_CG_M_Geofencing+"\n"
                            +S_CG_Block_V_1 +"--"+ S_CG_BW_Video            +"--"+ S_CG_RR_Video            +"--"+ S_CG_M_Video+"\n"
                            +S_CG_Block_V_1 +"--"+ S_CG_BW_Video_Geofencing +"--"+  S_CG_RR_Video_Geofencing+"--"+ S_CG_M_Video_Geofencing+"\n"

                        );

                        CG_Block_MCMC_1 =
                            floorOrCeil(
                            ((( S_CG_Block_V_1 * S_CG_BW_Display        ) / S_CG_RR_Display      )* S_CG_M_Display)
                            +(((S_CG_Block_V_1 * S_CG_BW_OTT_CTV        ) / S_CG_RR_OTT_CTV      )* S_CG_M_OTT_CTV)
                            +(((S_CG_Block_V_1 * S_CG_BW_Geofencing     ) / S_CG_RR_Geofencing   )* S_CG_M_Geofencing)
                            +(((S_CG_Block_V_1 * S_CG_BW_Video          ) / S_CG_RR_Video        )* S_CG_M_Video)
                            +(((S_CG_Block_V_1 * S_CG_BW_Video_Geofencing)/ S_CG_RR_Video_Geofencing)* S_CG_M_Video_Geofencing)
                            );

                        return floorOrCeil(
                            ((( S_CG_Block_V_1 * S_CG_BW_Display        )  / S_CG_RR_Display          )* S_CG_M_Display)
                            +(((S_CG_Block_V_1 * S_CG_BW_OTT_CTV        )  / S_CG_RR_OTT_CTV          )* S_CG_M_OTT_CTV)
                            +(((S_CG_Block_V_1 * S_CG_BW_Geofencing     )  / S_CG_RR_Geofencing       )* S_CG_M_Geofencing)
                            +(((S_CG_Block_V_1 * S_CG_BW_Video           ) / S_CG_RR_Video            )* S_CG_M_Video)
                            +(((S_CG_Block_V_1 * S_CG_BW_Video_Geofencing) / S_CG_RR_Video_Geofencing )* S_CG_M_Video_Geofencing)
                        );
                    }
                    function gross_MCMC_row_2(){
                        var regex = /[$,%\s]/g;
                        var S_CG_Block_V_2         = CG_Block_V_2.toString().replace(regex,'');

                        var S_CG_BW_Display        = CG_BW_Display.toString().replace(regex,'') /100;
                        var S_CG_BW_Geofencing     = CG_BW_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_Video          = CG_BW_Video.toString().replace(regex,'')/100;
                        var S_CG_BW_Video_Geofencing = CG_BW_Video_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_OTT_CTV        = CG_BW_OTT_CTV.toString().replace(regex,'')/100;

                        var S_CG_RR_Display        = CG_RR_Display.toString().replace(regex,'');
                        var S_CG_RR_OTT_CTV        = CG_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CG_RR_Geofencing     = CG_RR_Geofencing.toString().replace(regex,'');
                        var S_CG_RR_Video          = CG_RR_Video.toString().replace(regex,'');
                        var S_CG_RR_Video_Geofencing = CG_RR_Video_Geofencing.toString().replace(regex,'');

                    var S_CG_M_Display         = CG_M_Display.toString().replace(regex,'');
                    S_CG_M_Display = S_CG_M_Display.slice(0, CG_M_Display.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_Video           = CG_M_Video.toString().replace(regex,'');
                    S_CG_M_Video = S_CG_M_Video.slice(0, CG_M_Video.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_Geofencing      = CG_M_Geofencing.toString().replace(regex,'');
                    S_CG_M_Geofencing = S_CG_M_Geofencing.slice(0, CG_M_Geofencing.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_Video_Geofencing= CG_M_Video_Geofencing.toString().replace(regex,'');
                    S_CG_M_Video_Geofencing = S_CG_M_Video_Geofencing.slice(0, CG_M_Video_Geofencing.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_OTT_CTV         = CG_M_OTT_CTV.toString().replace(regex,'');
                    S_CG_M_OTT_CTV = S_CG_M_OTT_CTV.slice(0, CG_M_OTT_CTV.toString().replace(regex,'').indexOf('('));

                        //console.log((((( S_CG_Block_V_1 * S_CG_BW_Display ) / S_CG_RR_Display  )  * S_CG_M_Display)+(((S_CG_Block_V_1 * S_CG_BW_OTT_CTV )  / S_CG_RR_OTT_CTV)  * S_CG_M_OTT_CTV)+(((S_CG_Block_V_1* S_CG_BW_Display)/ S_CG_RR_Geofencing)*S_CG_M_Geofencing)+(((S_CG_Block_V_1*S_CG_BW_Video )/S_CG_RR_Video)*S_CG_M_Video)+(((S_CG_Block_V_1*S_CG_BW_Video_Geofencing)/S_CG_RR_Video_Geofencing)*S_CG_M_Video_Geofencing)));

                        CG_Block_MCMC_2 =
                            floorOrCeil(
                            ((( S_CG_Block_V_2 * S_CG_BW_Display        ) / S_CG_RR_Display      )* S_CG_M_Display)
                            +(((S_CG_Block_V_2 * S_CG_BW_OTT_CTV        ) / S_CG_RR_OTT_CTV      )* S_CG_M_OTT_CTV)
                            +(((S_CG_Block_V_2 * S_CG_BW_Geofencing     ) / S_CG_RR_Geofencing   )* S_CG_M_Geofencing)
                            +(((S_CG_Block_V_2 * S_CG_BW_Video          ) / S_CG_RR_Video        )* S_CG_M_Video)
                            +(((S_CG_Block_V_2 * S_CG_BW_Video_Geofencing)/ S_CG_RR_Video_Geofencing)* S_CG_M_Video_Geofencing)
                            );

                        console.log(
                            "GROSS"+
                            S_CG_Block_V_2 +"--"+ S_CG_BW_Display           +"--"+ S_CG_RR_Display          +"--"+S_CG_M_Display+"\n"
                            +S_CG_Block_V_2 +"--"+ S_CG_BW_OTT_CTV          +"--"+ S_CG_RR_OTT_CTV          +"--"+ S_CG_M_OTT_CTV+"\n"
                            +S_CG_Block_V_2 +"--"+ S_CG_BW_Geofencing       +"--"+ S_CG_RR_Geofencing       +"--"+ S_CG_M_Geofencing+"\n"
                            +S_CG_Block_V_2 +"--"+ S_CG_BW_Video            +"--"+ S_CG_RR_Video            +"--"+ S_CG_M_Video+"\n"
                            +S_CG_Block_V_2 +"--"+ S_CG_BW_Video_Geofencing +"--"+ S_CG_RR_Video_Geofencing +"--"+ S_CG_M_Video_Geofencing+"\n"

                        );

                        return floorOrCeil(
                            ((( S_CG_Block_V_2 * S_CG_BW_Display        ) / S_CG_RR_Display     )* S_CG_M_Display)
                            +(((S_CG_Block_V_2 * S_CG_BW_OTT_CTV        ) / S_CG_RR_OTT_CTV     )* S_CG_M_OTT_CTV)
                            +(((S_CG_Block_V_2 * S_CG_BW_Geofencing     ) / S_CG_RR_Geofencing  )* S_CG_M_Geofencing)
                            +(((S_CG_Block_V_2 * S_CG_BW_Video          ) / S_CG_RR_Video       )* S_CG_M_Video)
                            +(((S_CG_Block_V_2 * S_CG_BW_Video_Geofencing) / S_CG_RR_Video_Geofencing )* S_CG_M_Video_Geofencing)
                        );
                    }
                    function gross_MCMC_row_3(){
                        var regex = /[$,%\s]/g;
                        var S_CG_Block_V_3         = CG_Block_V_3.toString().replace(regex,'');

                        var S_CG_BW_Display        = CG_BW_Display.toString().replace(regex,'') /100;
                        var S_CG_BW_Geofencing     = CG_BW_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_Video          = CG_BW_Video.toString().replace(regex,'')/100;
                        var S_CG_BW_Video_Geofencing = CG_BW_Video_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_OTT_CTV          = CG_BW_OTT_CTV.toString().replace(regex,'')/100;

                        var S_CG_RR_Display        = CG_RR_Display.toString().replace(regex,'');
                        var S_CG_RR_OTT_CTV        = CG_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CG_RR_Geofencing     = CG_RR_Geofencing.toString().replace(regex,'');
                        var S_CG_RR_Video          = CG_RR_Video.toString().replace(regex,'');
                        var S_CG_RR_Video_Geofencing = CG_RR_Video_Geofencing.toString().replace(regex,'');

                    var S_CG_M_Display         = CG_M_Display.toString().replace(regex,'');
                    S_CG_M_Display = S_CG_M_Display.slice(0, CG_M_Display.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_Video           = CG_M_Video.toString().replace(regex,'');
                    S_CG_M_Video = S_CG_M_Video.slice(0, CG_M_Video.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_Geofencing      = CG_M_Geofencing.toString().replace(regex,'');
                    S_CG_M_Geofencing = S_CG_M_Geofencing.slice(0, CG_M_Geofencing.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_Video_Geofencing= CG_M_Video_Geofencing.toString().replace(regex,'');
                    S_CG_M_Video_Geofencing = S_CG_M_Video_Geofencing.slice(0, CG_M_Video_Geofencing.toString().replace(regex,'').indexOf('('));

                    var S_CG_M_OTT_CTV         = CG_M_OTT_CTV.toString().replace(regex,'');
                    S_CG_M_OTT_CTV = S_CG_M_OTT_CTV.slice(0, CG_M_OTT_CTV.toString().replace(regex,'').indexOf('('));

                        //console.log((((( S_CG_Block_V_1 * S_CG_BW_Display ) / S_CG_RR_Display  )  * S_CG_M_Display)+(((S_CG_Block_V_1 * S_CG_BW_OTT_CTV )  / S_CG_RR_OTT_CTV)  * S_CG_M_OTT_CTV)+(((S_CG_Block_V_1* S_CG_BW_Display)/ S_CG_RR_Geofencing)*S_CG_M_Geofencing)+(((S_CG_Block_V_1*S_CG_BW_Video )/S_CG_RR_Video)*S_CG_M_Video)+(((S_CG_Block_V_1*S_CG_BW_Video_Geofencing)/S_CG_RR_Video_Geofencing)*S_CG_M_Video_Geofencing)));

                        console.log(
                            "GROSS"+
                             S_CG_Block_V_3 +"--"+ S_CG_BW_Display          +"--"+ S_CG_RR_Display          +"--"+S_CG_M_Display+"\n"
                            +S_CG_Block_V_3 +"--"+ S_CG_BW_OTT_CTV          +"--"+ S_CG_RR_OTT_CTV          +"--"+ S_CG_M_OTT_CTV+"\n"
                            +S_CG_Block_V_3 +"--"+ S_CG_BW_Geofencing       +"--"+ S_CG_RR_Geofencing       +"--"+ S_CG_M_Geofencing+"\n"
                            +S_CG_Block_V_3 +"--"+ S_CG_BW_Video            +"--"+ S_CG_RR_Video            +"--"+ S_CG_M_Video+"\n"
                            +S_CG_Block_V_3 +"--"+ S_CG_BW_Video_Geofencing +"--"+ S_CG_RR_Video_Geofencing +"--"+ S_CG_M_Video_Geofencing+"\n"

                        );
                        CG_Block_MCMC_3 =
                            floorOrCeil(
                            ((( S_CG_Block_V_3 * S_CG_BW_Display        ) / S_CG_RR_Display      )* S_CG_M_Display)
                            +(((S_CG_Block_V_3 * S_CG_BW_OTT_CTV        ) / S_CG_RR_OTT_CTV      )* S_CG_M_OTT_CTV)
                            +(((S_CG_Block_V_3 * S_CG_BW_Geofencing     ) / S_CG_RR_Geofencing   )* S_CG_M_Geofencing)
                            +(((S_CG_Block_V_3 * S_CG_BW_Video          ) / S_CG_RR_Video        )* S_CG_M_Video)
                            +(((S_CG_Block_V_3 * S_CG_BW_Video_Geofencing)/ S_CG_RR_Video_Geofencing)* S_CG_M_Video_Geofencing)
                            );

                        return floorOrCeil(
                            ((( S_CG_Block_V_3 * S_CG_BW_Display        ) / S_CG_RR_Display      )* S_CG_M_Display)
                            +(((S_CG_Block_V_3 * S_CG_BW_OTT_CTV        ) / S_CG_RR_OTT_CTV      )* S_CG_M_OTT_CTV)
                            +(((S_CG_Block_V_3 * S_CG_BW_Geofencing     ) / S_CG_RR_Geofencing   )* S_CG_M_Geofencing)
                            +(((S_CG_Block_V_3 * S_CG_BW_Video          ) / S_CG_RR_Video        )* S_CG_M_Video)
                            +(((S_CG_Block_V_3 * S_CG_BW_Video_Geofencing)/ S_CG_RR_Video_Geofencing)* S_CG_M_Video_Geofencing)
                        );
                    }

                    function gross_SC_row_1(){
                        var regex = /[$,%\s]/g;

                        var S_CG_Commission    = CG_Commission.toString().replace(regex,'') / 100;
                        var S_CG_Block_V_1  = CG_Block_V_1.toString().replace(regex,'');

                        console.log("SC-ROW-1 :"+S_CG_Commission);
                        console.log("SC-ROW-1 :"+CG_Block_V_1);
                        console.log("SC-ROW-1 :"+S_CG_Block_V_1);

                        CG_Block_SC_1 = floorOrCeil(S_CG_Commission * S_CG_Block_V_1);
                        return floorOrCeil(S_CG_Commission * S_CG_Block_V_1);
                    }
                    function gross_SC_row_2(){
                        var regex = /[$,%\s]/g;

                        var S_CG_Commission    = CG_Commission.toString().replace(regex,'') / 100;
                        var S_CG_Block_V_2  = CG_Block_V_2.toString().replace(regex,'');
                        //console.log("SC-ROW-2 :"+S_CG_Commission);
                        //console.log("SC-ROW-2 :"+CG_Block_MCMC_2);
                        CG_Block_SC_2 = floorOrCeil(S_CG_Commission * S_CG_Block_V_2);

                        return floorOrCeil(S_CG_Commission * S_CG_Block_V_2);
                    }
                    function gross_SC_row_3(){
                        var regex = /[$,%\s]/g;

                        var S_CG_Commission= CG_Commission.toString().replace(regex,'') / 100;
                        var S_CG_Block_V_3   = CG_Block_V_3.toString().replace(regex,'');

                        CG_Block_SC_3 = floorOrCeil(S_CG_Commission * S_CG_Block_V_3);

                        return floorOrCeil(S_CG_Commission * S_CG_Block_V_3);
                    }

                    function gross_MC_row_1(){
                        var regex = /[$,%\s]/g;
                        var S_CG_Block_V_1  = CG_Block_V_1.toString().replace(regex,'');

                        var S_CG_BW_Display        = CG_BW_Display.toString().replace(regex,'') /100;
                        var S_CG_BW_Geofencing     = CG_BW_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_Video          = CG_BW_Video.toString().replace(regex,'')/100;
                        var S_CG_BW_Video_Geofencing = CG_BW_Video_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_OTT_CTV        = CG_BW_OTT_CTV.toString().replace(regex,'')/100;

                        var S_CG_RR_Display = CG_RR_Display.toString().replace(regex,'');
                        var S_CG_MC_Display = CG_MC_Display.toString().replace(regex,'');

                        var S_CG_RR_OTT_CTV = CG_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CG_MC_OTT_CTV = CG_MC_OTT_CTV.toString().replace(regex,'');

                        var S_CG_RR_Geofencing = CG_RR_Geofencing.toString().replace(regex,'');
                        var S_CG_MC_Geofencing = CG_MC_Geofencing.toString().replace(regex,'');

                        var S_CG_RR_Video = CG_RR_Video.toString().replace(regex,'');
                        var S_CG_MC_Video = CG_MC_Video.toString().replace(regex,'');

                        var S_CG_RR_Video_Geofencing = CG_RR_Video_Geofencing.toString().replace(regex,'');
                        var S_CG_MC_Video_Geofencing = CG_MC_Video_Geofencing.toString().replace(regex,'');

                        CG_Block_MC_1=
                            floorOrCeil(
                            (((S_CG_Block_V_1*S_CG_BW_Display)/S_CG_RR_Display)*S_CG_MC_Display)+
                            (((S_CG_Block_V_1*S_CG_BW_OTT_CTV)/S_CG_RR_OTT_CTV)*S_CG_MC_OTT_CTV)+
                            (((S_CG_Block_V_1*S_CG_BW_Geofencing)/S_CG_RR_Geofencing)*S_CG_MC_Geofencing)+
                            (((S_CG_Block_V_1*S_CG_BW_Video)/S_CG_RR_Video)*S_CG_MC_Video)+
                            (((S_CG_Block_V_1*S_CG_BW_Video_Geofencing)/S_CG_RR_Video_Geofencing)*S_CG_MC_Video_Geofencing)
                            );

                        return floorOrCeil(
                            (((S_CG_Block_V_1*S_CG_BW_Display)/S_CG_RR_Display)*S_CG_MC_Display)+
                            (((S_CG_Block_V_1*S_CG_BW_OTT_CTV)/S_CG_RR_OTT_CTV)*S_CG_MC_OTT_CTV)+
                            (((S_CG_Block_V_1*S_CG_BW_Geofencing)/S_CG_RR_Geofencing)*S_CG_MC_Geofencing)+
                            (((S_CG_Block_V_1*S_CG_BW_Video)/S_CG_RR_Video)*S_CG_MC_Video)+
                            (((S_CG_Block_V_1*S_CG_BW_Video_Geofencing)/S_CG_RR_Video_Geofencing)*S_CG_MC_Video_Geofencing)
                        );
                    }
                    function gross_MC_row_2(){
                        var regex = /[$,%\s]/g;
                        var S_CG_Block_V_2  = CG_Block_V_2.toString().replace(regex,'');

                        var S_CG_BW_Display        = CG_BW_Display.toString().replace(regex,'') /100;
                        var S_CG_BW_Geofencing     = CG_BW_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_Video          = CG_BW_Video.toString().replace(regex,'')/100;
                        var S_CG_BW_Video_Geofencing = CG_BW_Video_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_OTT_CTV        = CG_BW_OTT_CTV.toString().replace(regex,'')/100;

                        var S_CG_RR_Display = CG_RR_Display.toString().replace(regex,'');
                        var S_CG_MC_Display = CG_MC_Display.toString().replace(regex,'');

                        var S_CG_RR_OTT_CTV = CG_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CG_MC_OTT_CTV = CG_MC_OTT_CTV.toString().replace(regex,'');

                        var S_CG_RR_Geofencing = CG_RR_Geofencing.toString().replace(regex,'');
                        var S_CG_MC_Geofencing = CG_MC_Geofencing.toString().replace(regex,'');

                        var S_CG_RR_Video = CG_RR_Video.toString().replace(regex,'');
                        var S_CG_MC_Video = CG_MC_Video.toString().replace(regex,'');

                        var S_CG_RR_Video_Geofencing = CG_RR_Video_Geofencing.toString().replace(regex,'');
                        var S_CG_MC_Video_Geofencing = CG_MC_Video_Geofencing.toString().replace(regex,'');

                        CG_Block_MC_2=floorOrCeil(
                            (((S_CG_Block_V_2*S_CG_BW_Display)/S_CG_RR_Display)*S_CG_MC_Display)+
                            (((S_CG_Block_V_2*S_CG_BW_OTT_CTV)/S_CG_RR_OTT_CTV)*S_CG_MC_OTT_CTV)+
                            (((S_CG_Block_V_2*S_CG_BW_Geofencing)/S_CG_RR_Geofencing)*S_CG_MC_Geofencing)+
                            (((S_CG_Block_V_2*S_CG_BW_Video)/S_CG_RR_Video)*S_CG_MC_Video)+
                            (((S_CG_Block_V_2*S_CG_BW_Video_Geofencing)/S_CG_RR_Video_Geofencing)*S_CG_MC_Video_Geofencing)
                        );

                        return floorOrCeil(
                            (((S_CG_Block_V_2*S_CG_BW_Display)/S_CG_RR_Display)*S_CG_MC_Display)+
                            (((S_CG_Block_V_2*S_CG_BW_OTT_CTV)/S_CG_RR_OTT_CTV)*S_CG_MC_OTT_CTV)+
                            (((S_CG_Block_V_2*S_CG_BW_Geofencing)/S_CG_RR_Geofencing)*S_CG_MC_Geofencing)+
                            (((S_CG_Block_V_2*S_CG_BW_Video)/S_CG_RR_Video)*S_CG_MC_Video)+
                            (((S_CG_Block_V_2*S_CG_BW_Video_Geofencing)/S_CG_RR_Video_Geofencing)*S_CG_MC_Video_Geofencing)
                        );
                    }
                    function gross_MC_row_3(){
                        var regex = /[$,%\s]/g;
                        var S_CG_Block_V_3  = CG_Block_V_3.toString().replace(regex,'');

                        var S_CG_BW_Display        = CG_BW_Display.toString().replace(regex,'') /100;
                        var S_CG_BW_Geofencing     = CG_BW_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_Video          = CG_BW_Video.toString().replace(regex,'')/100;
                        var S_CG_BW_Video_Geofencing = CG_BW_Video_Geofencing.toString().replace(regex,'')/100;
                        var S_CG_BW_OTT_CTV        = CG_BW_OTT_CTV.toString().replace(regex,'')/100;

                        var S_CG_RR_Display = CG_RR_Display.toString().replace(regex,'');
                        var S_CG_MC_Display = CG_MC_Display.toString().replace(regex,'');

                        var S_CG_RR_OTT_CTV = CG_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CG_MC_OTT_CTV = CG_MC_OTT_CTV.toString().replace(regex,'');

                        var S_CG_RR_Geofencing = CG_RR_Geofencing.toString().replace(regex,'');
                        var S_CG_MC_Geofencing = CG_MC_Geofencing.toString().replace(regex,'');

                        var S_CG_RR_Video = CG_RR_Video.toString().replace(regex,'');
                        var S_CG_MC_Video = CG_MC_Video.toString().replace(regex,'');

                        var S_CG_RR_Video_Geofencing = CG_RR_Video_Geofencing.toString().replace(regex,'');
                        var S_CG_MC_Video_Geofencing = CG_MC_Video_Geofencing.toString().replace(regex,'');

                        CG_Block_MC_3=floorOrCeil(
                            (((S_CG_Block_V_3*S_CG_BW_Display)/S_CG_RR_Display)*S_CG_MC_Display)+
                            (((S_CG_Block_V_3*S_CG_BW_OTT_CTV)/S_CG_RR_OTT_CTV)*S_CG_MC_OTT_CTV)+
                            (((S_CG_Block_V_3*S_CG_BW_Geofencing)/S_CG_RR_Geofencing)*S_CG_MC_Geofencing)+
                            (((S_CG_Block_V_3*S_CG_BW_Video)/S_CG_RR_Video)*S_CG_MC_Video)+
                            (((S_CG_Block_V_3*S_CG_BW_Video_Geofencing)/S_CG_RR_Video_Geofencing)*S_CG_MC_Video_Geofencing)
                        );

                        return floorOrCeil(
                            (((S_CG_Block_V_3*S_CG_BW_Display)/S_CG_RR_Display)*S_CG_MC_Display)+
                            (((S_CG_Block_V_3*S_CG_BW_OTT_CTV)/S_CG_RR_OTT_CTV)*S_CG_MC_OTT_CTV)+
                            (((S_CG_Block_V_3*S_CG_BW_Geofencing)/S_CG_RR_Geofencing)*S_CG_MC_Geofencing)+
                            (((S_CG_Block_V_3*S_CG_BW_Video)/S_CG_RR_Video)*S_CG_MC_Video)+
                            (((S_CG_Block_V_3*S_CG_BW_Video_Geofencing)/S_CG_RR_Video_Geofencing)*S_CG_MC_Video_Geofencing)
                        );
                    }

                    function gross_SNR_row_1(){

                        var regex = /[$,%\s]/g;

                        var S_CG_Block_MCMC_1   = CG_Block_MCMC_1.toString().replace(regex,'');
                        var S_CG_Block_SC_1     = CG_Block_SC_1.toString().replace(regex,'');

                        return floorOrCeil(S_CG_Block_MCMC_1 - S_CG_Block_SC_1);
                    }
                    function gross_SNR_row_2(){
                        var regex = /[$,%\s]/g;

                        var S_CG_Block_MCMC_2   = CG_Block_MCMC_2.toString().replace(regex,'');
                        var S_CG_Block_SC_2     = CG_Block_SC_2.toString().replace(regex,'');

                        return floorOrCeil(S_CG_Block_MCMC_2 - S_CG_Block_SC_2);
                    }
                    function gross_SNR_row_3(){
                        var regex = /[$,%\s]/g;

                        var S_CG_Block_MCMC_3   = CG_Block_MCMC_3.toString().replace(regex,'');
                        var S_CG_Block_SC_3     = CG_Block_SC_3.toString().replace(regex,'');

                        return floorOrCeil( S_CG_Block_MCMC_3 - S_CG_Block_SC_3 );
                    }

                    $(document).ready(function () {
                        var GROSS_MARGIN_elementMapping={
                            CG_BW_Display: "CG_BW_Display",
                            CG_BW_Geofencing : "CG_BW_Geofencing",
                            CG_BW_Video:"CG_BW_Video",
                            CG_BW_Video_Geofencing:"CG_BW_Video_Geofencing",
                            CG_BW_OTT_CTV:"CG_BW_OTT_CTV",
                            CG_RR_Display: "CG_RR_Display",
                            CG_RR_Geofencing: "CG_RR_Geofencing",
                            CG_RR_Video: "CG_RR_Video",
                            CG_RR_Video_Geofencing: "CG_RR_Video_Geofencing",
                            CG_RR_OTT_CTV: "CG_RR_OTT_CTV",
                            CG_MC_Display:"CG_MC_Display",
                            CG_MC_Geofencing:"CG_MC_Geofencing",
                            CG_MC_Video:"CG_MC_Video",
                            CG_MC_Video_Geofencing:"CG_MC_Video_Geofencing",
                            CG_MC_OTT_CTV:"CG_MC_OTT_CTV",
                            CG_Commission:"CG_Commission",

                            CG_M_Display:"CG_M_Display",
                            CG_M_Geofencing:"CG_M_Geofencing",
                            CG_M_Video:"CG_M_Video",
                            CG_M_Video_Geofencing: "CG_M_Video_Geofencing",
                            CG_M_OTT_CTV: "CG_M_OTT_CTV"

                        }
                        var GROSS_ABSV_elementMapping={
                            CG_Block_V_1: "CG_Block_V_1",
                            CG_Block_V_2: "CG_Block_V_2",
                            CG_Block_V_3: "CG_Block_V_3"
                        }

                        $("#CG_Block_MCMC_1").text("$" + gross_MCMC_row_1().toFixed(2));
                        $("#CG_Block_MCMC_2").text("$" + gross_MCMC_row_2().toFixed(2));
                        $("#CG_Block_MCMC_3").text("$" + gross_MCMC_row_3().toFixed(2));
                        $("#CG_Block_SC_1").text("$" + gross_SC_row_1().toFixed(2));
                        $("#CG_Block_SC_2").text("$" + gross_SC_row_2().toFixed(2));
                        $("#CG_Block_SC_3").text("$" + gross_SC_row_3().toFixed(2));
                        $("#CG_Block_MC_1").text("$" + gross_MC_row_1().toFixed(2));
                        $("#CG_Block_MC_2").text("$" + gross_MC_row_2().toFixed(2));
                        $("#CG_Block_MC_3").text("$" + gross_MC_row_3().toFixed(2));
                        $("#CG_Block_SNR_1").text("$" + gross_SNR_row_1().toFixed(2));
                        $("#CG_Block_SNR_2").text("$" + gross_SNR_row_2().toFixed(2));
                        $("#CG_Block_SNR_3").text("$" + gross_SNR_row_3().toFixed(2));

                        function GROSS_MARGIN_updateVariables_keyup() {

                            console.log("Current ID After KeyUp :" + $(this).attr("id"));
                            var current_id = $(this).attr("id");

                            for (var variable in GROSS_MARGIN_elementMapping) {
                                // getting the matched value and updating the variable
                                var elementID = GROSS_MARGIN_elementMapping[variable];
                                window[variable] = $("#" + elementID).val();

                                // console.log("==="+ $("#"+ elementID).attr("id"));    // printing current id

                            }
                            //console.log("Updated on keyup variables:", CN_RR_Display, CN_RR_Geofencing, CN_RR_Video, CN_RR_Video_Geofencing, CN_RR_OTT_CTV);
                            //console.log("Updated on keyup variables:", CN_MC_Display, CN_MC_Geofencing, CN_MC_Video, CN_MC_Video_Geofencing, CN_MC_OTT_CTV);

                            if(current_id == "CG_RR_Display" || current_id == "CG_MC_Display"){
// get NET - Display - Margin and Margin Percentage
                                $("#CG_M_Display").val("$" + gross_margin_display()+" ("+gross_margin_display_p()+"%)");
                            }
                            if(current_id=="CG_RR_Geofencing" || current_id == "CG_MC_Geofencing"){
// get NET - Geofencing - Margin and Margin Percentage
                                $("#CG_M_Geofencing").val("$" + gross_margin_geofencing()+ " ("+gross_margin_geofencing_p()+"%)");
                            }
                            if(current_id=="CG_RR_Video" || current_id == "CG_MC_Video"){
// get NET - Video - Margin and Margin Percentage
                                $("#CG_M_Video").val("$" + gross_margin_video()+ " ("+gross_margin_video_p()+"%)");
                            }
                            if(current_id=="CG_RR_Video_Geofencing" || current_id == "CG_MC_Video_Geofencing"){
// get NET - Video Geofencing - Margin and Margin Percentage
                                $("#CG_M_Video_Geofencing").val("$" + gross_margin_video_geofencing()+ " ("+gross_margin_video_geofencing_p()+"%)");
                            }
                            if(current_id=="CG_RR_OTT_CTV" || current_id == "CG_MC_OTT_CTV"){
// get NET - Video Geofencing - Margin and Margin Percentage
                                $("#CG_M_OTT_CTV").val("$" + gross_margin_ott_ctv()+ " ("+gross_margin_ott_ctv_p()+"%)");
                            }

                            /*
                            for (let i = 0; i < 5; i++) {
                                var result = Commission_Net_Margin(Net_Retail_Rate_Array, Net_Media_Cost_Array, i);
                                console.log(`Result ${i + 1}:`, result);
                            }
                            */
                            if( current_id=="CG_Commission" || current_id == "CG_BW_Display" || current_id == "CG_BW_Geofencing" ||
                                current_id == "CG_BW_Video" || current_id == "CG_BW_Video_Geofencing" || current_id ==  "CG_BW_OTT_CTV"){
// get NET - Display - Margin and Margin Percentage
                                //$("#CN_Block_MCMC_1").text("$" + net_MCMC_row_1().toFixed(2));
                                $("#CG_Block_MCMC_1").text("$" + gross_MCMC_row_1());
                                $("#CG_Block_MC_1").text("$" + gross_MC_row_1().toFixed(2));
                                $("#CG_Block_SC_1").text("$" + gross_SC_row_1().toFixed(2));
                                $("#CG_Block_SNR_1").text("$" + gross_SNR_row_1().toFixed(2));

                                $("#CG_Block_MCMC_2").text("$" + gross_MCMC_row_2().toFixed(2));
                                $("#CG_Block_MC_2").text("$" + gross_MC_row_2().toFixed(2));
                                $("#CG_Block_SC_2").text("$" + gross_SC_row_2().toFixed(2));
                                $("#CG_Block_SNR_2").text("$" + gross_SNR_row_2().toFixed(2));

                                $("#CG_Block_MCMC_3").text("$" + gross_MCMC_row_3().toFixed(2));
                                $("#CG_Block_MC_3").text("$" + gross_MC_row_3().toFixed(2));
                                $("#CG_Block_SC_3").text("$" + gross_SC_row_3().toFixed(2));
                                $("#CG_Block_SNR_3").text("$" + gross_SNR_row_3().toFixed(2));
                            }


                        }
                        function GROSS_MARGIN_updateVariables_blur() {

                            console.log("Current ID after Blur :" + $(this).attr("id"));
                            var current_id = $(this).attr("id");


                            for (var variable in GROSS_MARGIN_elementMapping) {
                                var elementID = GROSS_MARGIN_elementMapping[variable];
                                window[variable] = $("#" + elementID).val();

                                var inputValue = $("#" + elementID).val();
                                var parsedValue = parseFloat(inputValue); // Parse the input value to a floating-point number
                                if (!isNaN(parsedValue))
                                {
                                    if (keywords_gross.includes(current_id))
                                    {
                                        console.log("got a matched value");
                                        $("#" + elementID).val(parsedValue.toFixed(2)+ "%");
                                    }else
                                    {
                                        $("#" + elementID).val("$" + parsedValue.toFixed(2)); // Add the dollar sign and format the number with 2 decimal places
                                    }
                                }

                            }
                            //console.log("Updated on blur variables:", CN_RR_Display, CN_RR_Geofencing, CN_RR_Video, CN_RR_Video_Geofencing, CN_RR_OTT_CTV);
                            //console.log("Updated on blur variables:", CN_MC_Display, CN_MC_Geofencing, CN_MC_Video, CN_MC_Video_Geofencing, CN_MC_OTT_CTV);

                            // call dependent functions

                            if(current_id == "CG_RR_Display" || current_id == "CG_MC_Display"){
// get NET - Display - Margin and Margin Percentage
                                $("#CG_M_Display").val("$" + gross_margin_display()+" ("+gross_margin_display_p()+"%)");
                            }
                            if(current_id=="CG_RR_Geofencing" || current_id == "CG_MC_Geofencing"){
// get NET - Geofencing - Margin and Margin Percentage
                                $("#CG_M_Geofencing").val("$" + gross_margin_geofencing()+ " ("+gross_margin_geofencing_p()+"%)");
                            }
                            if(current_id=="CG_RR_Video" || current_id == "CG_MC_Video"){
// get NET - Video - Margin and Margin Percentage
                                $("#CG_M_Video").val("$" + gross_margin_video()+ " ("+gross_margin_video_p()+"%)");
                            }
                            if(current_id=="CG_RR_Video_Geofencing" || current_id == "CG_MC_Video_Geofencing"){
// get NET - Video Geofencing - Margin and Margin Percentage
                                $("#CG_M_Video_Geofencing").val("$" + gross_margin_video_geofencing()+ " ("+gross_margin_video_geofencing_p()+"%)");
                            }
                            if(current_id=="CG_RR_OTT_CTV" || current_id == "CG_MC_OTT_CTV"){
// get NET - Video Geofencing - Margin and Margin Percentage
                                $("#CG_M_OTT_CTV").val("$" + gross_margin_ott_ctv()+ " ("+gross_margin_ott_ctv_p()+"%)");
                            }

                        }

                        function GROSS_ABSV_keyup() {

                            console.log("Current ID After KeyUp :" + $(this).attr("id"));
                            var current_id = $(this).attr("id");

                            for (var variable in GROSS_ABSV_elementMapping) {
                                // getting the matched value and updating the variable
                                var elementID = GROSS_ABSV_elementMapping[variable];
                                window[variable] = $("#" + elementID).val();

                                // console.log("==="+ $("#"+ elementID).attr("id"));    // printing current id

                            }
                            //console.log("Updated on keyup variables:", CN_RR_Display, CN_RR_Geofencing, CN_RR_Video, CN_RR_Video_Geofencing, CN_RR_OTT_CTV);
                            //console.log("Updated on keyup variables:", CN_MC_Display, CN_MC_Geofencing, CN_MC_Video, CN_MC_Video_Geofencing, CN_MC_OTT_CTV);

                            if(current_id == "CG_Block_V_1"){
// get NET - Display - Margin and Margin Percentage
                                $("#CG_Block_MCMC_1").text("$" + gross_MCMC_row_1().toFixed(2));
                                $("#CG_Block_SC_1").text("$" + gross_SC_row_1().toFixed(2));
                                $("#CG_Block_MC_1").text("$" + gross_MC_row_1().toFixed(2));
                                $("#CG_Block_SNR_1").text("$"+ gross_SNR_row_1().toFixed(2));
                            }
                            if(current_id=="CG_Block_V_2"){
// get NET - Geofencing - Margin and Margin Percentage
                                $("#CG_Block_MCMC_2").text("$"+ gross_MCMC_row_2().toFixed(2));
                                $("#CG_Block_SC_2").text("$" + gross_SC_row_2().toFixed(2));
                                $("#CG_Block_MC_2").text("$" + gross_MC_row_2().toFixed(2));
                                $("#CG_Block_SNR_2").text("$"+ gross_SNR_row_2().toFixed(2));
                            }
                            if(current_id=="CG_Block_V_3"){
// get NET - Video - Margin and Margin Percentage
                                $("#CG_Block_MCMC_3").text("$" + gross_MCMC_row_3().toFixed(2));
                                $("#CG_Block_SC_3").text("$"   + gross_SC_row_3().toFixed(2));
                                $("#CG_Block_MC_3").text("$"   + gross_MC_row_3().toFixed(2));
                                $("#CG_Block_SNR_3").text("$"  + gross_SNR_row_3().toFixed(2));
                            }

                        }
                        function GROSS_ABSV_blur() {

                            console.log("Current ID after Blur :" + $(this).attr("id"));
                            var current_id = $(this).attr("id");


                            for (var variable in GROSS_ABSV_elementMapping) {
                                var elementID = GROSS_ABSV_elementMapping[variable];
                                window[variable] = $("#" + elementID).val();

                                var inputValue = $("#" + elementID).val();
                                var parsedValue = parseFloat(inputValue); // Parse the input value to a floating-point number
                                if (!isNaN(parsedValue)) {
                                    $("#" + elementID).val("$" + parsedValue.toFixed(2)); // Add the dollar sign and format the number with 2 decimal places
                                }

                            }
                            //console.log("Updated on blur variables:", CN_RR_Display, CN_RR_Geofencing, CN_RR_Video, CN_RR_Video_Geofencing, CN_RR_OTT_CTV);
                            //console.log("Updated on blur variables:", CN_MC_Display, CN_MC_Geofencing, CN_MC_Video, CN_MC_Video_Geofencing, CN_MC_OTT_CTV);

                            // call dependent functions

                            if(current_id == "CG_Block_V_1"){
// get NET - Display - Margin and Margin Percentage
                                $("#CG_Block_MCMC_1").text("$" + gross_MCMC_row_1().toFixed(2));
                                $("#CG_Block_SC_1").text("$"   + gross_SC_row_1().toFixed(2));
                                $("#CG_Block_MC_1").text("$"   + gross_MC_row_1().toFixed(2));
                                $("#CG_Block_SNR_1").text("$"  + gross_SNR_row_1().toFixed(2));
                            }
                            if(current_id=="CG_Block_V_2"){
// get NET - Geofencing - Margin and Margin Percentage
                                $("#CG_Block_MCMC_2").text("$"+ gross_MCMC_row_2().toFixed(2));
                                $("#CG_Block_SC_2").text("$"  + gross_SC_row_2().toFixed(2));
                                $("#CG_Block_MC_2").text("$"  + gross_MC_row_2().toFixed(2));
                                $("#CG_Block_SNR_2").text("$" + gross_SNR_row_2().toFixed(2));
                            }
                            if(current_id=="CG_Block_V_3"){
// get NET - Video - Margin and Margin Percentage
                                $("#CG_Block_MCMC_3").text("$"+ gross_MCMC_row_3().toFixed(2));
                                $("#CG_Block_SC_3").text("$" +  gross_SC_row_3().toFixed(2));
                                $("#CG_Block_MC_3").text("$" +  gross_MC_row_3().toFixed(2));
                                $("#CG_Block_SNR_3").text("$" + gross_SNR_row_3().toFixed(2));
                            }

                        }

                        for (var variable in GROSS_MARGIN_elementMapping)
                        {
                            var elementID = GROSS_MARGIN_elementMapping[variable];

                            //$("#" + elementID).on("keyup blur", updateVariables);
                            $("#" + elementID).on("keyup", GROSS_MARGIN_updateVariables_keyup);
                            $("#" + elementID).on("blur", GROSS_MARGIN_updateVariables_blur);

                        }
                        for (var variable in GROSS_ABSV_elementMapping)
                        {
                            var elementID = GROSS_ABSV_elementMapping[variable];

                            //$("#" + elementID).on("keyup blur", updateVariables);
                            $("#" + elementID).on("keyup", GROSS_ABSV_keyup);
                            $("#" + elementID).on("blur",  GROSS_ABSV_blur);

                        }


                    });
