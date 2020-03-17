//FUNCTION: CREATE TOOL ITEMS TABLE
function getTools() {

    let HTMLoutput = ''  //The output
    
    let itemsPerRowCount = 5                                   //Items in a row
    HTMLoutput += '<table class="tblToolTable" border="0">'  //Table Start


    HTMLoutput += '    <tr class="tblToolTableTR">'          //TR Start
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'JavaScript cheat sheet', 'images/browser.jpg', 'https://htmlcheatsheet.com/js/',
        'Examples of loops, variables, objects, data types, strings, events and more.')
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'CSS cheat sheet', 'images/browser.jpg', 'https://htmlcheatsheet.com/css/',
        'Common CSS styles for background, font-family, borders etc with generators and more.')
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'HTML cheat sheet', 'images/browser.jpg', 'https://htmlcheatsheet.com/',
        'Useful HTML examples and web developer tools, markup generators and more.')
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'Google Fonts', 'images/browser.jpg', 'https://fonts.google.com/',
        'A robust collection of open source designer web fonts by google.')
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'MDN web Docs', 'images/browser.jpg', 'https://developer.mozilla.org/en-US/',
        'HTML, CSS and JaveScript and more resources for developers, by developers.')
    HTMLoutput += '    </tr>'                                // TR Finish



    HTMLoutput += '    <tr class="tblToolTableTR">'          //TR Start
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'CodePen', 'images/browser.jpg', 'https://codepen.io/',
        'Build, test, and discover code online.')
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'VS Code', 'images/browser.jpg', 'https://code.visualstudio.com/',
        'Multi-platform open source code editing application by Microsoft.')
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'GitHub', 'images/browser.jpg', 'https://github.com/',
        'From open source to business, host and review code, manage projects, and build software alongside other developers.')
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'Slack', 'images/browser.jpg', 'https://slack.com/',
        'Global collaboration and information sharing in channels – organised spaces for everything related to a project, topic or team.')
    //add TD item
    HTMLoutput += getToolItemHTML(itemsPerRowCount, 'Trello', 'images/browser.jpg', 'https://trello.com/',
        'Global collaboration and information sharing in boards - lists, and cards enable you to organize and prioritize.')
    HTMLoutput += '    </tr>'                                // TR Finish



    HTMLoutput += '</table>'                                 //Table Finish
    return HTMLoutput //Return the HTML table

}

function getToolItemHTML(itemsCount, txtTitle, txtImage, txtHref, txtDesc) {
    let widthTD = 100 / itemsCount
    let HTMLitem = ''
    HTMLitem += '<td class="tblToolTableTD" width="' + widthTD + '%">'
    HTMLitem += '  <div class="divTool">'
    HTMLitem += '    <a href="' + txtHref + '" target="_blank" class="" title="' + txtTitle + '">'
    HTMLitem += '      <div class="divToolContent">'
    HTMLitem += '        <div class="divToolInner">'
    HTMLitem += '          <span class="divToolInfTitle">'   + txtTitle + '</span>'
    HTMLitem += '          <img class="divToolInfImg" src="' + txtImage + '" alt="' + txtTitle + '" />'
    HTMLitem += '          <span class="divToolInfText">'    + txtDesc  + '</span>'
    HTMLitem += '        </div>'
    HTMLitem += '      </div>'
    HTMLitem += '    </a>'
    HTMLitem += '  </div>'
    HTMLitem += '</td>'
    return HTMLitem
}

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

//FUNCTION: CREATE MENU
//const getNavBar = (pageFileName) => {
function getNavBar (pageFileName) { 

    let navHTML = "";

    //Nav item
    if (pageFileName == 'Index.html') { navHTML += "<a class='Active' title='Home'>Home</a>" }
    else { navHTML += "<a href='Index.html'  title='Home'    >Home</a>" }
    //Nav item
    if (pageFileName == 'Unit01.html') { navHTML += "<a class='Active' title='Unit 1 Outcome'>Unit 1 Outcome</a>" }
    else { navHTML += "<a                href='Unit01.html'  title='Unit 1 Outcome'   >Unit 1 Outcome</a>" }
    //Nav item
    if (pageFileName == 'Unit02.html') { navHTML += "<a class='Active' title='Unit 2 Outcome'>Unit 2 Outcome</a>" }
    else { navHTML += "<a                href='Unit02.html'  title='Unit 2 Outcome'   >Unit 2 Outcome</a>" }
    //Nav item
    if (pageFileName == 'About.html') { navHTML += "<a class='Active' title='About'>About</a>" }
    else { navHTML += "<a                href='About.html'  title='About'   >About</a>" }
    //Return the above navBar links
    return navHTML;
}

//FUNCTION: EXPAND/COLLAPSE the following element sibling
//const addEventListener_BodyContentExpand = () => {
function addEventListener_BodyContentExpand () {
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
