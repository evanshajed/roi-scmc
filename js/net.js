//   N E T

const keyword_net = [
    "CN_BW_Display",
    "CN_BW_Geofencing",
    "CN_BW_Video",
    "CN_BW_Video_Geofencing",
    "CN_BW_OTT_CTV",
    "CN_Commission"
];

function floorOrCeil(value) {
    var fractionalPart = value - Math.floor(value);
    return fractionalPart >= 0.5 ? Math.ceil(value) : Math.floor(value);
    //return fractionalPart >  0.5 ? Math.ceil(value) : Math.floor(value);
}


//  Budget Weighting
CN_BW_Display=60; CN_BW_Geofencing=5;  CN_BW_Video=20;  CN_BW_Video_Geofencing=5;  CN_BW_OTT_CTV=10;
//  Retail Rate
CN_RR_Display=12;   CN_RR_Geofencing=15;    CN_RR_Video=22;   CN_RR_Video_Geofencing=26;    CN_RR_OTT_CTV=33;
//  Media Costs
CN_MC_Display=4.25; CN_MC_Geofencing=5;     CN_MC_Video=12.5; CN_MC_Video_Geofencing=13.50; CN_MC_OTT_CTV=17;
//  Margin
CN_M_Display=7.75;  CN_M_Geofencing=10;     CN_M_Video=9.50;  CN_M_Video_Geofencing=12.50;  CN_M_OTT_CTV=16;
//  Margin Percentage
CN_M_P_Display=0.65;CN_M_P_Geofencing=0.67; CN_M_P_Video=0.43;CN_M_P_Video_Geofencing=0.48; CN_M_P_OTT_CTV=0.48;

//commission %:
CN_Commission=20;

CN_Block_V_1=10000; let CN_Block_MCMC_1=0; let CN_Block_SC_1=0; let CN_Block_MC_1=0; let CN_SNR_1=0;
CN_Block_V_2=30000; let CN_Block_MCMC_2=0; let CN_Block_SC_2=0; let CN_Block_MC_2=0; let CN_SNR_2=0;
CN_Block_V_3=50000; let CN_Block_MCMC_3=0; let CN_Block_SC_3=0; let CN_Block_MC_3=0; let CN_SNR_3=0;


