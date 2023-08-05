
                // N E T    TACTIC


                const keywords_net_tactic = [
                    "CNT_BW_Display",
                    "CNT_BW_Geofencing",
                    "CNT_BW_Video",
                    "CNT_BW_Video_Geofencing",
                    "CNT_BW_OTT_CTV",
                    "CNT_Commission_D","CNT_Commission_G","CNT_Commission_V","CNT_Commission_VG","CNT_Commission_OC"
                ];

CNT_BW_Display=50; CNT_BW_Geofencing=10; CNT_BW_Video=0; CNT_BW_Video_Geofencing=0;   CNT_BW_OTT_CTV=40;
CNT_RR_Display=12;   CNT_RR_Geofencing=15;   CNT_RR_Video=22;   CNT_RR_Video_Geofencing=26;     CNT_RR_OTT_CTV=33;
CNT_MC_Display=4.25; CNT_MC_Geofencing=5;    CNT_MC_Video=12.5; CNT_MC_Video_Geofencing=13.50;  CNT_MC_OTT_CTV=17;
CNT_M_Display=7.75;  CNT_M_Geofencing=10;    CNT_M_Video =9.50; CNT_M_Video_Geofencing=12.50;   CNT_M_OTT_CTV=16;

//  commission %:
CNT_Commission_D=10;    CNT_Commission_G=15;    CNT_Commission_V=0;    CNT_Commission_VG=0;    CNT_Commission_OC=0;

CNT_Block_V_1=10000; let CNT_Block_MCMC_1=0;  let CNT_Block_SC_1=0;    let CNT_Block_MC_1=0;    let CNT_Block_SNR_1=0;
CNT_Block_V_2=30000; let CNT_Block_MCMC_2=0;  let CNT_Block_SC_2=0;    let CNT_Block_MC_2=0;    let CNT_Block_SNR_2=0;
CNT_Block_V_3=50000; let CNT_Block_MCMC_3=0;  let CNT_Block_SC_3=0;    let CNT_Block_MC_3=0;    let CNT_Block_SNR_3=0;

///////////////////////////////////////////////////////////////////////////////////
function tactic_net_margin_display(){

    var regex = /[$,%\s]/g;
    var CNT_RR_Display_stripped = CNT_RR_Display.replace(regex, '');
    var CNT_MC_Display_stripped = CNT_MC_Display.replace(regex, '');
    //console.log (CNT_RR_Display_stripped - CN_MC_Display_stripped);
    return (CNT_RR_Display_stripped - CNT_MC_Display_stripped).toFixed(2);
}
function tactic_net_margin_display_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = tactic_net_margin_display() / CNT_RR_Display.replace(regex,'');

    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    //console.log( percent.toFixed(2));

    return percent.toFixed(2);
}
///////////////////////////////////////////////////////////////////////////////////
function tactic_net_margin_geofencing(){
    var regex = /[$,%\s]/g;
    var CNT_RR_Geofencing_stripped = CNT_RR_Geofencing.replace(regex,'');
    var CNT_MC_Geofencing_stripped = CNT_MC_Geofencing.replace(regex,'');

    return (CNT_RR_Geofencing_stripped - CNT_MC_Geofencing_stripped);
}
function tactic_net_margin_geofencing_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = tactic_net_margin_geofencing() / CNT_RR_Geofencing.replace(regex,'');

    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    //console.log( percent.toFixed(2));

    return percent.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////
