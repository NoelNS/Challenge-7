import inquirer from "inquirer"
import fs from "fs"
import path from "path"
const questions = [
    {
        type:"input", 
        name:"ProjectTitle",
        message:"please enter your project title"
    },
    {
        type:"input", 
        name:"descriptrion",
        message:"please enter your project description"
    },  
    {
        type:"input", 
        name:"InstallationInstructions",
        message:"please enter your project installation instructions"
    },
    {
        type:"input", 
        name:"UsageInformationtionInstructions",
        message:"please enter your project usage information"
    },
    {
        type:"input", 
        name:"ContributionGuidelines",
        message:"please enter your contribution guidelines"
    },  
    {
        type:"input", 
        name:"TestInstructions",
        message:"please enter your test instructions"
    },    

     {
        type:"list", 
        name:"license",
        message:"please choose a license for the application",
        choices:["MIT","APACHE 2.0","BSD 3", "NONE"]
    },    
    {
        type:"input", 
        name:"emailAdress",
        message:"please enter your eamil address",
        
    },    
    {
        type:"input", 
        name:"gitHub",
        message:"please enter your github",
        
    },    
]

async function createReadMe (readmeData){ 
    
   return fs.writeFileSync(path.join(process.cwd(),"README.md"),readmeData)
} 
    
 function generateREADME(usersAnswers){
    return `# Project Title

${usersAnswers.ProjectTitle}
## Description

${usersAnswers.description}

## Getting Started



### Installing

${usersAnswers.InstallationInstructions}

 ### Usage instructions       
${usersAnswers.UsageInformationtionInstructions}



## contribution guidelines

${usersAnswers.ContributionGuidelines}

## Testinstructions

${usersAnswers.TestInstructions}

ex. Dominique Pizzie  
ex. [@DomPizzie](https://twitter.com/dompizzie)

## license

${usersAnswers.license}

This project is licensed under the [NAME HERE] License - see the LICENSE.md file for details

## emailaddress

${usersAnswers.emailAddress}



## gitHub

${usersAnswers.gitHub}



`}
    


async function start (){ 
const userAnswers = await inquirer.prompt(questions) 
console.log (userAnswers, typeof userAnswers)
createReadMe(generateREADME(userAnswers))
}
start()