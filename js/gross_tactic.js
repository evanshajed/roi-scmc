
                    //  G R O S S    TACTIC

CGT_BW_Display=0.60;   CGT_BW_Geofencing=0.05;  CGT_BW_Video=0.20; CGT_BW_Video_Geofencing=0.05; CGT_BW_OTT_CTV=0.10;
CGT_RR_Display=12;     CGT_RR_Geofencing=15;    CGT_RR_Video=22;   CGT_RR_Video_Geofencing=26;   CGT_RR_OTT_CTV=33;
CGT_MC_Display=4.25;   CGT_MC_Geofencing=5;     CGT_MC_Video=12.5; CGT_MC_Video_Geofencing=13.50;CGT_MC_OTT_CTV=17;
CGT_M_Display=7.75;    CGT_M_Geofencing=10;     CGT_M_Video=9.50;  CGT_M_Video_Geofencing =12.50;CGT_M_OTT_CTV=16;

// commission %:

CGT_Commission_D=0.10;    CGT_Commission_G=0.15;    CGT_Commission_V=0.05;    CGT_Commission_VG=0.04;    CGT_Commission_OC=0.05;

CGT_Block_V_1=10000; let CGT_Block_MCMC_1=0;  let CGT_Block_SC_1=0;    let CGT_Block_MC_1=0;    let CGT_Block_SNR_1=0;
CGT_Block_V_2=30000; let CGT_Block_MCMC_2=0;  let CGT_Block_SC_2=0;    let CGT_Block_MC_2=0;    let CGT_Block_SNR_2=0;
CGT_Block_V_3=50000; let CGT_Block_MCMC_3=0;  let CGT_Block_SC_3=0;    let CGT_Block_MC_3=0;    let CGT_Block_SNR_3=0;


