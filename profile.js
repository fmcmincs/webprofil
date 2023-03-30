'use strict'

function getParameterByName(name) {
    var url = window.location.href
    name = name.replace(/[\[\]]/g, '\\$&')
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)')
    var results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ''
    return decodeURIComponent(results[2].replace(/\+/g, ' '))
}




$(document).ready(function () {

    var yamlname = getParameterByName('file')
    if (yamlname) {
        console.log(yamlname)
    } else {
        console.error("ERROR: Could not find the file based on the URL's file value!")
    }

    /*
    $(window).on('beforeprint', function () {
        $('head').append(`<style>@page{size: 210mm ${$('body').height() + 4}px;}</style>`)
    })
    */


    $.get("profiles/" + yamlname, function (data) {

        const cv = jsyaml.load(data)

        if (!cv.portrait) {
            console.warn("Warning: Portrait Image not found!")
            $("#portrait-image").hide()
        } else {
            $("#portrait-image").attr('src', `${cv.portrait}`)
            $("head").append(
                //`<link rel="icon" type="image/x-icon" href="${cv.portrait}">`
                `<link rel="icon" type="image/x-icon" href="icons/icon-fairmar.png">`
            )
        }




        if (!cv.name) {
            console.warn("Warning: Name not found!")
            $("#consultant-name").hide()
        } else {
            $("#consultant-name").text(cv.name)
            $('title').text(cv.name)
            let firstname = cv.name.split(' ')[0]
            if (firstname.endsWith('s') || firstname.endsWith('x') || firstname.endsWith('z')) {
                firstname += '’'
            } else {
                firstname += 's'
            }
            $("#firstname").text(firstname)
        }

        if (!cv.title) {
            console.warn("Warning: Title not found!")
            $("#consultant-title").hide()
        } else {
            $("#consultant-title").text(cv.title)
        }




        if (!cv.profile) {
            console.warn("Warning: Profile not found!")
            $("#profile").hide()
        } else {
            $("#profiletext").empty()
            cv.profile.forEach(function (item) {
                $("#profiletext").append(`<p>${item}</p>`)
                $("#profiletext").append('<br>')
            })
            if ($("#profiletext").children().last().is('br')) {
                $("#profiletext").children().last().remove()
            }
        }





        if (!cv.email) {
            console.warn("Warning: Email Address not found!")
            $("#email").hide()
        } else {
            $("#emailaddr").attr('href', `mailto:${cv.email}`)
            let emailtext = cv.email

            if (emailtext.length > 30) {
                emailtext = emailtext.replace("@", "\n@")
                $('#emailaddr').css("display", "inline-block")
                $('#emailaddr').css("white-space", "pre-wrap")
            }

            $("#emailaddr").text(emailtext)
        }


        if (!cv.tel) {
            console.warn("Warning: Telephone Number not found!")
            $("#tel").hide()
        } else {
            $("#telnum").attr('href', `tel:${cv.tel}`)
            $("#telnum").text(cv.tel)
        }

        if (!cv.location) {
            console.warn("Warning: Location not found!")
            $("#location").hide()
        } else {
            $("#locationplace").text(cv.location)
        }

        if (!cv.linkedin) {
            console.warn("Warning: LinkedIn Link not found!")
            $("#linkedin").hide()
        } else {
            $("#linkedin-link").attr('href', `https://www.linkedin.com${cv.linkedin}`)
            $("#linkedin-link").text(cv.linkedin)
        }





        if (!cv.skills) {
            console.warn("Warning: Skills not found!")
            $("#skills").hide()
        } else {
            $("#skills").children(':not(:first)').remove()
            cv.skills.forEach(function (item) {
                $('#skills').append(
                    `
                    <div class="leftcol-item">
                        <img src="icons/skillcircle-${item.level}.png" alt="Skill Level Icon" class="leftcol-item-icon">
                        <p class="leftcol-item-text">${item.name}</p>
                    </div>
                    `
                )
            })
        }


        if (!cv.languages) {
            console.warn("Warning: Languages not found!")
            $("#languages").hide()
        } else {
            $("#languages").children(':not(:first)').remove()
            cv.languages.forEach(function (item) {
                $("#languages").append(
                    `
                    <div class="leftcol-item">
                        <img src="icons/skillcircle-${item.level}.png" alt="Skill Level Icon" class="leftcol-item-icon">
                        <p class="leftcol-item-text">${item.name}</p>
                    </div>
                    `
                )
            })
        }


        if (!cv.certificates) {
            console.warn("Warning: Certificates not found!")
            $('#certificates').hide()
        } else {
            $('#certificates').children(':not(:first)').remove()
            cv.certificates.forEach(function (item) {
                $('#certificates').append(
                    `
                    <div class="leftcol-item leftcol-cert-item">
                        <img src="${item.badge}" alt="${item.name} Badge" class="leftcol-item-badge">
                        <p class="leftcol-item-text">${item.name}</p>
                    </div>
                    `
                )
            })
        }



        if (!cv.projects) {
            console.warn("Warning: Projects not found!")
            $("#projects").hide()
        } else {
            $("#projects").children(':not(:first)').remove()
            cv.projects.forEach(function (item) {
                let div_rightcol_item = $('<div>').addClass('rightcol-item')

                let div_rightcol_item_decoration = $('<div>').addClass('rightcol-item-decoration').append(
                    `
                    <img src="${item.logo ? item.logo : 'icons/logo-placeholder.png'}" 
                    alt="Circle" class="rightcol-item-decoration-logo">
                    `
                )

                div_rightcol_item.append(div_rightcol_item_decoration)

                let div_rightcol_item_text = $("<div>").addClass('rightcol-item-text')

                let div_rightcol_item_text_title = $("<div>").addClass("rightcol-item-text-title")
                if (!item.name) {
                    console.warn("Warning: Name of current project not found!")
                } else {
                    div_rightcol_item_text_title.append(
                        `<h4>${item.name}</h4>`
                    )
                }
                if (!item.location) {
                    console.warn(`Warning: Location of project '${item.name}' not found!`)
                } else {
                    div_rightcol_item_text_title.append(
                        `<p>, ${item.location}</p>`
                    )
                }
                div_rightcol_item_text.append(div_rightcol_item_text_title)

                if (!item.title) {
                    console.warn(`Warning: Title of project '${item.title}' not found`)
                } else {
                    div_rightcol_item_text.append(
                        `<p class="rightcol-item-subtitle">${item.title}</p>`
                    )
                }
                if (!item.begin || !item.end) {
                    console.warn(`Warning: Start-Date or End-Date of project '${item.title}' not found`)
                } else {
                    div_rightcol_item_text.append(
                        `<p class="rightcol-item-daterange">${item.begin} - ${item.end}</p>`
                    )
                }

                if (!item.highlights) {
                    console.warn(`Warning: Highlights of project '${item.name}' not found!`)
                } else {
                    let ul_rightcol_item_list = $("<ul>").addClass('rightcol-item-list')
                    item.highlights.forEach(function (i) {
                        ul_rightcol_item_list.append(
                            `<li>${i}</li>`
                        )
                    })
                    div_rightcol_item_text.append(ul_rightcol_item_list)
                }

                div_rightcol_item.append(div_rightcol_item_text)
                $("#projects").append(div_rightcol_item)
            })
        }


        if (!cv.education) {
            console.warn("Warning: Education not found!")
            $("#education").hide()
        } else {
            $("#education").children(':not(:first)').remove()
            cv.education.forEach(function (item) {
                let div_rightcol_item = $('<div>').addClass('rightcol-item')

                let div_rightcol_item_decoration = $('<div>').addClass('rightcol-item-decoration').append(
                    `
                    <img src="${item.logo ? item.logo : 'icons/logo-placeholder.png'}" 
                    alt="Circle" class="rightcol-item-decoration-logo">
                    `
                )

                div_rightcol_item.append(div_rightcol_item_decoration)


                let div_rightcol_item_text = $("<div>").addClass('rightcol-item-text')
                if (!item.name) {
                    console.warn("Warning: Name of current education item not found!")
                } else {
                    div_rightcol_item_text.append(
                        `
                        <div class="rightcol-item-text-title">
                            <h4>${item.name}</h4>
                        </div>
                        `
                    )
                }
                if (!item.degree) {
                    console.warn(`Warning: Degree of education item '${item.name}' not found!`)
                } else {
                    div_rightcol_item_text.append(
                        `<p class="rightcol-item-subtitle">${item.degree}</p>`
                    )
                }
                if (!item.begin || !item.end) {
                    console.warn(`Warning: Start-Date or End-Date of education item '${item.name}' not found!`)
                } else {
                    div_rightcol_item_text.append(
                        `<p class="rightcol-item-daterange">${item.begin} - ${item.end}</p>`
                    )
                }

                if (!item.highlights) {
                    console.warn(`Warning: Highlights of education item '${item.name}' not found!`)
                } else {
                    let ul_rightcol_item_list = $("<ul>").addClass('rightcol-item-list')
                    item.highlights.forEach(function (i) {
                        ul_rightcol_item_list.append(
                            `<li>${i}</li>`
                        )
                    })
                    div_rightcol_item_text.append(ul_rightcol_item_list)
                }

                div_rightcol_item.append(div_rightcol_item_text)
                $("#education").append(div_rightcol_item)
            })
        }

    })



    /*
        $.ajax({
            url: 'input/',
            success: function (data) {
                $(data).find("a:contains(.yaml)").each(function () {
                    const filename = $(this).attr("href")
                    if (filename.indexOf(".yaml") !== -1) {
                        //$.get(filename, function (data) {
    
                        //put the above ajax block inside here and use this $.get(...) 
                        //to go inside the input folder and display the first found .yaml file
    
                        return false // stop the loop after finding the first file
                    }
                })
            }
        })
    */


})