///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
function net_margin_display(){

    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var CN_RR_Display_stripped = CN_RR_Display.replace(regex, '');
    var CN_MC_Display_stripped = CN_MC_Display.replace(regex, '');
    //console.log (CN_RR_Display_stripped - CN_MC_Display_stripped);
    return (CN_RR_Display_stripped - CN_MC_Display_stripped).toFixed(2);
}
function net_margin_display_p(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var margin_percentage = net_margin_display() / CN_RR_Display.replace(regex,'');

    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    //console.log( percent.toFixed(2));

    return percent.toFixed(2);
}
///////////////////////////////////////////////////////////////////////////////////
function net_margin_geofencing(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var CN_RR_Geofencing_stripped = CN_RR_Geofencing.replace(regex,'');
    var CN_MC_Geofencing_stripped = CN_MC_Geofencing.replace(regex,'');

    return (CN_RR_Geofencing_stripped - CN_MC_Geofencing_stripped);
}
function net_margin_geofencing_p(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var margin_percentage = net_margin_geofencing() / CN_RR_Geofencing.replace(regex,'');

    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    //console.log( percent.toFixed(2));

    return percent.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////
function net_margin_video(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var CN_RR_Video_stripped = CN_RR_Video.replace(regex,'');
    var CN_MC_Video_stripped = CN_MC_Video.replace(regex,'');

    return (CN_RR_Video_stripped - CN_MC_Video_stripped);
}
function net_margin_video_p(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var margin_percentage = net_margin_video() / CN_RR_Video.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;
    return percent.toFixed(2);
}
////////////////////////////////////////////////////////////////////////////////////
function net_margin_video_geofencing(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var CN_RR_Video_Geofencing_stripped = CN_RR_Video_Geofencing.replace(regex,'');
    var CN_MC_Video_Geofencing_stripped = CN_MC_Video_Geofencing.replace(regex,'');
    return (CN_RR_Video_Geofencing_stripped - CN_MC_Video_Geofencing_stripped);
}
function net_margin_video_geofencing_p(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var margin_percentage = net_margin_video_geofencing() / CN_RR_Video_Geofencing.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;

    return percent.toFixed(2);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
function net_margin_ott_ctv(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var CN_RR_OTT_CTV_stripped = CN_RR_OTT_CTV.replace(regex,'');
    var CN_MC_OTT_CTV_stripped = CN_MC_OTT_CTV.replace(regex,'');
    return (CN_RR_OTT_CTV_stripped - CN_MC_OTT_CTV_stripped);
}
function net_margin_ott_ctv_p(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var margin_percentage = net_margin_ott_ctv() / CN_RR_OTT_CTV.replace(regex,'');
    margin_percentage = margin_percentage.toFixed(2);
    var percent = margin_percentage*100;

    return percent.toFixed(2);
}
///////////////////////////////////////////////////////////////////////////////////

function net_MCMC_row_1(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Block_V_1         = CN_Block_V_1.toString().replace(regex,'');

    var S_CN_BW_Display        = CN_BW_Display.toString().replace(regex,'') / 100;
    var S_CN_BW_Geofencing     = CN_BW_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_Video          = CN_BW_Video.toString().replace(regex,'') / 100;
    var S_CN_BW_Video_Geofencing     = CN_BW_Video_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_OTT_CTV              = CN_BW_OTT_CTV.toString().replace(regex,'') / 100;

    var S_CN_M_Display         = CN_M_Display.toString().replace(regex,'');
    S_CN_M_Display= S_CN_M_Display.slice(0, CN_M_Display.toString().replace(regex,'').indexOf('('));

    var S_CN_M_Geofencing      = CN_M_Geofencing.toString().replace(regex,'');
    S_CN_M_Geofencing= S_CN_M_Geofencing.slice(0, CN_M_Geofencing.toString().replace(regex,'').indexOf('('));

    var S_CN_M_Video           = CN_M_Video.toString().replace(regex,'');
    S_CN_M_Video= S_CN_M_Video.slice(0, CN_M_Video.toString().replace(regex,'').indexOf('('));

    var S_CN_M_Video_Geofencing  = CN_M_Video_Geofencing.toString().replace(regex,'');
    S_CN_M_Video_Geofencing= S_CN_M_Video_Geofencing.slice(0, CN_M_Video_Geofencing.toString().replace(regex,'').indexOf('('));

    var S_CN_M_OTT_CTV         = CN_M_OTT_CTV.toString().replace(regex,'');
    S_CN_M_OTT_CTV= S_CN_M_OTT_CTV.slice(0, CN_M_OTT_CTV.toString().replace(regex,'').indexOf('('));


    var S_CN_RR_Display        = CN_RR_Display.toString().replace(regex,'');
    var S_CN_RR_OTT_CTV        = CN_RR_OTT_CTV.toString().replace(regex,'');
    var S_CN_RR_Geofencing     = CN_RR_Geofencing.toString().replace(regex,'');
    var S_CN_RR_Video          = CN_RR_Video.toString().replace(regex,'');
    var S_CN_RR_Video_Geofencing = CN_RR_Video_Geofencing.toString().replace(regex,'');


    //console.log((((( S_CN_Block_V_1 * S_CN_BW_Display ) / S_CN_RR_Display  )  * S_CN_M_Display)+(((S_CN_Block_V_1 * S_CN_BW_OTT_CTV )  / S_CN_RR_OTT_CTV)  * S_CN_M_OTT_CTV)+(((S_CN_Block_V_1* S_CN_BW_Display)/ S_CN_RR_Geofencing)*S_CN_M_Geofencing)+(((S_CN_Block_V_1*S_CN_BW_Video )/S_CN_RR_Video)*S_CN_M_Video)+(((S_CN_Block_V_1*S_CN_BW_Video_Geofencing)/S_CN_RR_Video_Geofencing)*S_CN_M_Video_Geofencing)));


    console.log(
        "NET"+
        S_CN_Block_V_1 +"--"+ S_CN_BW_Display           +"--"+ S_CN_RR_Display              +"--"+S_CN_M_Display+"\n"
        +S_CN_Block_V_1 +"--"+ S_CN_BW_OTT_CTV          +"--"+ S_CN_RR_OTT_CTV              +"--"+ S_CN_M_OTT_CTV+"\n"
        +S_CN_Block_V_1 +"--"+ S_CN_BW_Geofencing          +"--"+ S_CN_RR_Geofencing           +"--"+ S_CN_M_Geofencing+"\n"
        +S_CN_Block_V_1 +"--"+ S_CN_BW_Video            +"--"+ S_CN_RR_Video                +"--"+ S_CN_M_Video+"\n"
        +S_CN_Block_V_1 +"--"+ S_CN_BW_Video_Geofencing +"--"+ S_CN_RR_Video_Geofencing     +"--"+ S_CN_M_Video_Geofencing+"\n"

    );


    CN_Block_MCMC_1 =
        floorOrCeil(
            ((( S_CN_Block_V_1 * S_CN_BW_Display        ) / S_CN_RR_Display      )* S_CN_M_Display)
            +(((S_CN_Block_V_1 * S_CN_BW_OTT_CTV        ) / S_CN_RR_OTT_CTV      )* S_CN_M_OTT_CTV)
            +(((S_CN_Block_V_1 * S_CN_BW_Geofencing     ) / S_CN_RR_Geofencing   )* S_CN_M_Geofencing)
            +(((S_CN_Block_V_1 * S_CN_BW_Video          ) / S_CN_RR_Video        )* S_CN_M_Video)
            +(((S_CN_Block_V_1 * S_CN_BW_Video_Geofencing)/ S_CN_RR_Video_Geofencing)* S_CN_M_Video_Geofencing)
        );

    return floorOrCeil(
        ((( S_CN_Block_V_1 * S_CN_BW_Display        ) / S_CN_RR_Display          )* S_CN_M_Display)
        +(((S_CN_Block_V_1 * S_CN_BW_OTT_CTV        ) / S_CN_RR_OTT_CTV          )* S_CN_M_OTT_CTV)
        +(((S_CN_Block_V_1 * S_CN_BW_Geofencing        ) / S_CN_RR_Geofencing       )* S_CN_M_Geofencing)
        +(((S_CN_Block_V_1 * S_CN_BW_Video           ) / S_CN_RR_Video            )* S_CN_M_Video)
        +(((S_CN_Block_V_1 * S_CN_BW_Video_Geofencing) / S_CN_RR_Video_Geofencing )* S_CN_M_Video_Geofencing)
    );
}
function net_MCMC_row_2(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;

    var S_CN_Block_V_2 = CN_Block_V_2.toString().replace(regex,'');

    var S_CN_BW_Display        = CN_BW_Display.toString().replace(regex,'') / 100;
    var S_CN_BW_Geofencing     = CN_BW_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_Video          = CN_BW_Video.toString().replace(regex,'') / 100;
    var S_CN_BW_Video_Geofencing     = CN_BW_Video_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_OTT_CTV              = CN_BW_OTT_CTV.toString().replace(regex,'') / 100;
    var S_CN_RR_Display        = CN_RR_Display.toString().replace(regex,'');

    var S_CN_M_Display         = CN_M_Display.toString().replace(regex,'');
    S_CN_M_Display= S_CN_M_Display.slice(0, CN_M_Display.toString().replace(regex,'').indexOf('('));

    var S_CN_M_Geofencing      = CN_M_Geofencing.toString().replace(regex,'');
    S_CN_M_Geofencing= S_CN_M_Geofencing.slice(0, CN_M_Geofencing.toString().replace(regex,'').indexOf('('));

    var S_CN_M_Video           = CN_M_Video.toString().replace(regex,'');
    S_CN_M_Video= S_CN_M_Video.slice(0, CN_M_Video.toString().replace(regex,'').indexOf('('));

    var S_CN_M_Video_Geofencing  = CN_M_Video_Geofencing.toString().replace(regex,'');
    S_CN_M_Video_Geofencing= S_CN_M_Video_Geofencing.slice(0, CN_M_Video_Geofencing.toString().replace(regex,'').indexOf('('));

    var S_CN_M_OTT_CTV         = CN_M_OTT_CTV.toString().replace(regex,'');
    S_CN_M_OTT_CTV= S_CN_M_OTT_CTV.slice(0, CN_M_OTT_CTV.toString().replace(regex,'').indexOf('('));

    var S_CN_RR_OTT_CTV        = CN_RR_OTT_CTV.toString().replace(regex,'');
    var S_CN_RR_Geofencing     = CN_RR_Geofencing.toString().replace(regex,'');
    var S_CN_RR_Video          = CN_RR_Video.toString().replace(regex,'');
    var S_CN_RR_Video_Geofencing = CN_RR_Video_Geofencing.toString().replace(regex,'');


    //console.log((((( S_CN_Block_V_1 * S_CN_BW_Display ) / S_CN_RR_Display  )  * S_CN_M_Display)+(((S_CN_Block_V_1 * S_CN_BW_OTT_CTV )  / S_CN_RR_OTT_CTV)  * S_CN_M_OTT_CTV)+(((S_CN_Block_V_1* S_CN_BW_Display)/ S_CN_RR_Geofencing)*S_CN_M_Geofencing)+(((S_CN_Block_V_1*S_CN_BW_Video )/S_CN_RR_Video)*S_CN_M_Video)+(((S_CN_Block_V_1*S_CN_BW_Video_Geofencing)/S_CN_RR_Video_Geofencing)*S_CN_M_Video_Geofencing)));

    CN_Block_MCMC_2 =
        floorOrCeil(
            ((( S_CN_Block_V_2 * S_CN_BW_Display        ) / S_CN_RR_Display      )* S_CN_M_Display)
            +(((S_CN_Block_V_2 * S_CN_BW_OTT_CTV        ) / S_CN_RR_OTT_CTV      )* S_CN_M_OTT_CTV)
            +(((S_CN_Block_V_2 * S_CN_BW_Geofencing     ) / S_CN_RR_Geofencing   )* S_CN_M_Geofencing)
            +(((S_CN_Block_V_2 * S_CN_BW_Video          ) / S_CN_RR_Video        )* S_CN_M_Video)
            +(((S_CN_Block_V_2 * S_CN_BW_Video_Geofencing)/ S_CN_RR_Video_Geofencing)* S_CN_M_Video_Geofencing)
        );


    console.log(
        "NET"+
        S_CN_Block_V_2 +"--"+ S_CN_BW_Display           +"--"+ S_CN_RR_Display          +"--"+S_CN_M_Display+"\n"
        +S_CN_Block_V_2 +"--"+ S_CN_BW_OTT_CTV          +"--"+ S_CN_RR_OTT_CTV          +"--"+ S_CN_M_OTT_CTV+"\n"
        +S_CN_Block_V_2 +"--"+ S_CN_BW_Geofencing       +"--"+ S_CN_RR_Geofencing       +"--"+ S_CN_M_Geofencing+"\n"
        +S_CN_Block_V_2 +"--"+ S_CN_BW_Video            +"--"+ S_CN_RR_Video            +"--"+ S_CN_M_Video+"\n"
        +S_CN_Block_V_2 +"--"+ S_CN_BW_Video_Geofencing +"--"+ S_CN_RR_Video_Geofencing +"--"+ S_CN_M_Video_Geofencing+"\n"

    );

    return floorOrCeil(
        ((( S_CN_Block_V_2 * S_CN_BW_Display        ) / S_CN_RR_Display     )* S_CN_M_Display)
        +(((S_CN_Block_V_2 * S_CN_BW_OTT_CTV        ) / S_CN_RR_OTT_CTV     )* S_CN_M_OTT_CTV)
        +(((S_CN_Block_V_2 * S_CN_BW_Geofencing     ) / S_CN_RR_Geofencing  )* S_CN_M_Geofencing)
        +(((S_CN_Block_V_2 * S_CN_BW_Video          ) / S_CN_RR_Video       )* S_CN_M_Video)
        +(((S_CN_Block_V_2 * S_CN_BW_Video_Geofencing) / S_CN_RR_Video_Geofencing )* S_CN_M_Video_Geofencing)
    );
}
function net_MCMC_row_3(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Block_V_3         = CN_Block_V_3.toString().replace(regex,'');


    var S_CN_BW_Display        = CN_BW_Display.toString().replace(regex,'') / 100;
    var S_CN_BW_Geofencing     = CN_BW_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_Video          = CN_BW_Video.toString().replace(regex,'') / 100;
    var S_CN_BW_Video_Geofencing     = CN_BW_Video_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_OTT_CTV              = CN_BW_OTT_CTV.toString().replace(regex,'') / 100;


    var S_CN_RR_Display        = CN_RR_Display.toString().replace(regex,'');

    var S_CN_M_Display         = CN_M_Display.toString().replace(regex,'');
    S_CN_M_Display= S_CN_M_Display.slice(0, CN_M_Display.toString().replace(regex,'').indexOf('('));

    var S_CN_M_Geofencing      = CN_M_Geofencing.toString().replace(regex,'');
    S_CN_M_Geofencing= S_CN_M_Geofencing.slice(0, CN_M_Geofencing.toString().replace(regex,'').indexOf('('));

    var S_CN_M_Video           = CN_M_Video.toString().replace(regex,'');
    S_CN_M_Video= S_CN_M_Video.slice(0, CN_M_Video.toString().replace(regex,'').indexOf('('));

    var S_CN_M_Video_Geofencing  = CN_M_Video_Geofencing.toString().replace(regex,'');
    S_CN_M_Video_Geofencing= S_CN_M_Video_Geofencing.slice(0, CN_M_Video_Geofencing.toString().replace(regex,'').indexOf('('));

    var S_CN_M_OTT_CTV         = CN_M_OTT_CTV.toString().replace(regex,'');
    S_CN_M_OTT_CTV= S_CN_M_OTT_CTV.slice(0, CN_M_OTT_CTV.toString().replace(regex,'').indexOf('('));

    var S_CN_RR_OTT_CTV        = CN_RR_OTT_CTV.toString().replace(regex,'');
    var S_CN_RR_Geofencing     = CN_RR_Geofencing.toString().replace(regex,'');
    var S_CN_RR_Video          = CN_RR_Video.toString().replace(regex,'');
    var S_CN_RR_Video_Geofencing = CN_RR_Video_Geofencing.toString().replace(regex,'');


    //console.log((((( S_CN_Block_V_1 * S_CN_BW_Display ) / S_CN_RR_Display  )  * S_CN_M_Display)+(((S_CN_Block_V_1 * S_CN_BW_OTT_CTV )  / S_CN_RR_OTT_CTV)  * S_CN_M_OTT_CTV)+(((S_CN_Block_V_1* S_CN_BW_Display)/ S_CN_RR_Geofencing)*S_CN_M_Geofencing)+(((S_CN_Block_V_1*S_CN_BW_Video )/S_CN_RR_Video)*S_CN_M_Video)+(((S_CN_Block_V_1*S_CN_BW_Video_Geofencing)/S_CN_RR_Video_Geofencing)*S_CN_M_Video_Geofencing)));

    console.log(
        "NET"+
        S_CN_Block_V_3 +"--"+ S_CN_BW_Display           +"--"+ S_CN_RR_Display          +"--"+S_CN_M_Display+"\n"
        +S_CN_Block_V_3 +"--"+ S_CN_BW_OTT_CTV          +"--"+ S_CN_RR_OTT_CTV          +"--"+ S_CN_M_OTT_CTV+"\n"
        +S_CN_Block_V_3 +"--"+ S_CN_BW_Geofencing       +"--"+ S_CN_RR_Geofencing       +"--"+ S_CN_M_Geofencing+"\n"
        +S_CN_Block_V_3 +"--"+ S_CN_BW_Video            +"--"+ S_CN_RR_Video            +"--"+ S_CN_M_Video+"\n"
        +S_CN_Block_V_3 +"--"+ S_CN_BW_Video_Geofencing +"--"+ S_CN_RR_Video_Geofencing +"--"+ S_CN_M_Video_Geofencing+"\n"

    );

    CN_Block_MCMC_3 =floorOrCeil(
        ((( S_CN_Block_V_3 * S_CN_BW_Display        ) / S_CN_RR_Display      )* S_CN_M_Display)
        +(((S_CN_Block_V_3 * S_CN_BW_OTT_CTV        ) / S_CN_RR_OTT_CTV      )* S_CN_M_OTT_CTV)
        +(((S_CN_Block_V_3 * S_CN_BW_Geofencing     ) / S_CN_RR_Geofencing   )* S_CN_M_Geofencing)
        +(((S_CN_Block_V_3 * S_CN_BW_Video          ) / S_CN_RR_Video        )* S_CN_M_Video)
        +(((S_CN_Block_V_3 * S_CN_BW_Video_Geofencing)/ S_CN_RR_Video_Geofencing)* S_CN_M_Video_Geofencing)
    );

    return floorOrCeil(
        ((( S_CN_Block_V_3 * S_CN_BW_Display        ) / S_CN_RR_Display      )* S_CN_M_Display)
        +(((S_CN_Block_V_3 * S_CN_BW_OTT_CTV        ) / S_CN_RR_OTT_CTV      )* S_CN_M_OTT_CTV)
        +(((S_CN_Block_V_3 * S_CN_BW_Geofencing     ) / S_CN_RR_Geofencing   )* S_CN_M_Geofencing)
        +(((S_CN_Block_V_3 * S_CN_BW_Video          ) / S_CN_RR_Video        )* S_CN_M_Video)
        +(((S_CN_Block_V_3 * S_CN_BW_Video_Geofencing)/ S_CN_RR_Video_Geofencing)* S_CN_M_Video_Geofencing)
    );
}

function net_SC_row_1(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Commission    = CN_Commission.toString().replace(regex,'') / 100;
    var S_CN_Block_MCMC_1  = CN_Block_MCMC_1.toString().replace(regex,'');
    //console.log("SC-ROW-1 :"+S_CN_Commission);
    //console.log("SC-ROW-1 :"+CN_Block_MCMC_1);
    //console.log("SC-ROW-1 :"+S_CN_Block_MCMC_1);
    CN_Block_SC_1 = floorOrCeil(S_CN_Commission * S_CN_Block_MCMC_1);
    return floorOrCeil(S_CN_Commission * S_CN_Block_MCMC_1);
}
function net_SC_row_2(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Commission    = CN_Commission.toString().replace(regex,'') / 100;
    var S_CN_Block_MCMC_2  = CN_Block_MCMC_2.toString().replace(regex,'');
    //console.log("SC-ROW-2 :"+S_CN_Commission);
    //console.log("SC-ROW-2 :"+CN_Block_MCMC_2);
    CN_Block_SC_2 = floorOrCeil(S_CN_Commission * S_CN_Block_MCMC_2);
    return floorOrCeil(S_CN_Commission * S_CN_Block_MCMC_2);
}
function net_SC_row_3(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Commission    = CN_Commission.toString().replace(regex,'') / 100;
    var S_CN_Block_MCMC_3  = CN_Block_MCMC_3.toString().replace(regex,'');
    CN_Block_SC_3 = floorOrCeil(S_CN_Commission * S_CN_Block_MCMC_3);
    return floorOrCeil(S_CN_Commission * S_CN_Block_MCMC_3);
}

function net_MC_row_1(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Block_V_1  = CN_Block_V_1.toString().replace(regex,'');

    var S_CN_BW_Display        = CN_BW_Display.toString().replace(regex,'') / 100;
    var S_CN_BW_Geofencing     = CN_BW_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_Video          = CN_BW_Video.toString().replace(regex,'') / 100;
    var S_CN_BW_Video_Geofencing     = CN_BW_Video_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_OTT_CTV              = CN_BW_OTT_CTV.toString().replace(regex,'') / 100;

    var S_CN_RR_Display = CN_RR_Display.toString().replace(regex,'');
    var S_CN_MC_Display = CN_MC_Display.toString().replace(regex,'');

    var S_CN_RR_OTT_CTV = CN_RR_OTT_CTV.toString().replace(regex,'');
    var S_CN_MC_OTT_CTV = CN_MC_OTT_CTV.toString().replace(regex,'');

    var S_CN_RR_Geofencing = CN_RR_Geofencing.toString().replace(regex,'');
    var S_CN_MC_Geofencing = CN_MC_Geofencing.toString().replace(regex,'');

    var S_CN_RR_Video = CN_RR_Video.toString().replace(regex,'');
    var S_CN_MC_Video = CN_MC_Video.toString().replace(regex,'');

    var S_CN_RR_Video_Geofencing = CN_RR_Video_Geofencing.toString().replace(regex,'');
    var S_CN_MC_Video_Geofencing = CN_MC_Video_Geofencing.toString().replace(regex,'');

    CN_Block_MC_1=
        floorOrCeil(
            (((S_CN_Block_V_1*S_CN_BW_Display)/S_CN_RR_Display)*S_CN_MC_Display)+
            (((S_CN_Block_V_1*S_CN_BW_OTT_CTV)/S_CN_RR_OTT_CTV)*S_CN_MC_OTT_CTV)+
            (((S_CN_Block_V_1*S_CN_BW_Geofencing)/S_CN_RR_Geofencing)*S_CN_MC_Geofencing)+
            (((S_CN_Block_V_1*S_CN_BW_Video)/S_CN_RR_Video)*S_CN_MC_Video)+
            (((S_CN_Block_V_1*S_CN_BW_Video_Geofencing)/S_CN_RR_Video_Geofencing)*S_CN_MC_Video_Geofencing)
        );

    return floorOrCeil(
        (((S_CN_Block_V_1*S_CN_BW_Display)/S_CN_RR_Display)*S_CN_MC_Display)+
        (((S_CN_Block_V_1*S_CN_BW_OTT_CTV)/S_CN_RR_OTT_CTV)*S_CN_MC_OTT_CTV)+
        (((S_CN_Block_V_1*S_CN_BW_Geofencing)/S_CN_RR_Geofencing)*S_CN_MC_Geofencing)+
        (((S_CN_Block_V_1*S_CN_BW_Video)/S_CN_RR_Video)*S_CN_MC_Video)+
        (((S_CN_Block_V_1*S_CN_BW_Video_Geofencing)/S_CN_RR_Video_Geofencing)*S_CN_MC_Video_Geofencing)
    );
}
function net_MC_row_2(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Block_V_2  = CN_Block_V_2.toString().replace(regex,'');

    var S_CN_BW_Display        = CN_BW_Display.toString().replace(regex,'') / 100;
    var S_CN_BW_Geofencing     = CN_BW_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_Video          = CN_BW_Video.toString().replace(regex,'') / 100;
    var S_CN_BW_Video_Geofencing     = CN_BW_Video_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_OTT_CTV              = CN_BW_OTT_CTV.toString().replace(regex,'') / 100;

    var S_CN_RR_Display = CN_RR_Display.toString().replace(regex,'');
    var S_CN_MC_Display = CN_MC_Display.toString().replace(regex,'');

    var S_CN_RR_OTT_CTV = CN_RR_OTT_CTV.toString().replace(regex,'');
    var S_CN_MC_OTT_CTV = CN_MC_OTT_CTV.toString().replace(regex,'');

    var S_CN_RR_Geofencing = CN_RR_Geofencing.toString().replace(regex,'');
    var S_CN_MC_Geofencing = CN_MC_Geofencing.toString().replace(regex,'');

    var S_CN_RR_Video = CN_RR_Video.toString().replace(regex,'');
    var S_CN_MC_Video = CN_MC_Video.toString().replace(regex,'');

    var S_CN_RR_Video_Geofencing = CN_RR_Video_Geofencing.toString().replace(regex,'');
    var S_CN_MC_Video_Geofencing = CN_MC_Video_Geofencing.toString().replace(regex,'');

    CN_Block_MC_2=floorOrCeil(
        (((S_CN_Block_V_2*S_CN_BW_Display)/S_CN_RR_Display)*S_CN_MC_Display)+
        (((S_CN_Block_V_2*S_CN_BW_OTT_CTV)/S_CN_RR_OTT_CTV)*S_CN_MC_OTT_CTV)+
        (((S_CN_Block_V_2*S_CN_BW_Geofencing)/S_CN_RR_Geofencing)*S_CN_MC_Geofencing)+
        (((S_CN_Block_V_2*S_CN_BW_Video)/S_CN_RR_Video)*S_CN_MC_Video)+
        (((S_CN_Block_V_2*S_CN_BW_Video_Geofencing)/S_CN_RR_Video_Geofencing)*S_CN_MC_Video_Geofencing)
    );

    return floorOrCeil(
        (((S_CN_Block_V_2*S_CN_BW_Display)/S_CN_RR_Display)*S_CN_MC_Display)+
        (((S_CN_Block_V_2*S_CN_BW_OTT_CTV)/S_CN_RR_OTT_CTV)*S_CN_MC_OTT_CTV)+
        (((S_CN_Block_V_2*S_CN_BW_Geofencing)/S_CN_RR_Geofencing)*S_CN_MC_Geofencing)+
        (((S_CN_Block_V_2*S_CN_BW_Video)/S_CN_RR_Video)*S_CN_MC_Video)+
        (((S_CN_Block_V_2*S_CN_BW_Video_Geofencing)/S_CN_RR_Video_Geofencing)*S_CN_MC_Video_Geofencing)
    );
}
function net_MC_row_3(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Block_V_3  = CN_Block_V_3.toString().replace(regex,'');

    var S_CN_BW_Display        = CN_BW_Display.toString().replace(regex,'') / 100;
    var S_CN_BW_Geofencing     = CN_BW_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_Video          = CN_BW_Video.toString().replace(regex,'') / 100;
    var S_CN_BW_Video_Geofencing     = CN_BW_Video_Geofencing.toString().replace(regex,'') / 100;
    var S_CN_BW_OTT_CTV              = CN_BW_OTT_CTV.toString().replace(regex,'') / 100;

    var S_CN_RR_Display = CN_RR_Display.toString().replace(regex,'');
    var S_CN_MC_Display = CN_MC_Display.toString().replace(regex,'');

    var S_CN_RR_OTT_CTV = CN_RR_OTT_CTV.toString().replace(regex,'');
    var S_CN_MC_OTT_CTV = CN_MC_OTT_CTV.toString().replace(regex,'');

    var S_CN_RR_Geofencing = CN_RR_Geofencing.toString().replace(regex,'');
    var S_CN_MC_Geofencing = CN_MC_Geofencing.toString().replace(regex,'');

    var S_CN_RR_Video = CN_RR_Video.toString().replace(regex,'');
    var S_CN_MC_Video = CN_MC_Video.toString().replace(regex,'');

    var S_CN_RR_Video_Geofencing = CN_RR_Video_Geofencing.toString().replace(regex,'');
    var S_CN_MC_Video_Geofencing = CN_MC_Video_Geofencing.toString().replace(regex,'');

    CN_Block_MC_3=floorOrCeil(
        (((S_CN_Block_V_3*S_CN_BW_Display)/S_CN_RR_Display)*S_CN_MC_Display)+
        (((S_CN_Block_V_3*S_CN_BW_OTT_CTV)/S_CN_RR_OTT_CTV)*S_CN_MC_OTT_CTV)+
        (((S_CN_Block_V_3*S_CN_BW_Geofencing)/S_CN_RR_Geofencing)*S_CN_MC_Geofencing)+
        (((S_CN_Block_V_3*S_CN_BW_Video)/S_CN_RR_Video)*S_CN_MC_Video)+
        (((S_CN_Block_V_3*S_CN_BW_Video_Geofencing)/S_CN_RR_Video_Geofencing)*S_CN_MC_Video_Geofencing)
    );

    return floorOrCeil(
        (((S_CN_Block_V_3*S_CN_BW_Display)/S_CN_RR_Display)*S_CN_MC_Display)+
        (((S_CN_Block_V_3*S_CN_BW_OTT_CTV)/S_CN_RR_OTT_CTV)*S_CN_MC_OTT_CTV)+
        (((S_CN_Block_V_3*S_CN_BW_Geofencing)/S_CN_RR_Geofencing)*S_CN_MC_Geofencing)+
        (((S_CN_Block_V_3*S_CN_BW_Video)/S_CN_RR_Video)*S_CN_MC_Video)+
        (((S_CN_Block_V_3*S_CN_BW_Video_Geofencing)/S_CN_RR_Video_Geofencing)*S_CN_MC_Video_Geofencing)
    );
}
function net_SNR_row_1(){

    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Block_MCMC_1   = CN_Block_MCMC_1.toString().replace(regex,'');
    var S_CN_Block_SC_1     = CN_Block_SC_1.toString().replace(regex,'');
    CN_SNR_1  = floorOrCeil(S_CN_Block_MCMC_1 - S_CN_Block_SC_1);
    return CN_SNR_1;
}
function net_SNR_row_2(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Block_MCMC_2   = CN_Block_MCMC_2.toString().replace(regex,'');
    var S_CN_Block_SC_2     = CN_Block_SC_2.toString().replace(regex,'');
    CN_SNR_2  = floorOrCeil(S_CN_Block_MCMC_2 - S_CN_Block_SC_2);
    return CN_SNR_2;
}
function net_SNR_row_3(){
    //var regex = /[$,%\s]/g;
    var regex = /[$,%\s]/g;
    var S_CN_Block_MCMC_3   = CN_Block_MCMC_3.toString().replace(regex,'');
    var S_CN_Block_SC_3     = CN_Block_SC_3.toString().replace(regex,'');
    CN_SNR_3  = floorOrCeil(S_CN_Block_MCMC_3 - S_CN_Block_SC_3);
    return CN_SNR_3;
}

$(document).ready(function () {
    var NET_MARGIN_elementMapping  = {
        CN_BW_Display: "CN_BW_Display",
        CN_BW_Geofencing : "CN_BW_Geofencing",
        CN_BW_Video:"CN_BW_Video",
        CN_BW_Video_Geofencing:"CN_BW_Video_Geofencing",
        CN_BW_OTT_CTV:"CN_BW_OTT_CTV",
        CN_RR_Display: "CN_RR_Display",
        CN_RR_Geofencing: "CN_RR_Geofencing",
        CN_RR_Video: "CN_RR_Video",
        CN_RR_Video_Geofencing: "CN_RR_Video_Geofencing",
        CN_RR_OTT_CTV: "CN_RR_OTT_CTV",
        CN_MC_Display:"CN_MC_Display",
        CN_MC_Geofencing:"CN_MC_Geofencing",
        CN_MC_Video:"CN_MC_Video",
        CN_MC_Video_Geofencing:"CN_MC_Video_Geofencing",
        CN_MC_OTT_CTV:"CN_MC_OTT_CTV",
        CN_Commission:"CN_Commission",

        CN_M_Display:"CN_M_Display",
        CN_M_Geofencing:"CN_M_Geofencing",
        CN_M_Video:"CN_M_Video",
        CN_M_Video_Geofencing:"CN_M_Video_Geofencing",
        CN_M_OTT_CTV:"CN_M_OTT_CTV"

    }
    var NET_ABSV_elementMapping={
        CN_Block_V_1: "CN_Block_V_1",
        CN_Block_V_2:"CN_Block_V_2",
        CN_Block_V_3:"CN_Block_V_3"
    }

    $("#CN_Block_MCMC_1").text("$" + net_MCMC_row_1().toFixed(2));
    $("#CN_Block_MCMC_2").text("$" + net_MCMC_row_2().toFixed(2));
    $("#CN_Block_MCMC_3").text("$" + net_MCMC_row_3().toFixed(2));
    $("#CN_Block_SC_1").text("$" + net_SC_row_1().toFixed(2));
    $("#CN_Block_SC_2").text("$" + net_SC_row_2().toFixed(2));
    $("#CN_Block_SC_3").text("$" + net_SC_row_3().toFixed(2));
    $("#CN_Block_MC_1").text("$" + net_MC_row_1().toFixed(2));
    $("#CN_Block_MC_2").text("$" + net_MC_row_2().toFixed(2));
    $("#CN_Block_MC_3").text("$" + net_MC_row_3().toFixed(2));
    $("#CN_SNR_1").text("$" + net_SNR_row_1().toFixed(2));
    $("#CN_SNR_2").text("$" + net_SNR_row_2().toFixed(2));
    $("#CN_SNR_3").text("$" + net_SNR_row_3().toFixed(2));

    function NET_MARGIN_updateVariables_keyup() {

        console.log("Current ID After KeyUp :" + $(this).attr("id"));
        var current_id = $(this).attr("id");

        for (var variable in NET_MARGIN_elementMapping) {
            // getting the matched value and updating the variable
            var elementID = NET_MARGIN_elementMapping[variable];
            window[variable] = $("#" + elementID).val();

            // console.log("==="+ $("#"+ elementID).attr("id"));    // printing current id

        }
        //console.log("Updated on keyup variables:", CN_RR_Display, CN_RR_Geofencing, CN_RR_Video, CN_RR_Video_Geofencing, CN_RR_OTT_CTV);
        //console.log("Updated on keyup variables:", CN_MC_Display, CN_MC_Geofencing, CN_MC_Video, CN_MC_Video_Geofencing, CN_MC_OTT_CTV);

        if(current_id == "CN_RR_Display" || current_id == "CN_MC_Display"){
// get NET - Display - Margin and Margin Percentage
            $("#CN_M_Display").val("$" + net_margin_display()+" ("+net_margin_display_p()+"%)");
        }
        if(current_id=="CN_RR_Geofencing" || current_id == "CN_MC_Geofencing"){
// get NET - Geofencing - Margin and Margin Percentage
            $("#CN_M_Geofencing").val("$" + net_margin_geofencing()+ " ("+net_margin_geofencing_p()+"%)");
        }
        if(current_id=="CN_RR_Video" || current_id == "CN_MC_Video"){
// get NET - Video - Margin and Margin Percentage
            $("#CN_M_Video").val("$" + net_margin_video()+ " ("+net_margin_video_p()+"%)");
        }
        if(current_id=="CN_RR_Video_Geofencing" || current_id == "CN_MC_Video_Geofencing"){
// get NET - Video Geofencing - Margin and Margin Percentage
            $("#CN_M_Video_Geofencing").val("$" + net_margin_video_geofencing()+ " ("+net_margin_video_geofencing_p()+"%)");
        }
        if(current_id=="CN_RR_OTT_CTV" || current_id == "CN_MC_OTT_CTV"){
// get NET - Video Geofencing - Margin and Margin Percentage
            $("#CN_M_OTT_CTV").val("$" + net_margin_ott_ctv()+ " ("+net_margin_ott_ctv_p()+"%)");
        }

        /*
        for (let i = 0; i < 5; i++) {
            var result = Commission_Net_Margin(Net_Retail_Rate_Array, Net_Media_Cost_Array, i);
            console.log(`Result ${i + 1}:`, result);,
        }
        */
        if( current_id="CN_Commission" || current_id == "CN_BW_Display" || current_id == "CN_BW_Geofencing" ||
            current_id == "CN_BW_Video" || current_id == "CN_BW_Video_Geofencing" || current_id ==  "CN_BW_OTT_CTV"){
// get NET - Display - Margin and Margin Percentage
            //$("#CN_Block_MCMC_1").text("$" + net_MCMC_row_1().toFixed(2));
            $("#CN_Block_MCMC_1").text("$" + net_MCMC_row_1());
            $("#CN_Block_MC_1").text("$" + net_MC_row_1().toFixed(2));
            $("#CN_Block_SC_1").text("$" + net_SC_row_1().toFixed(2));
            $("#CN_SNR_1").text("$" + net_SNR_row_1().toFixed(2));

            $("#CN_Block_MCMC_2").text("$" + net_MCMC_row_2().toFixed(2));
            $("#CN_Block_MC_2").text("$" + net_MC_row_2().toFixed(2));
            $("#CN_Block_SC_2").text("$" + net_SC_row_2().toFixed(2));
            $("#CN_SNR_2").text("$" + net_SNR_row_2().toFixed(2));

            $("#CN_Block_MCMC_3").text("$" + net_MCMC_row_3().toFixed(2));
            $("#CN_Block_MC_3").text("$" + net_MC_row_3().toFixed(2));
            $("#CN_Block_SC_3").text("$" + net_SC_row_3().toFixed(2));
            $("#CN_SNR_3").text("$" + net_SNR_row_3().toFixed(2));
        }


    }
    function NET_MARGIN_updateVariables_blur() {

        console.log("Current ID after Blur :" + $(this).attr("id"));
        var current_id = $(this).attr("id");


        for (var variable in NET_MARGIN_elementMapping) {
            var elementID = NET_MARGIN_elementMapping[variable];
            window[variable] = $("#" + elementID).val();

            var inputValue = $("#" + elementID).val();
            var parsedValue = parseFloat(inputValue); // Parse the input value to a floating-point number
            if (!isNaN(parsedValue)) {

                if (keyword_net.includes(current_id))
                {
                    console.log("got a matched value");
                    $("#" + elementID).val(parsedValue.toFixed(2)+ "%");
                }else
                {
                    const regex = /[$,%\s]/g;

                    for (let i = 0; i < keyword_net.length; i++) {
                        const keyword = keyword_net[i];
                        const cleanedValue = $('#'+keyword).val().replace(regex, ''); // Apply the regex and remove any matches
                        $('#'+keyword).val(cleanedValue+'%');
                    }

                    $("#" + elementID).val("$" + parsedValue.toFixed(2)); // Add the dollar sign and format the number with 2 decimal places
                }

            }

        }
        //console.log("Updated on blur variables:", CN_RR_Display, CN_RR_Geofencing, CN_RR_Video, CN_RR_Video_Geofencing, CN_RR_OTT_CTV);
        //console.log("Updated on blur variables:", CN_MC_Display, CN_MC_Geofencing, CN_MC_Video, CN_MC_Video_Geofencing, CN_MC_OTT_CTV);

        // call dependent functions

        if(current_id == "CN_RR_Display" || current_id == "CN_MC_Display"){
// get NET - Display - Margin and Margin Percentage
            $("#CN_M_Display").val("$" + net_margin_display()+" ("+net_margin_display_p()+"%)");
        }
        if(current_id=="CN_RR_Geofencing" || current_id == "CN_MC_Geofencing"){
// get NET - Geofencing - Margin and Margin Percentage
            $("#CN_M_Geofencing").val("$" + net_margin_geofencing()+ " ("+net_margin_geofencing_p()+"%)");
        }
        if(current_id=="CN_RR_Video" || current_id == "CN_MC_Video"){
// get NET - Video - Margin and Margin Percentage
            $("#CN_M_Video").val("$" + net_margin_video()+ " ("+net_margin_video_p()+"%)");
        }
        if(current_id=="CN_RR_Video_Geofencing" || current_id == "CN_MC_Video_Geofencing"){
// get NET - Video Geofencing - Margin and Margin Percentage
            $("#CN_M_Video_Geofencing").val("$" + net_margin_video_geofencing()+ " ("+net_margin_video_geofencing_p()+"%)");
        }
        if(current_id=="CN_RR_OTT_CTV" || current_id == "CN_MC_OTT_CTV"){
// get NET - Video Geofencing - Margin and Margin Percentage
            $("#CN_M_OTT_CTV").val("$" + net_margin_ott_ctv()+ " ("+net_margin_ott_ctv_p()+"%)");
        }

    }
    function NET_ABSV_keyup() {

        console.log("Current ID After KeyUp :" + $(this).attr("id"));
        var current_id = $(this).attr("id");

        for (var variable in NET_ABSV_elementMapping) {
            // getting the matched value and updating the variable
            var elementID = NET_ABSV_elementMapping[variable];
            window[variable] = $("#" + elementID).val();

            // console.log("==="+ $("#"+ elementID).attr("id"));    // printing current id

        }
        //console.log("Updated on keyup variables:", CN_RR_Display, CN_RR_Geofencing, CN_RR_Video, CN_RR_Video_Geofencing, CN_RR_OTT_CTV);
        //console.log("Updated on keyup variables:", CN_MC_Display, CN_MC_Geofencing, CN_MC_Video, CN_MC_Video_Geofencing, CN_MC_OTT_CTV);

        if(current_id == "CN_Block_V_1"){
// get NET - Display - Margin and Margin Percentage
            //$("#CN_Block_MCMC_1").text("$" + net_MCMC_row_1().toFixed(2));
            $("#CN_Block_MCMC_1").text("$" + net_MCMC_row_1());
            $("#CN_Block_SC_1").text("$" + net_SC_row_1().toFixed(2));
            $("#CN_Block_MC_1").text("$" + net_MC_row_1().toFixed(2));
            $("#CN_SNR_1").text("$" + net_SNR_row_1().toFixed(2));
        }
        if(current_id=="CN_Block_V_2"){
// get NET - Geofencing - Margin and Margin Percentage
            $("#CN_Block_MCMC_2").text("$" + net_MCMC_row_2().toFixed(2));
            $("#CN_Block_SC_2").text("$" + net_SC_row_2().toFixed(2));
            $("#CN_Block_MC_2").text("$" + net_MC_row_2().toFixed(2));
            $("#CN_SNR_2").text("$" + net_SNR_row_2().toFixed(2));
        }
        if(current_id=="CN_Block_V_3"){
// get NET - Video - Margin and Margin Percentage
            $("#CN_Block_MCMC_3").text("$" + net_MCMC_row_3().toFixed(2));
            $("#CN_Block_SC_3").text("$" + net_SC_row_3().toFixed(2));
            $("#CN_Block_MC_3").text("$" + net_MC_row_3().toFixed(2));
            $("#CN_SNR_3").text("$" + net_SNR_row_3().toFixed(2));
        }

    }
    function NET_ABSV_blur() {

        console.log("Current ID after Blur :" + $(this).attr("id"));
        var current_id = $(this).attr("id");


        for (var variable in NET_ABSV_elementMapping) {
            var elementID = NET_ABSV_elementMapping[variable];
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

        if(current_id == "CN_Block_V_1"){
// get NET - Display - Margin and Margin Percentage
            $("#CN_Block_MCMC_1").text("$" + net_MCMC_row_1().toFixed(2));
            $("#CN_Block_SC_1").text("$" + net_SC_row_1().toFixed(2));
            $("#CN_Block_MC_1").text("$" + net_MC_row_1().toFixed(2));
            $("#CN_SNR_1").text("$" + net_SNR_row_1().toFixed(2));
        }
        if(current_id=="CN_Block_V_2"){
// get NET - Geofencing - Margin and Margin Percentage
            $("#CN_Block_MCMC_2").text("$" + net_MCMC_row_2().toFixed(2));
            $("#CN_Block_SC_2").text("$" + net_SC_row_2().toFixed(2));
            $("#CN_Block_MC_2").text("$" + net_MC_row_2().toFixed(2));
            $("#CN_SNR_2").text("$" + net_SNR_row_2().toFixed(2));
        }
        if(current_id=="CN_Block_V_3"){
// get NET - Video - Margin and Margin Percentage
            $("#CN_Block_MCMC_3").text("$" + net_MCMC_row_3().toFixed(2));
            $("#CN_Block_SC_3").text("$" + net_SC_row_3().toFixed(2));
            $("#CN_Block_MC_3").text("$" + net_MC_row_3().toFixed(2));
            $("#CN_SNR_3").text("$" + net_SNR_row_3().toFixed(2));
        }

    }


    for (var variable in NET_MARGIN_elementMapping)
    {
        var elementID = NET_MARGIN_elementMapping[variable];

        //$("#" + elementID).on("keyup blur", updateVariables);
        $("#" + elementID).on("keyup", NET_MARGIN_updateVariables_keyup);
        $("#" + elementID).on("blur", NET_MARGIN_updateVariables_blur);

    }
    for (var variable in NET_ABSV_elementMapping)
    {
        var elementID = NET_ABSV_elementMapping[variable];

        //$("#" + elementID).on("keyup blur", updateVariables);
        $("#" + elementID).on("keyup", NET_ABSV_keyup);
        $("#" + elementID).on("blur", NET_ABSV_blur);

    }



});