///////////////////////////////////////////////////////////////////////////////////
function tactic_gross_margin_display(){

    var regex = /[$,\s]/g;
    var CGT_RR_Display_stripped = CGT_RR_Display.replace(regex, '');
    var CGT_MC_Display_stripped = CGT_MC_Display.replace(regex, '');
    //console.log (CN_RR_Display_stripped - CN_MC_Display_stripped);
    return (CGT_RR_Display_stripped - CGT_MC_Display_stripped).toFixed(2);
}
function tactic_gross_margin_display_p(){
    var regex = /[$,\s]/g;
    var margin_percentage = tactic_gross_margin_display() / CGT_RR_Display.replace(regex,'');

    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    //console.log( percent.toFixed(2));

    return percent.toFixed(2);
}
///////////////////////////////////////////////////////////////////////////////////
function tactic_gross_margin_geofencing(){
    var regex = /[$,\s]/g;
    var CGT_RR_Geofencing_stripped = CGT_RR_Geofencing.replace(regex,'');
    var CGT_MC_Geofencing_stripped = CGT_MC_Geofencing.replace(regex,'');

    return (CGT_RR_Geofencing_stripped - CGT_MC_Geofencing_stripped);
}
function tactic_gross_margin_geofencing_p(){
    var regex = /[$,\s]/g;
    var margin_percentage = tactic_gross_margin_geofencing() / CGT_RR_Geofencing.replace(regex,'');

    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    //console.log( percent.toFixed(2));

    return percent.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////
function tactic_gross_margin_video(){
    var regex = /[$,\s]/g;
    var CGT_RR_Video_stripped = CGT_RR_Video.replace(regex,'');
    var CGT_MC_Video_stripped = CGT_MC_Video.replace(regex,'');

    return (CGT_RR_Video_stripped - CGT_MC_Video_stripped);
}
function tactic_gross_margin_video_p(){
    var regex = /[$,\s]/g;
    var margin_percentage = tactic_gross_margin_video() / CGT_RR_Video.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    return percent.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////
function tactic_gross_margin_video_geofencing(){
    var regex = /[$,\s]/g;
    var CGT_RR_Video_Geofencing_stripped = CGT_RR_Video_Geofencing.replace(regex,'');
    var CGT_MC_Video_Geofencing_stripped = CGT_MC_Video_Geofencing.replace(regex,'');
    return (CGT_RR_Video_Geofencing_stripped - CGT_MC_Video_Geofencing_stripped);
}
function tactic_gross_margin_video_geofencing_p(){
    var regex = /[$,\s]/g;
    var margin_percentage = tactic_gross_margin_video_geofencing() / CGT_RR_Video_Geofencing.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;

    return percent.toFixed(2);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tactic_gross_margin_ott_ctv(){
    var regex = /[$,\s]/g;
    var CGT_RR_OTT_CTV_stripped = CGT_RR_OTT_CTV.replace(regex,'');
    var CGT_MC_OTT_CTV_stripped = CGT_MC_OTT_CTV.replace(regex,'');
    return (CGT_RR_OTT_CTV_stripped - CGT_MC_OTT_CTV_stripped);
}
function tactic_gross_margin_ott_ctv_p(){
    var regex = /[$,\s]/g;
    var margin_percentage = tactic_gross_margin_ott_ctv() / CGT_RR_OTT_CTV.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;

    return percent.toFixed(2);
}
///////////////////////////////////////////////////////////////////////////////////


                    function tactic_gross_MCMC_row_1(){
                        var regex = /[$,\s]/g;
                        var S_CGT_Block_V_1        = CGT_Block_V_1.toString().replace(regex,'');
                        var S_CGT_BW_Geofencing    = CGT_BW_Geofencing.toString().replace(regex,'');
                        var S_CGT_BW_Display        = CGT_BW_Display.toString().replace(regex,'');
                        var S_CGT_RR_Display        = CGT_RR_Display.toString().replace(regex,'');
                        var S_CGT_M_Display         = CGT_M_Display.toString().replace(regex,'');
                        var S_CGT_BW_OTT_CTV        = CGT_BW_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_RR_OTT_CTV        = CGT_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_M_OTT_CTV         = CGT_M_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_RR_Geofencing     = CGT_RR_Geofencing.toString().replace(regex,'');
                        var S_CGT_M_Geofencing      = CGT_M_Geofencing.toString().replace(regex,'');
                        var S_CGT_BW_Video          = CGT_BW_Video.toString().replace(regex,'');
                        var S_CGT_RR_Video          = CGT_RR_Video.toString().replace(regex,'');
                        var S_CGT_M_Video            = CGT_M_Video.toString().replace(regex,'');
                        var S_CGT_BW_Video_Geofencing = CGT_BW_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_RR_Video_Geofencing = CGT_RR_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_M_Video_Geofencing  = CGT_M_Video_Geofencing.toString().replace(regex,'');

                        //console.log((((( S_CGT_Block_V_1 * S_CGT_BW_Display ) / S_CGT_RR_Display  )  * S_CGT_M_Display)+(((S_CGT_Block_V_1 * S_CGT_BW_OTT_CTV )  / S_CGT_RR_OTT_CTV)  * S_CGT_M_OTT_CTV)+(((S_CGT_Block_V_1* S_CGT_BW_Display)/ S_CGT_RR_Geofencing)*S_CGT_M_Geofencing)+(((S_CGT_Block_V_1*S_CGT_BW_Video )/S_CGT_RR_Video)*S_CGT_M_Video)+(((S_CGT_Block_V_1*S_CGT_BW_Video_Geofencing)/S_CGT_RR_Video_Geofencing)*S_CGT_M_Video_Geofencing)));


                        console.log(
                            "GROSS---TACTIC"+
                            S_CGT_Block_V_1 +"--"+ S_CGT_BW_Display          +"--"+ S_CGT_RR_Display          +"--"+S_CGT_M_Display+"\n"
                            +S_CGT_Block_V_1 +"--"+ S_CGT_BW_OTT_CTV          +"--"+ S_CGT_RR_OTT_CTV          +"--"+ S_CGT_M_OTT_CTV+"\n"
                            +S_CGT_Block_V_1 +"--"+ S_CGT_BW_Geofencing       +"--"+ S_CGT_RR_Geofencing       +"--"+ S_CGT_M_Geofencing+"\n"
                            +S_CGT_Block_V_1 +"--"+ S_CGT_BW_Video            +"--"+ S_CGT_RR_Video            +"--"+ S_CGT_M_Video+"\n"
                            +S_CGT_Block_V_1 +"--"+ S_CGT_BW_Video_Geofencing +"--"+ S_CGT_RR_Video_Geofencing +"--"+ S_CGT_M_Video_Geofencing+"\n"

                        );


                        CGT_Block_MCMC_1 =
                            ((( S_CGT_Block_V_1 * S_CGT_BW_Display        ) / S_CGT_RR_Display      )* S_CGT_M_Display)
                            +(((S_CGT_Block_V_1 * S_CGT_BW_OTT_CTV        ) / S_CGT_RR_OTT_CTV      )* S_CGT_M_OTT_CTV)
                            +(((S_CGT_Block_V_1 * S_CGT_BW_Geofencing     ) / S_CGT_RR_Geofencing   )* S_CGT_M_Geofencing)
                            +(((S_CGT_Block_V_1 * S_CGT_BW_Video          ) / S_CGT_RR_Video        )* S_CGT_M_Video)
                            +(((S_CGT_Block_V_1 * S_CGT_BW_Video_Geofencing)/ S_CGT_RR_Video_Geofencing)* S_CGT_M_Video_Geofencing);

                        return (
                            ((( S_CGT_Block_V_1 * S_CGT_BW_Display         ) / S_CGT_RR_Display          )* S_CGT_M_Display)
                            +(((S_CGT_Block_V_1 * S_CGT_BW_OTT_CTV         ) / S_CGT_RR_OTT_CTV          )* S_CGT_M_OTT_CTV)
                            +(((S_CGT_Block_V_1 * S_CGT_BW_Geofencing      ) / S_CGT_RR_Geofencing       )* S_CGT_M_Geofencing)
                            +(((S_CGT_Block_V_1 * S_CGT_BW_Video           ) / S_CGT_RR_Video            )* S_CGT_M_Video)
                            +(((S_CGT_Block_V_1 * S_CGT_BW_Video_Geofencing) / S_CGT_RR_Video_Geofencing )* S_CGT_M_Video_Geofencing)
                        );
                    }
                    function tactic_gross_MCMC_row_2(){
                        var regex = /[$,\s]/g;
                        var S_CGT_Block_V_2         = CGT_Block_V_2.toString().replace(regex,'');
                        var S_CGT_BW_Geofencing     = CGT_BW_Geofencing.toString().replace(regex,'');
                        var S_CGT_BW_Display        = CGT_BW_Display.toString().replace(regex,'');
                        var S_CGT_RR_Display        = CGT_RR_Display.toString().replace(regex,'');
                        var S_CGT_M_Display         = CGT_M_Display.toString().replace(regex,'');
                        var S_CGT_BW_OTT_CTV        = CGT_BW_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_RR_OTT_CTV        = CGT_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_M_OTT_CTV         = CGT_M_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_RR_Geofencing     = CGT_RR_Geofencing.toString().replace(regex,'');
                        var S_CGT_M_Geofencing      = CGT_M_Geofencing.toString().replace(regex,'');
                        var S_CGT_BW_Video          = CGT_BW_Video.toString().replace(regex,'');
                        var S_CGT_RR_Video          = CGT_RR_Video.toString().replace(regex,'');
                        var S_CGT_M_Video           = CGT_M_Video.toString().replace(regex,'');
                        var S_CGT_BW_Video_Geofencing = CGT_BW_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_RR_Video_Geofencing = CGT_RR_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_M_Video_Geofencing  = CGT_M_Video_Geofencing.toString().replace(regex,'');

                        //console.log((((( S_CGT_Block_V_1 * S_CGT_BW_Display ) / S_CGT_RR_Display  )  * S_CGT_M_Display)+(((S_CGT_Block_V_1 * S_CGT_BW_OTT_CTV )  / S_CGT_RR_OTT_CTV)  * S_CGT_M_OTT_CTV)+(((S_CGT_Block_V_1* S_CGT_BW_Display)/ S_CGT_RR_Geofencing)*S_CGT_M_Geofencing)+(((S_CGT_Block_V_1*S_CGT_BW_Video )/S_CGT_RR_Video)*S_CGT_M_Video)+(((S_CGT_Block_V_1*S_CGT_BW_Video_Geofencing)/S_CGT_RR_Video_Geofencing)*S_CGT_M_Video_Geofencing)));

                        CGT_Block_MCMC_2 =
                            ((( S_CGT_Block_V_2 * S_CGT_BW_Display        ) / S_CGT_RR_Display      )* S_CGT_M_Display)
                            +(((S_CGT_Block_V_2 * S_CGT_BW_OTT_CTV        ) / S_CGT_RR_OTT_CTV      )* S_CGT_M_OTT_CTV)
                            +(((S_CGT_Block_V_2 * S_CGT_BW_Geofencing     ) / S_CGT_RR_Geofencing   )* S_CGT_M_Geofencing)
                            +(((S_CGT_Block_V_2 * S_CGT_BW_Video          ) / S_CGT_RR_Video        )* S_CGT_M_Video)
                            +(((S_CGT_Block_V_2 * S_CGT_BW_Video_Geofencing)/ S_CGT_RR_Video_Geofencing)* S_CGT_M_Video_Geofencing);


                        console.log(
                            "GROSS---TACTIC"+
                            S_CGT_Block_V_2 +"--"+ S_CGT_BW_Display          +"--"+ S_CGT_RR_Display          +"--"+S_CGT_M_Display+"\n"
                            +S_CGT_Block_V_2 +"--"+ S_CGT_BW_OTT_CTV          +"--"+ S_CGT_RR_OTT_CTV          +"--"+ S_CGT_M_OTT_CTV+"\n"
                            +S_CGT_Block_V_2 +"--"+ S_CGT_BW_Geofencing       +"--"+ S_CGT_RR_Geofencing       +"--"+ S_CGT_M_Geofencing+"\n"
                            +S_CGT_Block_V_2 +"--"+ S_CGT_BW_Video            +"--"+ S_CGT_RR_Video            +"--"+ S_CGT_M_Video+"\n"
                            +S_CGT_Block_V_2 +"--"+ S_CGT_BW_Video_Geofencing +"--"+ S_CGT_RR_Video_Geofencing +"--"+ S_CGT_M_Video_Geofencing+"\n"

                        );

                        return (
                            ((( S_CGT_Block_V_2 * S_CGT_BW_Display        ) / S_CGT_RR_Display     )* S_CGT_M_Display)
                            +(((S_CGT_Block_V_2 * S_CGT_BW_OTT_CTV        ) / S_CGT_RR_OTT_CTV     )* S_CGT_M_OTT_CTV)
                            +(((S_CGT_Block_V_2 * S_CGT_BW_Geofencing     ) / S_CGT_RR_Geofencing  )* S_CGT_M_Geofencing)
                            +(((S_CGT_Block_V_2 * S_CGT_BW_Video          ) / S_CGT_RR_Video       )* S_CGT_M_Video)
                            +(((S_CGT_Block_V_2 * S_CGT_BW_Video_Geofencing) / S_CGT_RR_Video_Geofencing )* S_CGT_M_Video_Geofencing)
                        );
                    }
                    function tactic_gross_MCMC_row_3(){
                        var regex = /[$,\s]/g;
                        var S_CGT_Block_V_3         = CGT_Block_V_3.toString().replace(regex,'');
                        var S_CGT_BW_Geofencing     = CGT_BW_Geofencing.toString().replace(regex,'');
                        var S_CGT_BW_Display        = CGT_BW_Display.toString().replace(regex,'');
                        var S_CGT_RR_Display        = CGT_RR_Display.toString().replace(regex,'');
                        var S_CGT_M_Display         = CGT_M_Display.toString().replace(regex,'');
                        var S_CGT_BW_OTT_CTV        = CGT_BW_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_RR_OTT_CTV        = CGT_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_M_OTT_CTV         = CGT_M_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_RR_Geofencing     = CGT_RR_Geofencing.toString().replace(regex,'');
                        var S_CGT_M_Geofencing      = CGT_M_Geofencing.toString().replace(regex,'');
                        var S_CGT_BW_Video          = CGT_BW_Video.toString().replace(regex,'');
                        var S_CGT_RR_Video          = CGT_RR_Video.toString().replace(regex,'');
                        var S_CGT_M_Video           = CGT_M_Video.toString().replace(regex,'');
                        var S_CGT_BW_Video_Geofencing = CGT_BW_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_RR_Video_Geofencing = CGT_RR_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_M_Video_Geofencing  = CGT_M_Video_Geofencing.toString().replace(regex,'');

                        //console.log((((( S_CGT_Block_V_1 * S_CGT_BW_Display ) / S_CGT_RR_Display  )  * S_CGT_M_Display)+(((S_CGT_Block_V_1 * S_CGT_BW_OTT_CTV )  / S_CGT_RR_OTT_CTV)  * S_CGT_M_OTT_CTV)+(((S_CGT_Block_V_1* S_CGT_BW_Display)/ S_CGT_RR_Geofencing)*S_CGT_M_Geofencing)+(((S_CGT_Block_V_1*S_CGT_BW_Video )/S_CGT_RR_Video)*S_CGT_M_Video)+(((S_CGT_Block_V_1*S_CGT_BW_Video_Geofencing)/S_CGT_RR_Video_Geofencing)*S_CGT_M_Video_Geofencing)));

                        console.log(
                            "GROSS---TACTIC"+
                            S_CGT_Block_V_3 +"--"+ S_CGT_BW_Display           +"--"+ S_CGT_RR_Display          +"--"+S_CGT_M_Display+"\n"
                            +S_CGT_Block_V_3 +"--"+ S_CGT_BW_OTT_CTV          +"--"+ S_CGT_RR_OTT_CTV          +"--"+ S_CGT_M_OTT_CTV+"\n"
                            +S_CGT_Block_V_3 +"--"+ S_CGT_BW_Geofencing       +"--"+ S_CGT_RR_Geofencing       +"--"+ S_CGT_M_Geofencing+"\n"
                            +S_CGT_Block_V_3 +"--"+ S_CGT_BW_Video            +"--"+ S_CGT_RR_Video            +"--"+ S_CGT_M_Video+"\n"
                            +S_CGT_Block_V_3 +"--"+ S_CGT_BW_Video_Geofencing +"--"+ S_CGT_RR_Video_Geofencing +"--"+ S_CGT_M_Video_Geofencing+"\n"

                        );

                        CGT_Block_MCMC_3 =
                            ((( S_CGT_Block_V_3 * S_CGT_BW_Display        ) / S_CGT_RR_Display      )* S_CGT_M_Display)
                            +(((S_CGT_Block_V_3 * S_CGT_BW_OTT_CTV        ) / S_CGT_RR_OTT_CTV      )* S_CGT_M_OTT_CTV)
                            +(((S_CGT_Block_V_3 * S_CGT_BW_Geofencing     ) / S_CGT_RR_Geofencing   )* S_CGT_M_Geofencing)
                            +(((S_CGT_Block_V_3 * S_CGT_BW_Video          ) / S_CGT_RR_Video        )* S_CGT_M_Video)
                            +(((S_CGT_Block_V_3 * S_CGT_BW_Video_Geofencing)/ S_CGT_RR_Video_Geofencing)* S_CGT_M_Video_Geofencing);

                        return (
                            ((( S_CGT_Block_V_3 * S_CGT_BW_Display        ) / S_CGT_RR_Display      )* S_CGT_M_Display)
                            +(((S_CGT_Block_V_3 * S_CGT_BW_OTT_CTV        ) / S_CGT_RR_OTT_CTV      )* S_CGT_M_OTT_CTV)
                            +(((S_CGT_Block_V_3 * S_CGT_BW_Geofencing     ) / S_CGT_RR_Geofencing   )* S_CGT_M_Geofencing)
                            +(((S_CGT_Block_V_3 * S_CGT_BW_Video          ) / S_CGT_RR_Video        )* S_CGT_M_Video)
                            +(((S_CGT_Block_V_3 * S_CGT_BW_Video_Geofencing)/ S_CGT_RR_Video_Geofencing)* S_CGT_M_Video_Geofencing)
                        );
                    }

                    function tactic_gross_SC_row_1(){
                        var regex = /[$,\s]/g;

                        var S_CGT_Commission_D   = CGT_Commission_D.toString().replace(regex,'');
                        var S_CGT_Commission_G   = CGT_Commission_G.toString().replace(regex,'');
                        var S_CGT_Commission_V   = CGT_Commission_V.toString().replace(regex,'');
                        var S_CGT_Commission_VG  = CGT_Commission_VG.toString().replace(regex,'');
                        var S_CGT_Commission_OC  = CGT_Commission_OC.toString().replace(regex,'');

                        var S_CGT_Block_MCMC_1   = CGT_Block_MCMC_1.toString().replace(regex,'');

                        CGT_Block_SC_1 =
                            (
                                (S_CGT_Commission_D * S_CGT_Block_MCMC_1)+
                                (S_CGT_Commission_G * S_CGT_Block_MCMC_1)+
                                (S_CGT_Commission_V * S_CGT_Block_MCMC_1)+
                                (S_CGT_Commission_VG * S_CGT_Block_MCMC_1)+
                                (S_CGT_Commission_OC * S_CGT_Block_MCMC_1)
                            );
                        return (
                            (S_CGT_Commission_D * S_CGT_Block_MCMC_1)+
                            (S_CGT_Commission_G * S_CGT_Block_MCMC_1)+
                            (S_CGT_Commission_V * S_CGT_Block_MCMC_1)+
                            (S_CGT_Commission_VG * S_CGT_Block_MCMC_1)+
                            (S_CGT_Commission_OC * S_CGT_Block_MCMC_1)
                        );
                    }
                    function tactic_gross_SC_row_2(){
                        var regex = /[$,\s]/g;

                        var S_CGT_Commission_D   = CGT_Commission_D.toString().replace(regex,'');
                        var S_CGT_Commission_G   = CGT_Commission_G.toString().replace(regex,'');
                        var S_CGT_Commission_V   = CGT_Commission_V.toString().replace(regex,'');
                        var S_CGT_Commission_VG  = CGT_Commission_VG.toString().replace(regex,'');
                        var S_CGT_Commission_OC  = CGT_Commission_OC.toString().replace(regex,'');

                        var S_CGT_Block_MCMC_2   = CGT_Block_MCMC_2.toString().replace(regex,'');

                        CGT_Block_SC_2 =
                            (
                                (S_CGT_Commission_D * S_CGT_Block_MCMC_2)+
                                (S_CGT_Commission_G * S_CGT_Block_MCMC_2)+
                                (S_CGT_Commission_V * S_CGT_Block_MCMC_2)+
                                (S_CGT_Commission_VG * S_CGT_Block_MCMC_2)+
                                (S_CGT_Commission_OC * S_CGT_Block_MCMC_2)
                            );
                        return (
                            (S_CGT_Commission_D * S_CGT_Block_MCMC_2)+
                            (S_CGT_Commission_G * S_CGT_Block_MCMC_2)+
                            (S_CGT_Commission_V * S_CGT_Block_MCMC_2)+
                            (S_CGT_Commission_VG * S_CGT_Block_MCMC_2)+
                            (S_CGT_Commission_OC * S_CGT_Block_MCMC_2)
                        );
                    }
                    function tactic_gross_SC_row_3(){
                        var regex = /[$,\s]/g;

                        var S_CGT_Commission_D   = CGT_Commission_D.toString().replace(regex,'');
                        var S_CGT_Commission_G   = CGT_Commission_G.toString().replace(regex,'');
                        var S_CGT_Commission_V   = CGT_Commission_V.toString().replace(regex,'');
                        var S_CGT_Commission_VG  = CGT_Commission_VG.toString().replace(regex,'');
                        var S_CGT_Commission_OC  = CGT_Commission_OC.toString().replace(regex,'');

                        var S_CGT_Block_MCMC_3   = CGT_Block_MCMC_3.toString().replace(regex,'');

                        CGT_Block_SC_3 =
                            ((S_CGT_Commission_D * S_CGT_Block_MCMC_3)+
                                (S_CGT_Commission_G *  S_CGT_Block_MCMC_3)+
                                (S_CGT_Commission_V *  S_CGT_Block_MCMC_3)+
                                (S_CGT_Commission_VG * S_CGT_Block_MCMC_3)+
                                (S_CGT_Commission_OC * S_CGT_Block_MCMC_3) );
                        return (
                            (S_CGT_Commission_D *  S_CGT_Block_MCMC_3)+
                            (S_CGT_Commission_G *  S_CGT_Block_MCMC_3)+
                            (S_CGT_Commission_V *  S_CGT_Block_MCMC_3)+
                            (S_CGT_Commission_VG * S_CGT_Block_MCMC_3)+
                            (S_CGT_Commission_OC * S_CGT_Block_MCMC_3)
                        );
                    }

                    function tactic_gross_MC_row_1(){
                        var regex = /[$,\s]/g;
                        var S_CGT_Block_V_1  = CGT_Block_V_1.toString().replace(regex,'');
                        var S_CGT_BW_Display = CGT_BW_Display.toString().replace(regex,'');
                        var S_CGT_RR_Display = CGT_RR_Display.toString().replace(regex,'');
                        var S_CGT_MC_Display = CGT_MC_Display.toString().replace(regex,'');
                        var S_CGT_BW_OTT_CTV = CGT_BW_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_RR_OTT_CTV = CGT_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_MC_OTT_CTV = CGT_MC_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_BW_Geofencing = CGT_BW_Geofencing.toString().replace(regex,'');
                        var S_CGT_RR_Geofencing = CGT_RR_Geofencing.toString().replace(regex,'');
                        var S_CGT_MC_Geofencing = CGT_MC_Geofencing.toString().replace(regex,'');
                        var S_CGT_BW_Video = CGT_BW_Video.toString().replace(regex,'');
                        var S_CGT_RR_Video = CGT_RR_Video.toString().replace(regex,'');
                        var S_CGT_MC_Video = CGT_MC_Video.toString().replace(regex,'');
                        var S_CGT_BW_Video_Geofencing = CGT_BW_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_RR_Video_Geofencing = CGT_RR_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_MC_Video_Geofencing = CGT_MC_Video_Geofencing.toString().replace(regex,'');

                        CGT_Block_MC_1=
                            (((S_CGT_Block_V_1*S_CGT_BW_Display)/S_CGT_RR_Display)*S_CGT_MC_Display)+
                            (((S_CGT_Block_V_1*S_CGT_BW_OTT_CTV)/S_CGT_RR_OTT_CTV)*S_CGT_MC_OTT_CTV)+
                            (((S_CGT_Block_V_1*S_CGT_BW_Geofencing)/S_CGT_RR_Geofencing)*S_CGT_MC_Geofencing)+
                            (((S_CGT_Block_V_1*S_CGT_BW_Video)/S_CGT_RR_Video)*S_CGT_MC_Video)+
                            (((S_CGT_Block_V_1*S_CGT_BW_Video_Geofencing)/S_CGT_RR_Video_Geofencing)*S_CGT_MC_Video_Geofencing);

                        return (
                            (((S_CGT_Block_V_1*S_CGT_BW_Display)/S_CGT_RR_Display)*S_CGT_MC_Display)+
                            (((S_CGT_Block_V_1*S_CGT_BW_OTT_CTV)/S_CGT_RR_OTT_CTV)*S_CGT_MC_OTT_CTV)+
                            (((S_CGT_Block_V_1*S_CGT_BW_Geofencing)/S_CGT_RR_Geofencing)*S_CGT_MC_Geofencing)+
                            (((S_CGT_Block_V_1*S_CGT_BW_Video)/S_CGT_RR_Video)*S_CGT_MC_Video)+
                            (((S_CGT_Block_V_1*S_CGT_BW_Video_Geofencing)/S_CGT_RR_Video_Geofencing)*S_CGT_MC_Video_Geofencing)
                        );
                    }
                    function tactic_gross_MC_row_2(){
                        var regex = /[$,\s]/g;
                        var S_CGT_Block_V_2  = CGT_Block_V_2.toString().replace(regex,'');
                        var S_CGT_BW_Display = CGT_BW_Display.toString().replace(regex,'');
                        var S_CGT_RR_Display = CGT_RR_Display.toString().replace(regex,'');
                        var S_CGT_MC_Display = CGT_MC_Display.toString().replace(regex,'');
                        var S_CGT_BW_OTT_CTV = CGT_BW_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_RR_OTT_CTV = CGT_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_MC_OTT_CTV = CGT_MC_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_BW_Geofencing = CGT_BW_Geofencing.toString().replace(regex,'');
                        var S_CGT_RR_Geofencing = CGT_RR_Geofencing.toString().replace(regex,'');
                        var S_CGT_MC_Geofencing = CGT_MC_Geofencing.toString().replace(regex,'');
                        var S_CGT_BW_Video = CGT_BW_Video.toString().replace(regex,'');
                        var S_CGT_RR_Video = CGT_RR_Video.toString().replace(regex,'');
                        var S_CN_MC_Video = CGT_MC_Video.toString().replace(regex,'');
                        var S_CGT_BW_Video_Geofencing = CGT_BW_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_RR_Video_Geofencing = CGT_RR_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_MC_Video_Geofencing = CGT_MC_Video_Geofencing.toString().replace(regex,'');

                        CGT_Block_MC_2=
                            (((S_CGT_Block_V_2*S_CGT_BW_Display)/S_CGT_RR_Display)*S_CGT_MC_Display)+
                            (((S_CGT_Block_V_2*S_CGT_BW_OTT_CTV)/S_CGT_RR_OTT_CTV)*S_CGT_MC_OTT_CTV)+
                            (((S_CGT_Block_V_2*S_CGT_BW_Geofencing)/S_CGT_RR_Geofencing)*S_CGT_MC_Geofencing)+
                            (((S_CGT_Block_V_2*S_CGT_BW_Video)/S_CGT_RR_Video)*S_CN_MC_Video)+
                            (((S_CGT_Block_V_2*S_CGT_BW_Video_Geofencing)/S_CGT_RR_Video_Geofencing)*S_CGT_MC_Video_Geofencing);

                        return (
                            (((S_CGT_Block_V_2*S_CGT_BW_Display)/S_CGT_RR_Display)*S_CGT_MC_Display)+
                            (((S_CGT_Block_V_2*S_CGT_BW_OTT_CTV)/S_CGT_RR_OTT_CTV)*S_CGT_MC_OTT_CTV)+
                            (((S_CGT_Block_V_2*S_CGT_BW_Geofencing)/S_CGT_RR_Geofencing)*S_CGT_MC_Geofencing)+
                            (((S_CGT_Block_V_2*S_CGT_BW_Video)/S_CGT_RR_Video)*S_CN_MC_Video)+
                            (((S_CGT_Block_V_2*S_CGT_BW_Video_Geofencing)/S_CGT_RR_Video_Geofencing)*S_CGT_MC_Video_Geofencing)
                        );
                    }
                    function tactic_gross_MC_row_3(){
                        var regex = /[$,\s]/g;
                        var S_CGT_Block_V_3  = CGT_Block_V_3.toString().replace(regex,'');
                        var S_CGT_BW_Display = CGT_BW_Display.toString().replace(regex,'');
                        var S_CGT_RR_Display = CGT_RR_Display.toString().replace(regex,'');
                        var S_CGT_MC_Display = CGT_MC_Display.toString().replace(regex,'');
                        var S_CGT_BW_OTT_CTV = CGT_BW_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_RR_OTT_CTV = CGT_RR_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_MC_OTT_CTV = CGT_MC_OTT_CTV.toString().replace(regex,'');
                        var S_CGT_BW_Geofencing = CGT_BW_Geofencing.toString().replace(regex,'');
                        var S_CGT_RR_Geofencing = CGT_RR_Geofencing.toString().replace(regex,'');
                        var S_CGT_MC_Geofencing = CGT_MC_Geofencing.toString().replace(regex,'');
                        var S_CGT_BW_Video = CGT_BW_Video.toString().replace(regex,'');
                        var S_CGT_RR_Video = CGT_RR_Video.toString().replace(regex,'');
                        var S_CGT_MC_Video = CGT_MC_Video.toString().replace(regex,'');
                        var S_CGT_BW_Video_Geofencing = CGT_BW_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_RR_Video_Geofencing = CGT_RR_Video_Geofencing.toString().replace(regex,'');
                        var S_CGT_MC_Video_Geofencing = CGT_MC_Video_Geofencing.toString().replace(regex,'');

                        CGT_Block_MC_3=
                            (((S_CGT_Block_V_3*S_CGT_BW_Display)/S_CGT_RR_Display)*S_CGT_MC_Display)+
                            (((S_CGT_Block_V_3*S_CGT_BW_OTT_CTV)/S_CGT_RR_OTT_CTV)*S_CGT_MC_OTT_CTV)+
                            (((S_CGT_Block_V_3*S_CGT_BW_Geofencing)/S_CGT_RR_Geofencing)*S_CGT_MC_Geofencing)+
                            (((S_CGT_Block_V_3*S_CGT_BW_Video)/S_CGT_RR_Video)*S_CGT_MC_Video)+
                            (((S_CGT_Block_V_3*S_CGT_BW_Video_Geofencing)/S_CGT_RR_Video_Geofencing)*S_CGT_MC_Video_Geofencing);

                        return (
                            (((S_CGT_Block_V_3*S_CGT_BW_Display)/S_CGT_RR_Display)*S_CGT_MC_Display)+
                            (((S_CGT_Block_V_3*S_CGT_BW_OTT_CTV)/S_CGT_RR_OTT_CTV)*S_CGT_MC_OTT_CTV)+
                            (((S_CGT_Block_V_3*S_CGT_BW_Geofencing)/S_CGT_RR_Geofencing)*S_CGT_MC_Geofencing)+
                            (((S_CGT_Block_V_3*S_CGT_BW_Video)/S_CGT_RR_Video)*S_CGT_MC_Video)+
                            (((S_CGT_Block_V_3*S_CGT_BW_Video_Geofencing)/S_CGT_RR_Video_Geofencing)*S_CGT_MC_Video_Geofencing)
                        );
                    }
                    function tactic_gross_SNR_row_1(){

                        var regex = /[$,\s]/g;
                        var S_CGT_Block_MCMC_1   = CGT_Block_MCMC_1.toString().replace(regex,'');
                        var S_CGT_Block_SC_1     = CGT_Block_SC_1.toString().replace(regex,'');
                        CGT_Block_SNR_1  = S_CGT_Block_MCMC_1 - S_CGT_Block_SC_1
                        return CGT_Block_SNR_1;
                    }
                    function tactic_gross_SNR_row_2(){
                        var regex = /[$,\s]/g;
                        var S_CN_Block_MCMC_2   = CGT_Block_MCMC_2.toString().replace(regex,'');
                        var S_CN_Block_SC_2     = CGT_Block_SC_2.toString().replace(regex,'');
                        CGT_Block_SNR_2  = S_CN_Block_MCMC_2 - S_CN_Block_SC_2
                        return CGT_Block_SNR_2;
                    }
                    function tactic_gross_SNR_row_3(){
                        var regex = /[$,\s]/g;
                        var S_CGT_Block_MCMC_3   = CGT_Block_MCMC_3.toString().replace(regex,'');
                        var S_CGT_Block_SC_3     = CGT_Block_SC_3.toString().replace(regex,'');
                        CGT_Block_SNR_3  = CGT_Block_MCMC_3 - CGT_Block_SC_3
                        return CGT_Block_SNR_3;
                    }

                    $(document).ready(function () {

                        var GROSS_TACTIC_MARGIN_elementMapping={
                            CGT_RR_Display: "CGT_RR_Display",
                            CGT_RR_Geofencing: "CGT_RR_Geofencing",
                            CGT_RR_Video: "CGT_RR_Video",
                            CGT_RR_Video_Geofencing: "CGT_RR_Video_Geofencing",
                            CGT_RR_OTT_CTV: "CGT_RR_OTT_CTV",
                            CGT_MC_Display:"CGT_MC_Display",
                            CGT_MC_Geofencing:"CGT_MC_Geofencing",
                            CGT_MC_Video:"CGT_MC_Video",
                            CGT_MC_Video_Geofencing:"CGT_MC_Video_Geofencing",
                            CGT_MC_OTT_CTV:"CGT_MC_OTT_CTV"
                        }
                        var GROSS_TACTIC_ABSV_elementMapping={
                            CGT_Block_V_1: "CGT_Block_V_1",
                            CGT_Block_V_2: "CGT_Block_V_2",
                            CGT_Block_V_3: "CGT_Block_V_3"
                        }

                        $("#CGT_Block_MCMC_1").text("$" + tactic_gross_MCMC_row_1().toFixed(2));
                        $("#CGT_Block_MCMC_2").text("$" + tactic_gross_MCMC_row_2().toFixed(2));
                        $("#CGT_Block_MCMC_3").text("$" + tactic_gross_MCMC_row_3().toFixed(2));
                        $("#CGT_Block_SC_1").text("$"   + tactic_gross_SC_row_1().toFixed(2));
                        $("#CGT_Block_SC_2").text("$"   + tactic_gross_SC_row_2().toFixed(2));
                        $("#CGT_Block_SC_3").text("$"   + tactic_gross_SC_row_3().toFixed(2));
                        $("#CGT_Block_MC_1").text("$"   + tactic_gross_MC_row_1().toFixed(2));
                        $("#CGT_Block_MC_2").text("$"   + tactic_gross_MC_row_2().toFixed(2));
                        $("#CGT_Block_MC_3").text("$"   + tactic_gross_MC_row_3().toFixed(2));
                        $("#CGT_Block_SNR_1").text("$"  + tactic_gross_SNR_row_1().toFixed(2));
                        $("#CGT_Block_SNR_2").text("$"  + tactic_gross_SNR_row_2().toFixed(2));
                        $("#CGT_Block_SNR_3").text("$"  + tactic_gross_SNR_row_3().toFixed(2));


                        function GROSS_TACTIC_MARGIN_updateVariables_keyup() {

                            console.log("Current ID After KeyUp :" + $(this).attr("id"));
                            var current_id = $(this).attr("id");

                            for (var variable in GROSS_TACTIC_MARGIN_elementMapping) {
                                // getting the matched value and updating the variable
                                var elementID = GROSS_TACTIC_MARGIN_elementMapping[variable];
                                window[variable] = $("#" + elementID).val();

                                // console.log("==="+ $("#"+ elementID).attr("id"));    // printing current id

                            }
                            //console.log("Updated on keyup variables:", CN_RR_Display, CN_RR_Geofencing, CN_RR_Video, CN_RR_Video_Geofencing, CN_RR_OTT_CTV);
                            //console.log("Updated on keyup variables:", CN_MC_Display, CN_MC_Geofencing, CN_MC_Video, CN_MC_Video_Geofencing, CN_MC_OTT_CTV);

                            if(current_id == "CGT_RR_Display" || current_id == "CGT_MC_Display"){
                                // get NET - Display - Margin and Margin Percentage
                                $("#CGT_M_Display").val("$" + tactic_gross_margin_display()+" ("+tactic_gross_margin_display_p()+"%)");
                            }
                            if(current_id=="CGT_RR_Geofencing" || current_id == "CGT_MC_Geofencing"){
                                // get NET - Geofencing - Margin and Margin Percentage
                                $("#CGT_M_Geofencing").val("$" + tactic_gross_margin_geofencing()+ " ("+tactic_gross_margin_geofencing_p()+"%)");
                            }
                            if(current_id=="CGT_RR_Video" || current_id == "CGT_MC_Video"){
                                // get NET - Video - Margin and Margin Percentage
                                $("#CGT_M_Video").val("$" + tactic_gross_margin_video()+ " ("+tactic_gross_margin_video_p()+"%)");
                            }
                            if(current_id=="CGT_RR_Video_Geofencing" || current_id == "CGT_MC_Video_Geofencing"){
                                // get NET - Video Geofencing - Margin and Margin Percentage
                                $("#CGT_M_Video_Geofencing").val("$" + tactic_gross_margin_video_geofencing()+ " ("+tactic_gross_margin_video_geofencing_p()+"%)");
                            }
                            if(current_id=="CGT_RR_OTT_CTV" || current_id == "CGT_MC_OTT_CTV"){
                                // get NET - Video Geofencing - Margin and Margin Percentage
                                $("#CGT_M_OTT_CTV").val("$" + tactic_gross_margin_ott_ctv()+ " ("+tactic_gross_margin_ott_ctv_p()+"%)");
                            }

                            /*
                            for (let i = 0; i < 5; i++) {
                                var result = Commission_Net_Margin(Net_Retail_Rate_Array, Net_Media_Cost_Array, i);
                                console.log(`Result ${i + 1}:`, result);
                            }
                            */


                        }
                        function GROSS_TACTIC_MARGIN_updateVariables_blur() {

                            console.log("Current ID after Blur :" + $(this).attr("id"));
                            var current_id = $(this).attr("id");


                            for (var variable in GROSS_TACTIC_MARGIN_elementMapping) {
                                var elementID = GROSS_TACTIC_MARGIN_elementMapping[variable];
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

                            if(current_id == "CGT_RR_Display" || current_id == "CGT_MC_Display"){
                                // get NET - Display - Margin and Margin Percentage
                                $("#CGT_M_Display").val("$" + tactic_gross_margin_display()+" ("+tactic_gross_margin_display_p()+"%)");
                            }
                            if(current_id=="CGT_RR_Geofencing" || current_id == "CGT_MC_Geofencing"){
                                // get NET - Geofencing - Margin and Margin Percentage
                                $("#CGT_M_Geofencing").val("$" + tactic_gross_margin_geofencing()+ " ("+tactic_gross_margin_geofencing_p()+"%)");
                            }
                            if(current_id=="CGT_RR_Video" || current_id == "CGT_MC_Video"){
                                // get NET - Video - Margin and Margin Percentage
                                $("#CGT_M_Video").val("$" + tactic_gross_margin_video()+ " ("+tactic_gross_margin_video_p()+"%)");
                            }
                            if(current_id=="CGT_RR_Video_Geofencing" || current_id == "CGT_MC_Video_Geofencing"){
                                // get NET - Video Geofencing - Margin and Margin Percentage
                                $("#CGT_M_Video_Geofencing").val("$" + tactic_gross_margin_video_geofencing()+ " ("+tactic_gross_margin_video_geofencing_p()+"%)");
                            }
                            if(current_id=="CGT_RR_OTT_CTV" || current_id == "CGT_MC_OTT_CTV"){
                                // get NET - Video Geofencing - Margin and Margin Percentage
                                $("#CGT_M_OTT_CTV").val("$" + tactic_gross_margin_ott_ctv()+ " ("+tactic_gross_margin_ott_ctv_p()+"%)");
                            }

                        }

                        function GROSS_TACTIC_ABSV_keyup() {

                            console.log("Current ID After KeyUp :" + $(this).attr("id"));
                            var current_id = $(this).attr("id");

                            for (var variable in GROSS_TACTIC_ABSV_elementMapping) {
                                // getting the matched value and updating the variable
                                var elementID = GROSS_TACTIC_ABSV_elementMapping[variable];
                                window[variable] = $("#" + elementID).val();

                                // console.log("==="+ $("#"+ elementID).attr("id"));    // printing current id

                            }
                            //console.log("Updated on keyup variables:", CN_RR_Display, CN_RR_Geofencing, CN_RR_Video, CN_RR_Video_Geofencing, CN_RR_OTT_CTV);
                            //console.log("Updated on keyup variables:", CN_MC_Display, CN_MC_Geofencing, CN_MC_Video, CN_MC_Video_Geofencing, CN_MC_OTT_CTV);

                            if(current_id == "CGT_Block_V_1"){
// get NET - Display - Margin and Margin Percentage
                                $("#CGT_Block_MCMC_1").text("$" + tactic_gross_MCMC_row_1().toFixed(2));
                                $("#CGT_Block_SC_1").text("$"   + tactic_gross_SC_row_1().toFixed(2));
                                $("#CGT_Block_MC_1").text("$"   + tactic_gross_MC_row_1().toFixed(2));
                                $("#CGT_Block_SNR_1").text("$"  + tactic_gross_SNR_row_1().toFixed(2));
                            }
                            if(current_id=="CGT_Block_V_2"){
// get NET - Geofencing - Margin and Margin Percentage
                                $("#CGT_Block_MCMC_2").text("$" + tactic_gross_MCMC_row_2().toFixed(2));
                                $("#CGT_Block_SC_2").text("$"   + tactic_gross_SC_row_2().toFixed(2));
                                $("#CGT_Block_MC_2").text("$"   + tactic_gross_MC_row_2().toFixed(2));
                                $("#CGT_Block_SNR_2").text("$"  + tactic_gross_SNR_row_2().toFixed(2));
                            }
                            if(current_id=="CGT_Block_V_3"){
// get NET - Video - Margin and Margin Percentage
                                $("#CGT_Block_MCMC_3").text("$" + tactic_gross_MCMC_row_3().toFixed(2));
                                $("#CGT_Block_SC_3").text("$"   + tactic_gross_SC_row_3().toFixed(2));
                                $("#CGT_Block_MC_3").text("$"   + tactic_gross_MC_row_3().toFixed(2));
                                $("#CGT_Block_SNR_3").text("$"  + tactic_gross_SNR_row_3().toFixed(2));
                            }

                        }
                        function GROSS_TACTIC_ABSV_blur() {

                            console.log("Current ID after Blur :" + $(this).attr("id"));
                            var current_id = $(this).attr("id");


                            for (var variable in GROSS_TACTIC_ABSV_elementMapping) {
                                var elementID = GROSS_TACTIC_ABSV_elementMapping[variable];
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

                            if(current_id == "CGT_Block_V_1"){
// get NET - Display - Margin and Margin Percentage
                                $("#CGT_Block_MCMC_1").text("$" + tactic_gross_MCMC_row_1().toFixed(2));
                                $("#CGT_Block_SC_1").text("$"   + tactic_gross_SC_row_1().toFixed(2));
                                $("#CGT_Block_MC_1").text("$"   + tactic_gross_MC_row_1().toFixed(2));
                                $("#CGT_Block_SNR_1").text("$"  + tactic_gross_SNR_row_1().toFixed(2));
                            }
                            if(current_id=="CGT_Block_V_2"){
// get NET - Geofencing - Margin and Margin Percentage
                                $("#CGT_Block_MCMC_2").text("$" + tactic_gross_MCMC_row_2().toFixed(2));
                                $("#CGT_Block_SC_2").text("$"   + tactic_gross_SC_row_2().toFixed(2));
                                $("#CGT_Block_MC_2").text("$"   + tactic_gross_MC_row_2().toFixed(2));
                                $("#CGT_Block_SNR_2").text("$"  + tactic_gross_SNR_row_2().toFixed(2));
                            }
                            if(current_id=="CGT_Block_V_3"){
// get NET - Video - Margin and Margin Percentage
                                $("#CGT_Block_MCMC_3").text("$" + tactic_gross_MCMC_row_3().toFixed(2));
                                $("#CGT_Block_SC_3").text("$"   + tactic_gross_SC_row_3().toFixed(2));
                                $("#CGT_Block_MC_3").text("$"   + tactic_gross_MC_row_3().toFixed(2));
                                $("#CGT_Block_SNR_3").text("$"  + tactic_gross_SNR_row_3().toFixed(2));
                            }

                        }

                        for (var variable in GROSS_TACTIC_MARGIN_elementMapping)
                        {
                            var elementID = GROSS_TACTIC_MARGIN_elementMapping[variable];

                            console.log("-------element_id----------" + elementID);
                            //$("#" + elementID).on("keyup blur", updateVariables);
                            $("#" + elementID).on("keyup", GROSS_TACTIC_MARGIN_updateVariables_keyup);
                            $("#" + elementID).on("blur", GROSS_TACTIC_MARGIN_updateVariables_blur);

                        }
                        for (var variable in GROSS_TACTIC_ABSV_elementMapping)
                        {
                            var elementID = GROSS_TACTIC_ABSV_elementMapping[variable];

                            console.log("-------element_id----------" + elementID);
                            //$("#" + elementID).on("keyup blur", updateVariables);
                            $("#" + elementID).on("keyup", GROSS_TACTIC_ABSV_keyup());
                            $("#" + elementID).on("blur",  GROSS_TACTIC_ABSV_blur());

                        }
                    });
