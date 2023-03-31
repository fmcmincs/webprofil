'use strict'

$(document).ready(function () {

    //console.log(window.location.href + "profiles.yaml");

    // Make an AJAX request to get the contents of the "profiles.yaml" file
    $.ajax({
        //url: window.location.href + "profiles.txt",
        url: "profiles.txt",
        type: 'GET',
        dataType: 'text',
        success: function (data) {

            //console.log(data)
            // Split the returned data into an array of file names
            const yaml_files = data.split('\n')

            // Loop through the file names and create buttons for each one
            const container = $("#links-container")

            for (const yaml_file of yaml_files) {
                const filename = yaml_file.trim()
                if (filename !== '') {
                    const button = $("<button>").text(filename.replace(/\.yaml$/, ""))
                    button.on("click", function () {
                        window.location.href = "profile.html?file=" + encodeURIComponent(filename)
                    })
                    container.append($("<li>").append(button))
                }
            }
        }
    })


    //take care of uploading
    $('#upload-button').click(function () {
        $('#file-input').click();
    });
})
