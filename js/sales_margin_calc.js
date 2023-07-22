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

});
