function updatePlaceholder(input) {
    const placeholder = input.parentElement.querySelector(".placeholder");
    placeholder.style.visibility = input.value ? "hidden" : "visible";
}


function savePDF_SCMC()
{
    var node = document.getElementById('zone');

    let doc = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
        //format: [420,592],
        pagesplit: true
    });

    domtoimage.toJpeg(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            //document.body.appendChild(img);

            //doc.addImage(img,'JPEG', 10, 0, 185, 298);
            doc.addImage(img,'JPEG', 10, 0, 185,250);

            var node2 = document.getElementById('zone2');
            domtoimage.toJpeg(node2).then(function (dataUrl2) {
                var img2 = new Image();
                img2.src = dataUrl2;

                doc.addPage();
                doc.addImage(img2,'JPEG', 10, 0, 185, 250);

                    var node3 = document.getElementById('zone3');
                    domtoimage.toJpeg(node3).then(function (dataUrl3) {
                        var img3 = new Image();
                        img3.src = dataUrl3;

                        doc.addPage();
                        doc.addImage(img3, 'JPEG', 10, 0, 185, 120);

                        doc.save("ROI-MCSC.pdf");

                    });


            });

        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });
}

$(document).ready(function () {

    console.log('hellow!');

    var NET_TACTIC_ABSV_elementMapping={
        CNT_Block_V_1:"CNT_Block_V_1",
        CNT_Block_V_2:"CNT_Block_V_2",
        CNT_Block_V_3:"CNT_Block_V_3"
    }

    $("#CNT_Block_V_1").on({
        focus: function(){

            console.log("On Focus == CNT_Block_V_1");

        },
        keyup: function () {

            console.log("On Keyup == CNT_Block_V_1");



            for (var variable in NET_TACTIC_ABSV_elementMapping) {

                var elementID = NET_TACTIC_ABSV_elementMapping[variable];
                console.log(NET_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            $("#CNT_Block_MCMC_1").text("$" + tactic_net_MCMC_row_1().toFixed(2));
            $("#CNT_Block_SC_1").text("$"   + tactic_net_SC_row_1().toFixed(2));
            $("#CNT_Block_MC_1").text("$"   + tactic_net_MC_row_1().toFixed(2));
            $("#CNT_Block_SNR_1").text("$"  + tactic_net_SNR_row_1().toFixed(2));


        },
        blur: function () {

            for (var variable in NET_TACTIC_ABSV_elementMapping) {

                var elementID = NET_TACTIC_ABSV_elementMapping[variable];
                console.log(NET_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            console.log("On Blur == CNT_Block_V_1");

            $("#CNT_Block_MCMC_1").text("$" + tactic_net_MCMC_row_1().toFixed(2));
            $("#CNT_Block_SC_1").text("$"   + tactic_net_SC_row_1().toFixed(2));
            $("#CNT_Block_MC_1").text("$"   + tactic_net_MC_row_1().toFixed(2));
            $("#CNT_Block_SNR_1").text("$"  + tactic_net_SNR_row_1().toFixed(2));

        }
    });
    $("#CNT_Block_V_2").on({
        focus: function(){

            console.log("On Focus == CNT_Block_V_2");

        },
        keyup: function () {

            console.log("On Keyup == CNT_Block_V_2");

            for (var variable in NET_TACTIC_ABSV_elementMapping) {

                var elementID = NET_TACTIC_ABSV_elementMapping[variable];
                console.log(NET_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            $("#CNT_Block_MCMC_2").text("$" + tactic_net_MCMC_row_2().toFixed(2));
            $("#CNT_Block_SC_2").text("$"   + tactic_net_SC_row_2().toFixed(2));
            $("#CNT_Block_MC_2").text("$"   + tactic_net_MC_row_2().toFixed(2));
            $("#CNT_Block_SNR_2").text("$"  + tactic_net_SNR_row_2().toFixed(2));

        },
        blur: function () {

            console.log("On Blur == CNT_Block_V_2");


            for (var variable in NET_TACTIC_ABSV_elementMapping) {

                var elementID = NET_TACTIC_ABSV_elementMapping[variable];
                console.log(NET_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            $("#CNT_Block_MCMC_2").text("$" + tactic_net_MCMC_row_2().toFixed(2));
            $("#CNT_Block_SC_2").text("$"   + tactic_net_SC_row_2().toFixed(2));
            $("#CNT_Block_MC_2").text("$"   + tactic_net_MC_row_2().toFixed(2));
            $("#CNT_Block_SNR_2").text("$"  + tactic_net_SNR_row_2().toFixed(2));

        }
    });
    $("#CNT_Block_V_3").on({
        focus: function(){

            console.log("On Focus == CNT_Block_V_3");

        },
        keyup: function () {

            console.log("On Keyup == CNT_Block_V_3");


            for (var variable in NET_TACTIC_ABSV_elementMapping) {

                var elementID = NET_TACTIC_ABSV_elementMapping[variable];
                console.log(NET_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            $("#CNT_Block_MCMC_3").text("$" + tactic_net_MCMC_row_3().toFixed(2));
            $("#CNT_Block_SC_3").text("$"   + tactic_net_SC_row_3().toFixed(2));
            $("#CNT_Block_MC_3").text("$"   + tactic_net_MC_row_3().toFixed(2));
            $("#CNT_Block_SNR_3").text("$"  + tactic_net_SNR_row_3().toFixed(2));

        },
        blur: function () {

            console.log("On Blur == CNT_Block_V_3");


            for (var variable in NET_TACTIC_ABSV_elementMapping) {

                var elementID = NET_TACTIC_ABSV_elementMapping[variable];
                console.log(NET_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            $("#CNT_Block_MCMC_3").text("$" + tactic_net_MCMC_row_3().toFixed(2));
            $("#CNT_Block_SC_3").text("$"   + tactic_net_SC_row_3().toFixed(2));
            $("#CNT_Block_MC_3").text("$"   + tactic_net_MC_row_3().toFixed(2));
            $("#CNT_Block_SNR_3").text("$"  + tactic_net_SNR_row_3().toFixed(2));

        }
    });

    var GROSS_TACTIC_ABSV_elementMapping={
        CGT_Block_V_1: "CGT_Block_V_1",
        CGT_Block_V_2: "CGT_Block_V_2",
        CGT_Block_V_3: "CGT_Block_V_3"
    }

    $("#CGT_Block_V_1").on({
        focus: function(){

            console.log("On Focus == CNT_Block_V_1");

        },
        keyup: function () {

            console.log("On Keyup == CNT_Block_V_1");



            for (var variable in GROSS_TACTIC_ABSV_elementMapping) {

                var elementID = GROSS_TACTIC_ABSV_elementMapping[variable];
                console.log(GROSS_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            $("#CGT_Block_MCMC_1").text("$" + tactic_gross_MCMC_row_1().toFixed(2));
            $("#CGT_Block_SC_1").text("$"   + tactic_gross_SC_row_1().toFixed(2));
            $("#CGT_Block_MC_1").text("$"   + tactic_gross_MC_row_1().toFixed(2));
            $("#CGT_Block_SNR_1").text("$"  + tactic_gross_SNR_row_1().toFixed(2));


        },
        blur: function () {

            for (var variable in GROSS_TACTIC_ABSV_elementMapping) {

                var elementID = GROSS_TACTIC_ABSV_elementMapping[variable];
                console.log(GROSS_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            console.log("On Blur == CNT_Block_V_1");

            $("#CGT_Block_MCMC_1").text("$" + tactic_gross_MCMC_row_1().toFixed(2));
            $("#CGT_Block_SC_1").text("$"   + tactic_gross_SC_row_1().toFixed(2));
            $("#CGT_Block_MC_1").text("$"   + tactic_gross_MC_row_1().toFixed(2));
            $("#CGT_Block_SNR_1").text("$"  + tactic_gross_SNR_row_1().toFixed(2));

        }
    });
    $("#CGT_Block_V_2").on({
        focus: function(){

            console.log("On Focus == CNT_Block_V_1");

        },
        keyup: function () {

            console.log("On Keyup == CNT_Block_V_2");



            for (var variable in GROSS_TACTIC_ABSV_elementMapping) {

                var elementID = GROSS_TACTIC_ABSV_elementMapping[variable];
                console.log(GROSS_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            $("#CGT_Block_MCMC_2").text("$" + tactic_gross_MCMC_row_2().toFixed(2));
            $("#CGT_Block_SC_2").text("$"   + tactic_gross_SC_row_2().toFixed(2));
            $("#CGT_Block_MC_2").text("$"   + tactic_gross_MC_row_2().toFixed(2));
            $("#CGT_Block_SNR_2").text("$"  + tactic_gross_SNR_row_2().toFixed(2));


        },
        blur: function () {

            for (var variable in GROSS_TACTIC_ABSV_elementMapping) {

                var elementID = GROSS_TACTIC_ABSV_elementMapping[variable];
                console.log(GROSS_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            console.log("On Blur == CNT_Block_V_2");

            $("#CGT_Block_MCMC_2").text("$" + tactic_gross_MCMC_row_2().toFixed(2));
            $("#CGT_Block_SC_2").text("$"   + tactic_gross_SC_row_2().toFixed(2));
            $("#CGT_Block_MC_2").text("$"   + tactic_gross_MC_row_2().toFixed(2));
            $("#CGT_Block_SNR_2").text("$"  + tactic_gross_SNR_row_2().toFixed(2));

        }
    });
    $("#CGT_Block_V_3").on({
        focus: function(){

            console.log("On Focus == CNT_Block_V_3");

        },
        keyup: function () {

            console.log("On Keyup == CNT_Block_V_3");



            for (var variable in GROSS_TACTIC_ABSV_elementMapping) {

                var elementID = GROSS_TACTIC_ABSV_elementMapping[variable];
                console.log(GROSS_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            $("#CGT_Block_MCMC_3").text("$" + tactic_gross_MCMC_row_3().toFixed(2));
            $("#CGT_Block_SC_3").text("$"   + tactic_gross_SC_row_3().toFixed(2));
            $("#CGT_Block_MC_3").text("$"   + tactic_gross_MC_row_3().toFixed(2));
            $("#CGT_Block_SNR_3").text("$"  + tactic_gross_SNR_row_3().toFixed(2));


        },
        blur: function () {

            for (var variable in GROSS_TACTIC_ABSV_elementMapping) {

                var elementID = GROSS_TACTIC_ABSV_elementMapping[variable];
                console.log(GROSS_TACTIC_ABSV_elementMapping[variable]);
                window[variable] = $("#" + elementID).val();

                console.log(window[variable]);


            }

            console.log("On Blur == CNT_Block_V_3");

            $("#CGT_Block_MCMC_3").text("$" + tactic_gross_MCMC_row_3().toFixed(2));
            $("#CGT_Block_SC_3").text("$"   + tactic_gross_SC_row_3().toFixed(2));
            $("#CGT_Block_MC_3").text("$"   + tactic_gross_MC_row_3().toFixed(2));
            $("#CGT_Block_SNR_3").text("$"  + tactic_gross_SNR_row_3().toFixed(2));

        }
    });

    const inputIDs = [
        "CN_BW_Display",
        "CN_BW_Geofencing",
        "CN_BW_Video",
        "CN_BW_Video_Geofencing",
        "CN_BW_OTT_CTV",
        "CN_Commission",
        "CN_RR_Display",
        "CN_RR_Geofencing",
        "CN_RR_Video",
        "CN_RR_Video_Geofencing",
        "CN_RR_OTT_CTV",
        "CN_MC_Display",
        "CN_MC_Geofencing",
        "CN_MC_Video",
        "CN_MC_Video_Geofencing",
        "CN_MC_OTT_CTV",
        "CN_M_Display",
        "CN_M_Geofencing",
        "CN_M_Video",
        "CN_M_Video_Geofencing",
        "CN_M_OTT_CTV",
        "CG_BW_Display",
        "CG_BW_Geofencing",
        "CG_BW_Video",
        "CG_BW_Video_Geofencing",
        "CG_BW_OTT_CTV",
        "CG_RR_Display",
        "CG_RR_Geofencing",
        "CG_RR_Video",
        "CG_RR_Video_Geofencing",
        "CG_RR_OTT_CTV",
        "CG_MC_Display",
        "CG_MC_Geofencing",
        "CG_MC_Video",
        "CG_MC_Video_Geofencing",
        "CG_MC_OTT_CTV",
        "CG_Commission",
        "CG_M_Display",
        "CG_M_Geofencing",
        "CG_M_Video",
        "CG_M_Video_Geofencing",
        "CG_M_OTT_CTV",
        "CNT_BW_Display",
        "CNT_BW_Geofencing",
        "CNT_BW_Video",
        "CNT_BW_Video_Geofencing",
        "CNT_BW_OTT_CTV",
        "CNT_RR_Display",
        "CNT_RR_Geofencing",
        "CNT_RR_Video",
        "CNT_RR_Video_Geofencing",
        "CNT_RR_OTT_CTV",
        "CNT_MC_Display",
        "CNT_MC_Geofencing",
        "CNT_MC_Video",
        "CNT_MC_Video_Geofencing",
        "CNT_MC_OTT_CTV",
        "CNT_Commission_D",
        "CNT_Commission_G",
        "CNT_Commission_V",
        "CNT_Commission_VG",
        "CNT_Commission_OC",
        "CGT_BW_Display",
        "CGT_BW_Geofencing",
        "CGT_BW_Video",
        "CGT_BW_Video_Geofencing",
        "CGT_BW_OTT_CTV",
        "CGT_RR_Display",
        "CGT_RR_Geofencing",
        "CGT_RR_Video",
        "CGT_RR_Video_Geofencing",
        "CGT_RR_OTT_CTV",
        "CGT_MC_Display",
        "CGT_MC_Geofencing",
        "CGT_MC_Video",
        "CGT_MC_Video_Geofencing",
        "CGT_MC_OTT_CTV",
        "CGT_Commission_D",
        "CGT_Commission_G",
        "CGT_Commission_V",
        "CGT_Commission_VG",
        "CGT_Commission_OC",
        "CGT_M_OTT_CTV",
        "CGT_M_Display",
        "CGT_M_Geofencing",
        "CGT_M_Video",
        "CGT_M_Video_Geofencing"
    ];


    $.each(inputIDs, function(index, id) {
        $('#' + id).keyup();
    });
/*
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



    $("#CG_Block_MCMC_1").text("$" + gross_MCMC_row_1().toFixed(2));
    $("#CG_Block_SC_1").text("$" + gross_SC_row_1().toFixed(2));
    $("#CG_Block_MC_1").text("$" + gross_MC_row_1().toFixed(2));
    $("#CG_Block_SNR_1").text("$" + gross_SNR_row_1().toFixed(2));

    $("#CG_Block_MCMC_2").text("$" + gross_MCMC_row_2().toFixed(2));
    $("#CG_Block_SC_2").text("$" + gross_SC_row_2().toFixed(2));
    $("#CG_Block_MC_2").text("$" + gross_MC_row_2().toFixed(2));
    $("#CG_Block_SNR_2").text("$" + gross_SNR_row_2().toFixed(2));

    $("#CG_Block_MCMC_3").text("$" + gross_MCMC_row_3().toFixed(2));
    $("#CG_Block_SC_3").text("$" + gross_SC_row_3().toFixed(2));
    $("#CG_Block_MC_3").text("$" + gross_MC_row_3().toFixed(2));
    $("#CG_Block_SNR_3").text("$" + gross_SNR_row_3().toFixed(2));



    $("#CGT_Block_MCMC_1").text("$" + tactic_gross_MCMC_row_1().toFixed(2));
    $("#CGT_Block_SC_1").text("$"   + tactic_gross_SC_row_1().toFixed(2));
    $("#CGT_Block_MC_1").text("$"   + tactic_gross_MC_row_1().toFixed(2));
    $("#CGT_Block_SNR_1").text("$"  + tactic_gross_SNR_row_1().toFixed(2));

    $("#CGT_Block_MCMC_2").text("$" + tactic_gross_MCMC_row_2().toFixed(2));
    $("#CGT_Block_SC_2").text("$"   + tactic_gross_SC_row_2().toFixed(2));
    $("#CGT_Block_MC_2").text("$"   + tactic_gross_MC_row_2().toFixed(2));
    $("#CGT_Block_SNR_2").text("$"  + tactic_gross_SNR_row_2().toFixed(2));


    $("#CGT_Block_MCMC_3").text("$" + tactic_gross_MCMC_row_3().toFixed(2));
    $("#CGT_Block_SC_3").text("$"   + tactic_gross_SC_row_3().toFixed(2));
    $("#CGT_Block_MC_3").text("$"   + tactic_gross_MC_row_3().toFixed(2));
    $("#CGT_Block_SNR_3").text("$"  + tactic_gross_SNR_row_3().toFixed(2));
*/
});
