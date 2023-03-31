'use strict'

let isLocal = false
if (window.location.href.includes("127.0.0.1")) {
    console.log(window.location.href)
    isLocal = true
}

function readlocally() {
    const profileList = []
    $.ajax({
        url: "profiles/",
        async: false,
        success: function (data) {
            // Find all links to YAML files and write them to a list
            var yamlFiles = $(data).find("a[href$='.yaml']");
            yamlFiles.each(function () {
                profileList.push($(this).text().split('.yaml')[0] + ".yaml")
            })
        }
    })
    return profileList
}

$(document).ready(function () {



    // Make an AJAX request to get the contents of the "profiles.yaml" file
    $.ajax({
        //url: window.location.href + "profiles.txt",
        url: "profiles.txt",
        type: 'GET',
        dataType: 'text',
        success: function (data) {

            // Split the returned data into an array of file names
            let yaml_files = data.split('\n')
            if (isLocal) {
                yaml_files = readlocally()
            }

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
