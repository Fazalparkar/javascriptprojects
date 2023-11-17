// chrome://extensions/
// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button

// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field
//let myLeads = `["www.awesome.com"]`
// 1. Turn the myLeads string into an array
//myLeads = JSON.parse(myLeads)
// 2. Push a new value to the array
//myLeads.push("www.lead2.com")
// 3. Turn the array into a string again
//myLeads =   JSON.stringify(myLeads)
// 4. Console.log the string using typeof to verify that it's a string
//console.log(typeof myLeads)
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
// 2. Grab the unordered list and store it in a const variable called ulEl
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById("tab-btn")

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
const tabs = [
    {url: "https://www.linkedin.com/in/fazalparkar/?originalSubdomain=in"}
]

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
    // Grab the URL of the current tab!
    //chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {

        // since only one tab should be active and in the current window at once
        // the return variable should only have one entry
        //let activeTab = tabs[0];
        //let activeTabId = activeTab.id; // or do whatever you need
   
    //});

    //console.log(tabs[0].url)
    
})
// 1. Create a variable, listItems, to hold all the HTML for the list items  
// Assign it to an empty string to begin with
// 1. Wrap the code below in a renderLeads() function
function render(leads) {
    let listItems = ""

// Log out the items in the myLeads array using a for loop 
    for (let i = 0; i < leads.length; i++) {
 // alternate way is instead of using innerHTML use of .createElement() .append()
        // create element
        // set text content
        // append to ul
        //const li = document.createElement("li")
        //li.textContent = myLeads[i]
        //ulEl.append(li)
        //listItems +=  "<li><a target = '_blank' href='"+ myLeads[i] +"'>" + myLeads[i] + "</a></li>"
        // template strings method given below
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
// better way is to replace textContent to innerHTML so you can use HTML in j.s
    ulEl.innerHTML = listItems  
}


// to delete
deleteBtn.addEventListener("dblclick", function() {
    
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


//localStorage.setItem("myName", "Fazal Parkar")
//let name = localStorage.getItem("myName")
//console.log(name)
//localStorage.clear()

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    // Clear out the input field
    inputEl.value = ""
    // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    // 2. Call the renderLeads() function
    render(myLeads)
    // To verify that it works:
    console.log( localStorage.getItem("myLeads") )
})