function tactic_net_margin_video(){
    var regex = /[$,%\s]/g;
    var CNT_RR_Video_stripped = CNT_RR_Video.replace(regex,'');
    var CNT_MC_Video_stripped = CNT_MC_Video.replace(regex,'');

    return (CNT_RR_Video_stripped - CNT_MC_Video_stripped);
}
function tactic_net_margin_video_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = tactic_net_margin_video() / CNT_RR_Video.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    return percent.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////
function tactic_net_margin_video_geofencing(){
    var regex = /[$,%\s]/g;
    var CNT_RR_Video_Geofencing_stripped = CNT_RR_Video_Geofencing.replace(regex,'');
    var CNT_MC_Video_Geofencing_stripped = CNT_MC_Video_Geofencing.replace(regex,'');
    return (CNT_RR_Video_Geofencing_stripped - CNT_MC_Video_Geofencing_stripped);
}
function tactic_net_margin_video_geofencing_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = tactic_net_margin_video_geofencing() / CNT_RR_Video_Geofencing.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;

    return percent.toFixed(2);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function tactic_net_margin_ott_ctv(){
    var regex = /[$,%\s]/g;
    var CNT_RR_OTT_CTV_stripped = CNT_RR_OTT_CTV.replace(regex,'');
    var CNT_MC_OTT_CTV_stripped = CNT_MC_OTT_CTV.replace(regex,'');
    return (CNT_RR_OTT_CTV_stripped - CNT_MC_OTT_CTV_stripped);
}
function tactic_net_margin_ott_ctv_p(){
    var regex = /[$,%\s]/g;
    var margin_percentage = tactic_net_margin_ott_ctv() / CNT_RR_OTT_CTV.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;

    return percent.toFixed(2);
}
///////////////////////////////////////////////////////////////////////////////////

                function tactic_net_MCMC_row_1(){
                    var regex = /[$,%\s]/g;
                    var S_CNT_Block_V_1        = CNT_Block_V_1.toString().replace(regex,'');

                    var S_CNT_BW_Display        = CNT_BW_Display.toString().replace(regex,'') /100;
                    var S_CNT_BW_Geofencing    = CNT_BW_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video          = CNT_BW_Video.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video_Geofencing = CNT_BW_Video_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_OTT_CTV        = CNT_BW_OTT_CTV.toString().replace(regex,'')/100;


                    var S_CNT_RR_Display        = CNT_RR_Display.toString().replace(regex,'');
                    var S_CNT_M_Display         = CNT_M_Display.toString().replace(regex,'');

                    var S_CNT_RR_OTT_CTV        = CNT_RR_OTT_CTV.toString().replace(regex,'');
                    var S_CNT_M_OTT_CTV         = CNT_M_OTT_CTV.toString().replace(regex,'');
                    var S_CNT_RR_Geofencing     = CNT_RR_Geofencing.toString().replace(regex,'');
                    var S_CNT_M_Geofencing      = CNT_M_Geofencing.toString().replace(regex,'');

                    var S_CNT_RR_Video          = CNT_RR_Video.toString().replace(regex,'');
                    var S_CNT_M_Video            = CNT_M_Video.toString().replace(regex,'');

                    var S_CNT_RR_Video_Geofencing = CNT_RR_Video_Geofencing.toString().replace(regex,'');
                    var S_CNT_M_Video_Geofencing  = CNT_M_Video_Geofencing.toString().replace(regex,'');

                    //console.log((((( S_CNT_Block_V_1 * S_CNT_BW_Display ) / S_CNT_RR_Display  )  * S_CNT_M_Display)+(((S_CNT_Block_V_1 * S_CNT_BW_OTT_CTV )  / S_CNT_RR_OTT_CTV)  * S_CNT_M_OTT_CTV)+(((S_CNT_Block_V_1* S_CNT_BW_Display)/ S_CNT_RR_Geofencing)*S_CNT_M_Geofencing)+(((S_CNT_Block_V_1*S_CNT_BW_Video )/S_CNT_RR_Video)*S_CNT_M_Video)+(((S_CNT_Block_V_1*S_CNT_BW_Video_Geofencing)/S_CNT_RR_Video_Geofencing)*S_CNT_M_Video_Geofencing)));

                    console.log(
                        "NET---TACTIC"+
                         S_CNT_Block_V_1 +"--"+ S_CNT_BW_Display          +"--"+ S_CNT_RR_Display          +"--"+S_CNT_M_Display+"\n"
                        +S_CNT_Block_V_1 +"--"+ S_CNT_BW_OTT_CTV          +"--"+ S_CNT_RR_OTT_CTV          +"--"+ S_CNT_M_OTT_CTV+"\n"
                        +S_CNT_Block_V_1 +"--"+ S_CNT_BW_Geofencing       +"--"+ S_CNT_RR_Geofencing       +"--"+ S_CNT_M_Geofencing+"\n"
                        +S_CNT_Block_V_1 +"--"+ S_CNT_BW_Video            +"--"+ S_CNT_RR_Video            +"--"+ S_CNT_M_Video+"\n"
                        +S_CNT_Block_V_1 +"--"+ S_CNT_BW_Video_Geofencing +"--"+ S_CNT_RR_Video_Geofencing +"--"+ S_CNT_M_Video_Geofencing+"\n"

                    );


                    CNT_Block_MCMC_1 =
                        floorOrCeil(
                        ((( S_CNT_Block_V_1 * S_CNT_BW_Display        ) / S_CNT_RR_Display      )* S_CNT_M_Display)
                        +(((S_CNT_Block_V_1 * S_CNT_BW_OTT_CTV        ) / S_CNT_RR_OTT_CTV      )* S_CNT_M_OTT_CTV)
                        +(((S_CNT_Block_V_1 * S_CNT_BW_Geofencing     ) / S_CNT_RR_Geofencing   )* S_CNT_M_Geofencing)
                        +(((S_CNT_Block_V_1 * S_CNT_BW_Video          ) / S_CNT_RR_Video        )* S_CNT_M_Video)
                        +(((S_CNT_Block_V_1 * S_CNT_BW_Video_Geofencing)/ S_CNT_RR_Video_Geofencing)* S_CNT_M_Video_Geofencing)
                        );

                    return floorOrCeil(
                        ((( S_CNT_Block_V_1 * S_CNT_BW_Display         ) / S_CNT_RR_Display          )* S_CNT_M_Display)
                        +(((S_CNT_Block_V_1 * S_CNT_BW_OTT_CTV         ) / S_CNT_RR_OTT_CTV          )* S_CNT_M_OTT_CTV)
                        +(((S_CNT_Block_V_1 * S_CNT_BW_Geofencing      ) / S_CNT_RR_Geofencing       )* S_CNT_M_Geofencing)
                        +(((S_CNT_Block_V_1 * S_CNT_BW_Video           ) / S_CNT_RR_Video            )* S_CNT_M_Video)
                        +(((S_CNT_Block_V_1 * S_CNT_BW_Video_Geofencing) / S_CNT_RR_Video_Geofencing )* S_CNT_M_Video_Geofencing)
                    );
                }
                function tactic_net_MCMC_row_2(){
                    var regex = /[$,%\s]/g;
                    var S_CNT_Block_V_2         = CNT_Block_V_2.toString().replace(regex,'');

                    var S_CNT_BW_Display        = CNT_BW_Display.toString().replace(regex,'')/100;
                    var S_CNT_BW_Geofencing     = CNT_BW_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video          = CNT_BW_Video.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video_Geofencing = CNT_BW_Video_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_OTT_CTV          = CNT_BW_OTT_CTV.toString().replace(regex,'')/100;

                    var S_CNT_RR_Display        = CNT_RR_Display.toString().replace(regex,'');
                    var S_CNT_M_Display         = CNT_M_Display.toString().replace(regex,'');

                    var S_CNT_RR_OTT_CTV        = CNT_RR_OTT_CTV.toString().replace(regex,'');
                    var S_CNT_M_OTT_CTV         = CNT_M_OTT_CTV.toString().replace(regex,'');
                    var S_CNT_RR_Geofencing     = CNT_RR_Geofencing.toString().replace(regex,'');
                    var S_CNT_M_Geofencing      = CNT_M_Geofencing.toString().replace(regex,'');

                    var S_CNT_RR_Video          = CNT_RR_Video.toString().replace(regex,'');
                    var S_CNT_M_Video           = CNT_M_Video.toString().replace(regex,'');

                    var S_CNT_RR_Video_Geofencing = CNT_RR_Video_Geofencing.toString().replace(regex,'');
                    var S_CNT_M_Video_Geofencing  = CNT_M_Video_Geofencing.toString().replace(regex,'');

                    //console.log((((( S_CNT_Block_V_1 * S_CNT_BW_Display ) / S_CNT_RR_Display  )  * S_CNT_M_Display)+(((S_CNT_Block_V_1 * S_CNT_BW_OTT_CTV )  / S_CNT_RR_OTT_CTV)  * S_CNT_M_OTT_CTV)+(((S_CNT_Block_V_1* S_CNT_BW_Display)/ S_CNT_RR_Geofencing)*S_CNT_M_Geofencing)+(((S_CNT_Block_V_1*S_CNT_BW_Video )/S_CNT_RR_Video)*S_CNT_M_Video)+(((S_CNT_Block_V_1*S_CNT_BW_Video_Geofencing)/S_CNT_RR_Video_Geofencing)*S_CNT_M_Video_Geofencing)));

                    CNT_Block_MCMC_2 =
                        floorOrCeil(
                        ((( S_CNT_Block_V_2 * S_CNT_BW_Display        ) / S_CNT_RR_Display      )* S_CNT_M_Display)
                        +(((S_CNT_Block_V_2 * S_CNT_BW_OTT_CTV        ) / S_CNT_RR_OTT_CTV      )* S_CNT_M_OTT_CTV)
                        +(((S_CNT_Block_V_2 * S_CNT_BW_Geofencing     ) / S_CNT_RR_Geofencing   )* S_CNT_M_Geofencing)
                        +(((S_CNT_Block_V_2 * S_CNT_BW_Video          ) / S_CNT_RR_Video        )* S_CNT_M_Video)
                        +(((S_CNT_Block_V_2 * S_CNT_BW_Video_Geofencing)/ S_CNT_RR_Video_Geofencing)* S_CNT_M_Video_Geofencing)
                        );


                    console.log(
                        "NET---TACTIC"+
                         S_CNT_Block_V_2 +"--"+ S_CNT_BW_Display          +"--"+ S_CNT_RR_Display          +"--"+S_CNT_M_Display+"\n"
                        +S_CNT_Block_V_2 +"--"+ S_CNT_BW_OTT_CTV          +"--"+ S_CNT_RR_OTT_CTV          +"--"+ S_CNT_M_OTT_CTV+"\n"
                        +S_CNT_Block_V_2 +"--"+ S_CNT_BW_Geofencing       +"--"+ S_CNT_RR_Geofencing       +"--"+ S_CNT_M_Geofencing+"\n"
                        +S_CNT_Block_V_2 +"--"+ S_CNT_BW_Video            +"--"+ S_CNT_RR_Video            +"--"+ S_CNT_M_Video+"\n"
                        +S_CNT_Block_V_2 +"--"+ S_CNT_BW_Video_Geofencing +"--"+ S_CNT_RR_Video_Geofencing +"--"+ S_CNT_M_Video_Geofencing+"\n"

                    );

                    return floorOrCeil(
                        ((( S_CNT_Block_V_2 * S_CNT_BW_Display        ) / S_CNT_RR_Display     )* S_CNT_M_Display)
                        +(((S_CNT_Block_V_2 * S_CNT_BW_OTT_CTV        ) / S_CNT_RR_OTT_CTV     )* S_CNT_M_OTT_CTV)
                        +(((S_CNT_Block_V_2 * S_CNT_BW_Geofencing     ) / S_CNT_RR_Geofencing  )* S_CNT_M_Geofencing)
                        +(((S_CNT_Block_V_2 * S_CNT_BW_Video          ) / S_CNT_RR_Video       )* S_CNT_M_Video)
                        +(((S_CNT_Block_V_2 * S_CNT_BW_Video_Geofencing) / S_CNT_RR_Video_Geofencing )* S_CNT_M_Video_Geofencing)
                    );
                }
                function tactic_net_MCMC_row_3(){
                    var regex = /[$,%\s]/g;
                    var S_CNT_Block_V_3         = CNT_Block_V_3.toString().replace(regex,'');

                    var S_CNT_BW_Display        = CNT_BW_Display.toString().replace(regex,'')/100;
                    var S_CNT_BW_Geofencing    = CNT_BW_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video          = CNT_BW_Video.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video_Geofencing = CNT_BW_Video_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_OTT_CTV        = CNT_BW_OTT_CTV.toString().replace(regex,'')/100;

                    var S_CNT_RR_Display        = CNT_RR_Display.toString().replace(regex,'');
                    var S_CNT_M_Display         = CNT_M_Display.toString().replace(regex,'');

                    var S_CNT_RR_OTT_CTV        = CNT_RR_OTT_CTV.toString().replace(regex,'');
                    var S_CNT_M_OTT_CTV         = CNT_M_OTT_CTV.toString().replace(regex,'');
                    var S_CNT_RR_Geofencing     = CNT_RR_Geofencing.toString().replace(regex,'');
                    var S_CNT_M_Geofencing      = CNT_M_Geofencing.toString().replace(regex,'');

                    var S_CNT_RR_Video          = CNT_RR_Video.toString().replace(regex,'');
                    var S_CNT_M_Video           = CNT_M_Video.toString().replace(regex,'');

                    var S_CNT_RR_Video_Geofencing = CNT_RR_Video_Geofencing.toString().replace(regex,'');
                    var S_CNT_M_Video_Geofencing  = CNT_M_Video_Geofencing.toString().replace(regex,'');

                    //console.log((((( S_CNT_Block_V_1 * S_CNT_BW_Display ) / S_CNT_RR_Display  )  * S_CNT_M_Display)+(((S_CNT_Block_V_1 * S_CNT_BW_OTT_CTV )  / S_CNT_RR_OTT_CTV)  * S_CNT_M_OTT_CTV)+(((S_CNT_Block_V_1* S_CNT_BW_Display)/ S_CNT_RR_Geofencing)*S_CNT_M_Geofencing)+(((S_CNT_Block_V_1*S_CNT_BW_Video )/S_CNT_RR_Video)*S_CNT_M_Video)+(((S_CNT_Block_V_1*S_CNT_BW_Video_Geofencing)/S_CNT_RR_Video_Geofencing)*S_CNT_M_Video_Geofencing)));

                    console.log(
                        "NET---TACTIC"+
                        S_CNT_Block_V_3 +"--"+ S_CNT_BW_Display           +"--"+ S_CNT_RR_Display          +"--"+S_CNT_M_Display+"\n"
                        +S_CNT_Block_V_3 +"--"+ S_CNT_BW_OTT_CTV          +"--"+ S_CNT_RR_OTT_CTV          +"--"+ S_CNT_M_OTT_CTV+"\n"
                        +S_CNT_Block_V_3 +"--"+ S_CNT_BW_Geofencing       +"--"+ S_CNT_RR_Geofencing       +"--"+ S_CNT_M_Geofencing+"\n"
                        +S_CNT_Block_V_3 +"--"+ S_CNT_BW_Video            +"--"+ S_CNT_RR_Video            +"--"+ S_CNT_M_Video+"\n"
                        +S_CNT_Block_V_3 +"--"+ S_CNT_BW_Video_Geofencing +"--"+ S_CNT_RR_Video_Geofencing +"--"+ S_CNT_M_Video_Geofencing+"\n"

                    );

                    CNT_Block_MCMC_3 =floorOrCeil(
                        ((( S_CNT_Block_V_3 * S_CNT_BW_Display        ) / S_CNT_RR_Display      )* S_CNT_M_Display)
                        +(((S_CNT_Block_V_3 * S_CNT_BW_OTT_CTV        ) / S_CNT_RR_OTT_CTV      )* S_CNT_M_OTT_CTV)
                        +(((S_CNT_Block_V_3 * S_CNT_BW_Geofencing     ) / S_CNT_RR_Geofencing   )* S_CNT_M_Geofencing)
                        +(((S_CNT_Block_V_3 * S_CNT_BW_Video          ) / S_CNT_RR_Video        )* S_CNT_M_Video)
                        +(((S_CNT_Block_V_3 * S_CNT_BW_Video_Geofencing)/ S_CNT_RR_Video_Geofencing)* S_CNT_M_Video_Geofencing)
                    );

                    return floorOrCeil(
                        ((( S_CNT_Block_V_3 * S_CNT_BW_Display        ) / S_CNT_RR_Display      )* S_CNT_M_Display)
                        +(((S_CNT_Block_V_3 * S_CNT_BW_OTT_CTV        ) / S_CNT_RR_OTT_CTV      )* S_CNT_M_OTT_CTV)
                        +(((S_CNT_Block_V_3 * S_CNT_BW_Geofencing     ) / S_CNT_RR_Geofencing   )* S_CNT_M_Geofencing)
                        +(((S_CNT_Block_V_3 * S_CNT_BW_Video          ) / S_CNT_RR_Video        )* S_CNT_M_Video)
                        +(((S_CNT_Block_V_3 * S_CNT_BW_Video_Geofencing)/ S_CNT_RR_Video_Geofencing)* S_CNT_M_Video_Geofencing)
                    );
                }

                function tactic_net_SC_row_1(){
                    var regex = /[$,%\s]/g;

                    var S_CNT_Commission_D   = CNT_Commission_D.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_G   = CNT_Commission_G.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_V   = CNT_Commission_V.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_VG  = CNT_Commission_VG.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_OC  = CNT_Commission_OC.toString().replace(regex,'') /100;

                    var S_CNT_Block_MCMC_1   = CNT_Block_MCMC_1.toString().replace(regex,'');

                    CNT_Block_SC_1 =
                        floorOrCeil(
                            (S_CNT_Commission_D * S_CNT_Block_MCMC_1)+
                            (S_CNT_Commission_G * S_CNT_Block_MCMC_1)+
                            (S_CNT_Commission_V * S_CNT_Block_MCMC_1)+
                            (S_CNT_Commission_VG * S_CNT_Block_MCMC_1)+
                            (S_CNT_Commission_OC * S_CNT_Block_MCMC_1)
                        );
                    return floorOrCeil(
                        (S_CNT_Commission_D * S_CNT_Block_MCMC_1)+
                        (S_CNT_Commission_G * S_CNT_Block_MCMC_1)+
                        (S_CNT_Commission_V * S_CNT_Block_MCMC_1)+
                        (S_CNT_Commission_VG * S_CNT_Block_MCMC_1)+
                        (S_CNT_Commission_OC * S_CNT_Block_MCMC_1)
                    );
                }
                function tactic_net_SC_row_2(){
                    var regex = /[$,%\s]/g;

                    var S_CNT_Commission_D   = CNT_Commission_D.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_G   = CNT_Commission_G.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_V   = CNT_Commission_V.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_VG  = CNT_Commission_VG.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_OC  = CNT_Commission_OC.toString().replace(regex,'') / 100;

                    var S_CNT_Block_MCMC_2   = CNT_Block_MCMC_2.toString().replace(regex,'');

                    CNT_Block_SC_2 =
                        floorOrCeil(
                            (S_CNT_Commission_D * S_CNT_Block_MCMC_2)+
                            (S_CNT_Commission_G * S_CNT_Block_MCMC_2)+
                            (S_CNT_Commission_V * S_CNT_Block_MCMC_2)+
                            (S_CNT_Commission_VG * S_CNT_Block_MCMC_2)+
                            (S_CNT_Commission_OC * S_CNT_Block_MCMC_2)
                        );
                    return floorOrCeil(
                        (S_CNT_Commission_D * S_CNT_Block_MCMC_2)+
                        (S_CNT_Commission_G * S_CNT_Block_MCMC_2)+
                        (S_CNT_Commission_V * S_CNT_Block_MCMC_2)+
                        (S_CNT_Commission_VG * S_CNT_Block_MCMC_2)+
                        (S_CNT_Commission_OC * S_CNT_Block_MCMC_2)
                    );
                }
                function tactic_net_SC_row_3(){
                    var regex = /[$,%\s]/g;

                    var S_CNT_Commission_D   = CNT_Commission_D.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_G   = CNT_Commission_G.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_V   = CNT_Commission_V.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_VG  = CNT_Commission_VG.toString().replace(regex,'') / 100;
                    var S_CNT_Commission_OC  = CNT_Commission_OC.toString().replace(regex,'') / 100;

                    var S_CNT_Block_MCMC_3   = CNT_Block_MCMC_3.toString().replace(regex,'');

                    CNT_Block_SC_3 =
                        floorOrCeil(
                            (S_CNT_Commission_D * S_CNT_Block_MCMC_3)+
                            (S_CNT_Commission_G *  S_CNT_Block_MCMC_3)+
                            (S_CNT_Commission_V *  S_CNT_Block_MCMC_3)+
                            (S_CNT_Commission_VG * S_CNT_Block_MCMC_3)+
                            (S_CNT_Commission_OC * S_CNT_Block_MCMC_3)
                        );
                    return floorOrCeil(
                        (S_CNT_Commission_D *  S_CNT_Block_MCMC_3)+
                        (S_CNT_Commission_G *  S_CNT_Block_MCMC_3)+
                        (S_CNT_Commission_V *  S_CNT_Block_MCMC_3)+
                        (S_CNT_Commission_VG * S_CNT_Block_MCMC_3)+
                        (S_CNT_Commission_OC * S_CNT_Block_MCMC_3)
                    );
                }

                function tactic_net_MC_row_1(){
                    var regex = /[$,%\s]/g;
                    var S_CNT_Block_V_1  = CNT_Block_V_1.toString().replace(regex,'');

                    var S_CNT_BW_Display        = CNT_BW_Display.toString().replace(regex,'')/100;
                    var S_CNT_BW_Geofencing     = CNT_BW_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video          = CNT_BW_Video.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video_Geofencing = CNT_BW_Video_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_OTT_CTV          = CNT_BW_OTT_CTV.toString().replace(regex,'')/100;

                    var S_CNT_RR_Display = CNT_RR_Display.toString().replace(regex,'');
                    var S_CNT_MC_Display = CNT_MC_Display.toString().replace(regex,'');

                    var S_CNT_RR_OTT_CTV = CNT_RR_OTT_CTV.toString().replace(regex,'');
                    var S_CNT_MC_OTT_CTV = CNT_MC_OTT_CTV.toString().replace(regex,'');

                    var S_CNT_RR_Geofencing = CNT_RR_Geofencing.toString().replace(regex,'');
                    var S_CNT_MC_Geofencing = CNT_MC_Geofencing.toString().replace(regex,'');

                    var S_CNT_RR_Video = CNT_RR_Video.toString().replace(regex,'');
                    var S_CNT_MC_Video = CNT_MC_Video.toString().replace(regex,'');

                    var S_CNT_RR_Video_Geofencing = CNT_RR_Video_Geofencing.toString().replace(regex,'');
                    var S_CNT_MC_Video_Geofencing = CNT_MC_Video_Geofencing.toString().replace(regex,'');

                    CNT_Block_MC_1=
                        floorOrCeil(
                        (((S_CNT_Block_V_1*S_CNT_BW_Display)/S_CNT_RR_Display)*S_CNT_MC_Display)+
                        (((S_CNT_Block_V_1*S_CNT_BW_OTT_CTV)/S_CNT_RR_OTT_CTV)*S_CNT_MC_OTT_CTV)+
                        (((S_CNT_Block_V_1*S_CNT_BW_Geofencing)/S_CNT_RR_Geofencing)*S_CNT_MC_Geofencing)+
                        (((S_CNT_Block_V_1*S_CNT_BW_Video)/S_CNT_RR_Video)*S_CNT_MC_Video)+
                        (((S_CNT_Block_V_1*S_CNT_BW_Video_Geofencing)/S_CNT_RR_Video_Geofencing)*S_CNT_MC_Video_Geofencing)
                        );

                    return floorOrCeil(
                        (((S_CNT_Block_V_1*S_CNT_BW_Display)/S_CNT_RR_Display)*S_CNT_MC_Display)+
                        (((S_CNT_Block_V_1*S_CNT_BW_OTT_CTV)/S_CNT_RR_OTT_CTV)*S_CNT_MC_OTT_CTV)+
                        (((S_CNT_Block_V_1*S_CNT_BW_Geofencing)/S_CNT_RR_Geofencing)*S_CNT_MC_Geofencing)+
                        (((S_CNT_Block_V_1*S_CNT_BW_Video)/S_CNT_RR_Video)*S_CNT_MC_Video)+
                        (((S_CNT_Block_V_1*S_CNT_BW_Video_Geofencing)/S_CNT_RR_Video_Geofencing)*S_CNT_MC_Video_Geofencing)
                    );
                }
                function tactic_net_MC_row_2(){
                    var regex = /[$,%\s]/g;
                    var S_CNT_Block_V_2  = CNT_Block_V_2.toString().replace(regex,'');

                    var S_CNT_BW_Display        = CNT_BW_Display.toString().replace(regex,'')/100;
                    var S_CNT_BW_Geofencing     = CNT_BW_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video          = CNT_BW_Video.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video_Geofencing = CNT_BW_Video_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_OTT_CTV          = CNT_BW_OTT_CTV.toString().replace(regex,'')/100;

                    var S_CNT_RR_Display = CNT_RR_Display.toString().replace(regex,'');
                    var S_CNT_MC_Display = CNT_MC_Display.toString().replace(regex,'');

                    var S_CNT_RR_OTT_CTV = CNT_RR_OTT_CTV.toString().replace(regex,'');
                    var S_CNT_MC_OTT_CTV = CNT_MC_OTT_CTV.toString().replace(regex,'');

                    var S_CNT_RR_Geofencing = CNT_RR_Geofencing.toString().replace(regex,'');
                    var S_CNT_MC_Geofencing = CNT_MC_Geofencing.toString().replace(regex,'');

                    var S_CNT_RR_Video = CNT_RR_Video.toString().replace(regex,'');
                    var S_CN_MC_Video = CNT_MC_Video.toString().replace(regex,'');

                    var S_CNT_RR_Video_Geofencing = CNT_RR_Video_Geofencing.toString().replace(regex,'');
                    var S_CNT_MC_Video_Geofencing = CNT_MC_Video_Geofencing.toString().replace(regex,'');

                    CNT_Block_MC_2=
                        floorOrCeil(
                        (((S_CNT_Block_V_2*S_CNT_BW_Display)/S_CNT_RR_Display)*S_CNT_MC_Display)+
                        (((S_CNT_Block_V_2*S_CNT_BW_OTT_CTV)/S_CNT_RR_OTT_CTV)*S_CNT_MC_OTT_CTV)+
                        (((S_CNT_Block_V_2*S_CNT_BW_Geofencing)/S_CNT_RR_Geofencing)*S_CNT_MC_Geofencing)+
                        (((S_CNT_Block_V_2*S_CNT_BW_Video)/S_CNT_RR_Video)*S_CN_MC_Video)+
                        (((S_CNT_Block_V_2*S_CNT_BW_Video_Geofencing)/S_CNT_RR_Video_Geofencing)*S_CNT_MC_Video_Geofencing)
                        );

                    return floorOrCeil(
                        (((S_CNT_Block_V_2*S_CNT_BW_Display)/S_CNT_RR_Display)*S_CNT_MC_Display)+
                        (((S_CNT_Block_V_2*S_CNT_BW_OTT_CTV)/S_CNT_RR_OTT_CTV)*S_CNT_MC_OTT_CTV)+
                        (((S_CNT_Block_V_2*S_CNT_BW_Geofencing)/S_CNT_RR_Geofencing)*S_CNT_MC_Geofencing)+
                        (((S_CNT_Block_V_2*S_CNT_BW_Video)/S_CNT_RR_Video)*S_CN_MC_Video)+
                        (((S_CNT_Block_V_2*S_CNT_BW_Video_Geofencing)/S_CNT_RR_Video_Geofencing)*S_CNT_MC_Video_Geofencing)
                    );
                }
                function tactic_net_MC_row_3(){
                    var regex = /[$,%\s]/g;
                    var S_CNT_Block_V_3  = CNT_Block_V_3.toString().replace(regex,'');

                    var S_CNT_BW_Display        = CNT_BW_Display.toString().replace(regex,'')/100;
                    var S_CNT_BW_Geofencing     = CNT_BW_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video          = CNT_BW_Video.toString().replace(regex,'')/100;
                    var S_CNT_BW_Video_Geofencing = CNT_BW_Video_Geofencing.toString().replace(regex,'')/100;
                    var S_CNT_BW_OTT_CTV          = CNT_BW_OTT_CTV.toString().replace(regex,'')/100;

                    var S_CNT_RR_Display = CNT_RR_Display.toString().replace(regex,'');
                    var S_CNT_MC_Display = CNT_MC_Display.toString().replace(regex,'');

                    var S_CNT_RR_OTT_CTV = CNT_RR_OTT_CTV.toString().replace(regex,'');
                    var S_CNT_MC_OTT_CTV = CNT_MC_OTT_CTV.toString().replace(regex,'');

                    var S_CNT_RR_Geofencing = CNT_RR_Geofencing.toString().replace(regex,'');
                    var S_CNT_MC_Geofencing = CNT_MC_Geofencing.toString().replace(regex,'');

                    var S_CNT_RR_Video = CNT_RR_Video.toString().replace(regex,'');
                    var S_CNT_MC_Video = CNT_MC_Video.toString().replace(regex,'');

                    var S_CNT_RR_Video_Geofencing = CNT_RR_Video_Geofencing.toString().replace(regex,'');
                    var S_CNT_MC_Video_Geofencing = CNT_MC_Video_Geofencing.toString().replace(regex,'');

                    CNT_Block_MC_3=
                        floorOrCeil(
                        (((S_CNT_Block_V_3*S_CNT_BW_Display)/S_CNT_RR_Display)*S_CNT_MC_Display)+
                        (((S_CNT_Block_V_3*S_CNT_BW_OTT_CTV)/S_CNT_RR_OTT_CTV)*S_CNT_MC_OTT_CTV)+
                        (((S_CNT_Block_V_3*S_CNT_BW_Geofencing)/S_CNT_RR_Geofencing)*S_CNT_MC_Geofencing)+
                        (((S_CNT_Block_V_3*S_CNT_BW_Video)/S_CNT_RR_Video)*S_CNT_MC_Video)+
                        (((S_CNT_Block_V_3*S_CNT_BW_Video_Geofencing)/S_CNT_RR_Video_Geofencing)*S_CNT_MC_Video_Geofencing)
                        );

                    return floorOrCeil(
                            (((S_CNT_Block_V_3*S_CNT_BW_Display)/S_CNT_RR_Display)*S_CNT_MC_Display)+
                            (((S_CNT_Block_V_3*S_CNT_BW_OTT_CTV)/S_CNT_RR_OTT_CTV)*S_CNT_MC_OTT_CTV)+
                            (((S_CNT_Block_V_3*S_CNT_BW_Geofencing)/S_CNT_RR_Geofencing)*S_CNT_MC_Geofencing)+
                            (((S_CNT_Block_V_3*S_CNT_BW_Video)/S_CNT_RR_Video)*S_CNT_MC_Video)+
                            (((S_CNT_Block_V_3*S_CNT_BW_Video_Geofencing)/S_CNT_RR_Video_Geofencing)*S_CNT_MC_Video_Geofencing)
                        );
                }
                function tactic_net_SNR_row_1(){

                    var regex = /[$,%\s]/g;
                    var S_CNT_Block_MCMC_1   = CNT_Block_MCMC_1.toString().replace(regex,'');
                    var S_CNT_Block_SC_1     = CNT_Block_SC_1.toString().replace(regex,'');
                    CNT_Block_SNR_1  = floorOrCeil(S_CNT_Block_MCMC_1 - S_CNT_Block_SC_1);
                    console.log("NET TACTIC SNR 1");
                    return CNT_Block_SNR_1;
                }
                function tactic_net_SNR_row_2(){
                    var regex = /[$,%\s]/g;
                    var S_CN_Block_MCMC_2   = CNT_Block_MCMC_2.toString().replace(regex,'');
                    var S_CN_Block_SC_2     = CNT_Block_SC_2.toString().replace(regex,'');
                    CNT_Block_SNR_2  = floorOrCeil(S_CN_Block_MCMC_2 - S_CN_Block_SC_2);
                    console.log("NET TACTIC SNR 2");
                    return CNT_Block_SNR_2;
                }
                function tactic_net_SNR_row_3(){
                    var regex = /[$,%\s]/g;
                    var S_CNT_Block_MCMC_3   = CNT_Block_MCMC_3.toString().replace(regex,'');
                    var S_CNT_Block_SC_3     = CNT_Block_SC_3.toString().replace(regex,'');
                    CNT_Block_SNR_3  = floorOrCeil(S_CNT_Block_MCMC_3 - S_CNT_Block_SC_3);
                    console.log("NET TACTIC SNR 3");
                    return CNT_Block_SNR_3;
                }


                $(document).ready(function () {
                    var NET_TACTIC_MARGIN_elementMapping  = {
                        CNT_BW_Display: "CNT_BW_Display",
                        CNT_BW_Geofencing : "CNT_BW_Geofencing",
                        CNT_BW_Video:"CNT_BW_Video",
                        CNT_BW_Video_Geofencing:"CNT_BW_Video_Geofencing",
                        CNT_BW_OTT_CTV:"CNT_BW_OTT_CTV",
                        CNT_RR_Display: "CNT_RR_Display",
                        CNT_RR_Geofencing: "CNT_RR_Geofencing",
                        CNT_RR_Video: "CNT_RR_Video",
                        CNT_RR_Video_Geofencing: "CNT_RR_Video_Geofencing",
                        CNT_RR_OTT_CTV: "CNT_RR_OTT_CTV",
                        CNT_MC_Display:"CNT_MC_Display",
                        CNT_MC_Geofencing:"CNT_MC_Geofencing",
                        CNT_MC_Video:"CNT_MC_Video",
                        CNT_MC_Video_Geofencing:"CNT_MC_Video_Geofencing",
                        CNT_MC_OTT_CTV:"CNT_MC_OTT_CTV",

                        CNT_Commission_D:"CNT_Commission_D",
                        CNT_Commission_G:"CNT_Commission_G",
                        CNT_Commission_V:"CNT_Commission_V",
                        CNT_Commission_VG:"CNT_Commission_VG",
                        CNT_Commission_OC:"CNT_Commission_OC",



                    }
                    var NET_TACTIC_ABSV_elementMapping={
                        CNT_Block_V_1:"CNT_Block_V_1",
                        CNT_Block_V_2:"CNT_Block_V_2",
                        CNT_Block_V_3:"CNT_Block_V_3"
                    }

                    $("#CNT_Block_MCMC_1").text("$" + tactic_net_MCMC_row_1().toFixed(2));
                    $("#CNT_Block_SC_1").text("$" + tactic_net_SC_row_1().toFixed(2));
                    $("#CNT_Block_MC_1").text("$" + tactic_net_MC_row_1().toFixed(2));
                    $("#CNT_Block_SNR_1").text("$" + tactic_net_SNR_row_1().toFixed(2));

                    $("#CNT_Block_MCMC_2").text("$" + tactic_net_MCMC_row_2().toFixed(2));
                    $("#CNT_Block_SC_2").text("$" + tactic_net_SC_row_2().toFixed(2));
                    $("#CNT_Block_MC_2").text("$" + tactic_net_MC_row_2().toFixed(2));
                    $("#CNT_Block_SNR_2").text("$" + tactic_net_SNR_row_2().toFixed(2));

                    $("#CNT_Block_MCMC_3").text("$" + tactic_net_MCMC_row_3().toFixed(2));
                    $("#CNT_Block_SC_3").text("$" + tactic_net_SC_row_3().toFixed(2));
                    $("#CNT_Block_MC_3").text("$" + tactic_net_MC_row_3().toFixed(2));
                    $("#CNT_Block_SNR_3").text("$" + tactic_net_SNR_row_3().toFixed(2));

                    function NET_TACTIC_MARGIN_Variables_keyup() {

                        console.log("Current ID After KeyUp :" + $(this).attr("id"));
                        var current_id = $(this).attr("id");

                        for (var variable in NET_TACTIC_MARGIN_elementMapping)
                        {
                            // getting the matched value and updating the variable
                            var elementID = NET_TACTIC_MARGIN_elementMapping[variable];
                            window[variable] = $("#" + elementID).val();

                            // console.log("==="+ $("#"+ elementID).attr("id"));    // printing current id
                        }

                        if(current_id == "CNT_RR_Display" || current_id == "CNT_MC_Display"){
                            // get NET - Display - Margin and Margin Percentage
                            $("#CNT_M_Display").val("$" + tactic_net_margin_display()+" ("+tactic_net_margin_display_p()+"%)");
                        }
                        if(current_id=="CNT_RR_Geofencing" || current_id == "CNT_MC_Geofencing"){
                            // get NET - Geofencing - Margin and Margin Percentage
                            $("#CNT_M_Geofencing").val("$" + tactic_net_margin_geofencing()+ " ("+tactic_net_margin_geofencing_p()+"%)");
                        }
                        if(current_id=="CNT_RR_Video" || current_id == "CNT_MC_Video"){
                            // get NET - Video - Margin and Margin Percentage
                            $("#CNT_M_Video").val("$" + tactic_net_margin_video()+ " ("+tactic_net_margin_video_p()+"%)");
                        }
                        if(current_id=="CNT_RR_Video_Geofencing" || current_id == "CNT_MC_Video_Geofencing"){
                            // get NET - Video Geofencing - Margin and Margin Percentage
                            $("#CNT_M_Video_Geofencing").val("$" + tactic_net_margin_video_geofencing()+ " ("+tactic_net_margin_video_geofencing_p()+"%)");
                        }
                        if(current_id=="CNT_RR_OTT_CTV" || current_id == "CNT_MC_OTT_CTV"){
                            // get NET - Video Geofencing - Margin and Margin Percentage
                            $("#CNT_M_OTT_CTV").val("$" + tactic_net_margin_ott_ctv()+ " ("+tactic_net_margin_ott_ctv_p()+"%)");
                        }

                        if(
                            current_id == "CNT_Commission_D" ||
                            current_id == "CNT_Commission_G" ||
                            current_id == "CNT_Commission_V" ||
                            current_id == "CNT_Commission_VG" ||
                            current_id == "CNT_Commission_OC" ||

                            current_id == "CNT_BW_Display" || current_id == "CNT_BW_Geofencing" ||
                            current_id == "CNT_BW_Video" || current_id == "CNT_BW_Video_Geofencing" || current_id ==  "CNT_BW_OTT_CTV"){
// get NET - Display - Margin and Margin Percentage
                            //$("#CN_Block_MCMC_1").text("$" + net_MCMC_row_1().toFixed(2));
                            $("#CNT_Block_MCMC_1").text("$" + tactic_net_MCMC_row_1());
                            $("#CNT_Block_MC_1").text("$" + tactic_net_MC_row_1().toFixed(2));
                            $("#CNT_Block_SC_1").text("$" + tactic_net_SC_row_1().toFixed(2));
                            $("#CNT_Block_SNR_1").text("$" + tactic_net_SNR_row_1().toFixed(2));

                            $("#CNT_Block_MCMC_2").text("$" + tactic_net_MCMC_row_2().toFixed(2));
                            $("#CNT_Block_MC_2").text("$" + tactic_net_MC_row_2().toFixed(2));
                            $("#CNT_Block_SC_2").text("$" + tactic_net_SC_row_2().toFixed(2));
                            $("#CNT_Block_SNR_2").text("$" + tactic_net_SNR_row_2().toFixed(2));

                            $("#CNT_Block_MCMC_3").text("$" + tactic_net_MCMC_row_3().toFixed(2));
                            $("#CNT_Block_MC_3").text("$" + tactic_net_MC_row_3().toFixed(2));
                            $("#CNT_Block_SC_3").text("$" + tactic_net_SC_row_3().toFixed(2));
                            $("#CNT_Block_SNR_3").text("$" + tactic_net_SNR_row_3().toFixed(2));
                        }

                    }
                    function NET_TACTIC_MARGIN_Variables_blur() {

                        console.log("Current ID after Blur :" + $(this).attr("id"));
                        var current_id = $(this).attr("id");


                        for (var variable in NET_TACTIC_MARGIN_elementMapping) {
                            var elementID = NET_TACTIC_MARGIN_elementMapping[variable];
                            window[variable] = $("#" + elementID).val();

                            var inputValue = $("#" + elementID).val();
                            var parsedValue = parseFloat(inputValue); // Parse the input value to a floating-point number
                            if (!isNaN(parsedValue)){
                                $("#" + elementID).val("$" + parsedValue.toFixed(2)); // Add the dollar sign and format the number with 2 decimal places

                                for (let i = 0; i < keywords_net_tactic.length; i++) {
                                    var regex = /[$,%\s]/g;
                                    const keyword = keywords_net_tactic[i];
                                    const cleanedValue = $('#'+keyword).val().replace(regex, ''); // Apply the regex and remove any matches
                                    $('#'+keyword).val(cleanedValue+'%');
                                    $('#'+keyword).text(cleanedValue+'%');
                                }
                            }

                        }

                        if(current_id == "CNT_RR_Display" || current_id == "CNT_MC_Display"){
                            // get NET - Display - Margin and Margin Percentage
                            $("#CNT_M_Display").val("$" + tactic_net_margin_display()+" ("+tactic_net_margin_display_p()+"%)");
                        }
                        if(current_id=="CNT_RR_Geofencing" || current_id == "CNT_MC_Geofencing"){
                            // get NET - Geofencing - Margin and Margin Percentage
                            $("#CNT_M_Geofencing").val("$" + tactic_net_margin_geofencing()+ " ("+tactic_net_margin_geofencing_p()+"%)");
                        }
                        if(current_id=="CNT_RR_Video" || current_id == "CNT_MC_Video"){
                            // get NET - Video - Margin and Margin Percentage
                            $("#CNT_M_Video").val("$" + tactic_net_margin_video()+ " ("+tactic_net_margin_video_p()+"%)");
                        }
                        if(current_id=="CNT_RR_Video_Geofencing" || current_id == "CNT_MC_Video_Geofencing"){
                            // get NET - Video Geofencing - Margin and Margin Percentage
                            $("#CNT_M_Video_Geofencing").val("$" + tactic_net_margin_video_geofencing()+ " ("+tactic_net_margin_video_geofencing_p()+"%)");
                        }
                        if(current_id=="CNT_RR_OTT_CTV" || current_id == "CNT_MC_OTT_CTV"){
                            // get NET - Video Geofencing - Margin and Margin Percentage
                            $("#CNT_M_OTT_CTV").val("$" + tactic_net_margin_ott_ctv()+ " ("+tactic_net_margin_ott_ctv_p()+"%)");
                        }

                    }

                    function NET_TACTIC_ABSV_keyup() {

                        console.log("Current ID After KeyUp :" + $(this).attr("id"));
                        var current_id = $(this).attr("id");

                        for (var variable in NET_TACTIC_ABSV_elementMapping) {
                            // getting the matched value and updating the variable
                            var elementID = NET_TACTIC_ABSV_elementMapping[variable];
                            console.log(NET_TACTIC_ABSV_elementMapping[variable]);
                            window[variable] = $("#" + elementID).val();
                            console.log(window[variable]);
                            // console.log("==="+ $("#"+ elementID).attr("id"));    // printing current id

                        }

                        if(current_id == "CNT_Block_V_1"){
                            // get NET - Display - Margin and Margin Percentage
                            $("#CNT_Block_MCMC_1").text("$" + tactic_net_MCMC_row_1().toFixed(2));
                            $("#CNT_Block_SC_1").text("$"   + tactic_net_SC_row_1().toFixed(2));
                            $("#CNT_Block_MC_1").text("$"   + tactic_net_MC_row_1().toFixed(2));
                            $("#CNT_Block_SNR_1").text("$"  + tactic_net_SNR_row_1().toFixed(2));
                        }
                        if(current_id=="CNT_Block_V_2"){
                            // get NET - Geofencing - Margin and Margin Percentage
                            $("#CNT_Block_MCMC_2").text("$" + tactic_net_MCMC_row_2().toFixed(2));
                            $("#CNT_Block_SC_2").text("$"   + tactic_net_SC_row_2().toFixed(2));
                            $("#CNT_Block_MC_2").text("$"   + tactic_net_MC_row_2().toFixed(2));
                            $("#CNT_Block_SNR_2").text("$"  + tactic_net_SNR_row_2().toFixed(2));
                        }
                        if(current_id=="CNT_Block_V_3"){
                            // get NET - Video - Margin and Margin Percentage
                            $("#CNT_Block_MCMC_3").text("$" + tactic_net_MCMC_row_3().toFixed(2));
                            $("#CNT_Block_SC_3").text("$"   + tactic_net_SC_row_3().toFixed(2));
                            $("#CNT_Block_MC_3").text("$"   + tactic_net_MC_row_3().toFixed(2));
                            $("#CNT_Block_SNR_3").text("$"  + tactic_net_SNR_row_3().toFixed(2));
                        }

                    }
                    function NET_TACTIC_ABSV_blur() {

                        console.log("Current ID after Blur :" + $(this).attr("id"));
                        var current_id = $(this).attr("id");


                        for (var variable in NET_TACTIC_ABSV_elementMapping) {
                            var elementID = NET_TACTIC_ABSV_elementMapping[variable];
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

                        if(current_id == "CNT_Block_V_1"){
// get NET - Display - Margin and Margin Percentage
                            $("#CNT_Block_MCMC_1").text("$" + tactic_net_MCMC_row_1().toFixed(2));
                            $("#CNT_Block_SC_1").text("$"   + tactic_net_SC_row_1().toFixed(2));
                            $("#CNT_Block_MC_1").text("$"   + tactic_net_MC_row_1().toFixed(2));
                            $("#CNT_Block_SNR_1").text("$"  + tactic_net_SNR_row_1().toFixed(2));
                        }
                        if(current_id=="CNT_Block_V_2"){
// get NET - Geofencing - Margin and Margin Percentage
                            $("#CNT_Block_MCMC_2").text("$" + tactic_net_MCMC_row_2().toFixed(2));
                            $("#CNT_Block_SC_2").text("$"   + tactic_net_SC_row_2().toFixed(2));
                            $("#CNT_Block_MC_2").text("$"   + tactic_net_MC_row_2().toFixed(2));
                            $("#CNT_Block_SNR_2").text("$"  + tactic_net_SNR_row_2().toFixed(2));
                        }
                        if(current_id=="CNT_Block_V_3"){
// get NET - Video - Margin and Margin Percentage
                            $("#CNT_Block_MCMC_3").text("$" + tactic_net_MCMC_row_3().toFixed(2));
                            $("#CNT_Block_SC_3").text("$"   + tactic_net_SC_row_3().toFixed(2));
                            $("#CNT_Block_MC_3").text("$"   + tactic_net_MC_row_3().toFixed(2));
                            $("#CNT_Block_SNR_3").text("$"  + tactic_net_SNR_row_3().toFixed(2));
                        }

                    }

                    for (var variable in NET_TACTIC_MARGIN_elementMapping)
                    {
                        var elementID = NET_TACTIC_MARGIN_elementMapping[variable];

                        //$("#" + elementID).on("keyup blur", updateVariables);
                        $("#" + elementID).on("keyup", NET_TACTIC_MARGIN_Variables_keyup);
                        $("#" + elementID).on("blur", NET_TACTIC_MARGIN_Variables_blur);

                    }
                    for (var variable in NET_TACTIC_ABSV_elementMapping)
                    {
                        var elementID = NET_TACTIC_ABSV_elementMapping[variable];

                        console.log(elementID);
                        //$("#" + elementID).on("keyup blur", updateVariables);
                        $("#" + elementID).on("keyup", NET_TACTIC_ABSV_keyup());
                        $("#" + elementID).on("blur",  NET_TACTIC_ABSV_blur());

                    }
                });
