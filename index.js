'use strict'


$(document).ready(function () {

    // Make an AJAX request to get a list of YAML files in the "profile" directory
    $.ajax({
        url: "profiles/",
        dataType: 'html',
        success: function (data) {
            // Find all the links to YAML files in the returned HTML
            var links = $(data).find("a[href$='.yaml']")

            // Loop through the links and create buttons for each one
            var container = $("#links-container")
            links.each(function () {
                var linktext = $(this).text().split('.yaml')[0] + ".yaml"
                var button = $("<button>").text(linktext)
                button.on("click", function () {

                    var link = "profile.html?file=" + encodeURIComponent(linktext)
                    window.location.href = link

                })
                var listItem = $("<li>").append(button)
                container.append(listItem)
            })
        }
    })
})
