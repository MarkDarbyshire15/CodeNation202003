//FUNCTION: CREATE FOOTER TEXT
//const getPageFooterText = () => {
function getPageFooterText() {
    let yWritten = 2020
    let yCurrent = new Date().getFullYear();
    let strReturn = 'Written and maintained by Mark Darbyshire '
    if (yWritten == yCurrent) {
        return strReturn + yCurrent
    } else {
        return strReturn + yWritten + ' - ' + yCurrent
    }
}


//FUNCTION: EXPAND/COLLAPSE the following element sibling
//const addEventListener_BodyContentExpand = () => {
function addEventListener_BodyContentExpand() {
    let coll = document.getElementsByClassName("btnBodyContentCollapse");
    let i;
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("btnBodyContentExpand");
            //var content = this.nextElementSibling;
            let content = this.firstElementChild.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.display = "none";
                content.style.maxHeight = null;
            } else {
                content.style.display = "block";
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

//FUNCTION: CREATE MENU
//const getNavBar = (pageFileName) => {
function getNavBar(pageFileName) {

    let navHTML = "";

    navHTML += '<div class="fcNavBox fcNavBoxSpacer"></div>'

    //Nav item
    if (pageFileName == 'index.html') {
        navHTML += '<div class="fcNavBox fcNavBoxItem"><a class="Active" href="index.html" title="Index" target="_self">Index</a></div>'
    } else { navHTML += '<div class="fcNavBox fcNavBoxItem"><a href="index.html" title="Index" target="_self">Index</a></div>' }

    //Nav item
    if (pageFileName == 'unit01.html') {
        navHTML += '<div class="fcNavBox fcNavBoxItem"><a class="Active" href="unit01.html" title="Unit 1" target="_self">Unit 1</a></div>'
    } else { navHTML += '<div class="fcNavBox fcNavBoxItem"><a href="unit01.html" title="Unit 1" target="_self">Unit 1</a></div>' }

    //Nav item
    if (pageFileName == 'unit02.html') {
        navHTML += '<div class="fcNavBox fcNavBoxItem"><a class="Active" href="unit02.html" title="Unit 2" target="_self">Unit 2</a></div>'
    } else { navHTML += '<div class="fcNavBox fcNavBoxItem"><a href="unit02.html" title="Unit 2" target="_self">Unit 2</a></div>' }

    //Nav item
    if (pageFileName == 'about.html') {
        navHTML += '<div class="fcNavBox fcNavBoxItem"><a class="Active" href="about.html" title="About" target="_self">About</a></div>'
    } else { navHTML += '<div class="fcNavBox fcNavBoxItem"><a href="about.html" title="About" target="_self">About</a></div>' }

    return navHTML;
}


//FUNCTION: CREATE TOOL ITEMS INFO
function getTools() {

    let HTMLoutput = ''  //The output

    //add tool
    HTMLoutput += getToolItemHTML('JavaScript cheat sheet', 'images/browser.jpg', 'https://htmlcheatsheet.com/js/',
        'Examples of loops, variables, objects, data types, strings, events and more.')
    //add tool
    HTMLoutput += getToolItemHTML('CSS cheat sheet', 'images/browser.jpg', 'https://htmlcheatsheet.com/css/',
        'Common CSS styles for background, font-family, borders etc with generators and more.')
    //add tool
    HTMLoutput += getToolItemHTML('HTML cheat sheet', 'images/browser.jpg', 'https://htmlcheatsheet.com/',
        'Useful HTML examples and web developer tools, markup generators and more.')
    //add tool
    HTMLoutput += getToolItemHTML('Google Fonts', 'images/browser.jpg', 'https://fonts.google.com/',
        'A robust collection of open source designer web fonts by google.')
    //add tool
    HTMLoutput += getToolItemHTML('MDN web Docs', 'images/browser.jpg', 'https://developer.mozilla.org/en-US/',
        'HTML, CSS and JaveScript and more resources for developers, by developers.')
    //add tool
    HTMLoutput += getToolItemHTML('CodePen', 'images/browser.jpg', 'https://codepen.io/',
        'Build, test, and discover code online.')
    //add tool
    HTMLoutput += getToolItemHTML('VS Code', 'images/browser.jpg', 'https://code.visualstudio.com/',
        'Multi-platform open source code editing application by Microsoft.')
    //add tool
    HTMLoutput += getToolItemHTML('GitHub', 'images/browser.jpg', 'https://github.com/',
        'From open source to business, host and review code, manage projects, and build software alongside other developers.')
    //add tool
    HTMLoutput += getToolItemHTML('Slack', 'images/browser.jpg', 'https://slack.com/',
        'Global collaboration and information sharing in channels – organised spaces for everything related to a project, topic or team.')
    //add tool
    HTMLoutput += getToolItemHTML('Trello', 'images/browser.jpg', 'https://trello.com/',
        'Global collaboration and information sharing in boards - lists, and cards enable you to organize and prioritize.')

    return HTMLoutput //Return the HTML

}


function getToolItemHTML(txtTitle, txtImage, txtHref, txtDesc) {
    let HTMLitem = ''
    HTMLitem += '    <div class="fcToolsBoxItem">'
    HTMLitem += '        <a title="' + txtTitle + '" href="' + txtHref + '" target="_blank">'
    HTMLitem += '            <div class="fcToolsBoxItemTitle">' + txtTitle + '</div>'
    HTMLitem += '            <div class="fcToolsBoxItemLink">'
    HTMLitem += '                <img src="' + txtImage + '" alt="' + txtTitle + '" />'
    HTMLitem += '            </div>'
    HTMLitem += '            <div class="fcToolsBoxItemDesc">' + txtDesc + '</div>'
    HTMLitem += '        </a>'
    HTMLitem += '    </div>'
    return HTMLitem;
}




