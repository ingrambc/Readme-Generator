const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');


const writeFileAsync = util.promisify(fs.writeFile);

const licenseList = ['MIT', 'Apache2.0', 'GPLv3', 'BSD-3']

const promptUser = ()=>{
  return inquirer.prompt([
    {
      type: "input",
      name: "githubUser",
      message: "what is your Github user name"
    },{
      type: "input",
      name: "email",
      message: "what is your email address"
    },{
      type: "input",
      name: "projTitle",
      message: "what is your project's title"
    },{
      type: "input",
      name: "projDescription",
      message: "Describe your project"
    },{
      type: "input",
      name: "install",
      message: "what are the install instructions"
    },{
      type: "input",
      name: "usage",
      message: "explain the usage of the project"
    },{
      type: "list",
      name: "license",
      message: "what license do you want applied",
      choices: licenseList,
    },{
      type: "input",
      name: "contributions",
      message: "explain your contribution guildelines"
    },{
      type: "input",
      name: "tests",
      message: "explain the tests for the project"
    }
  ])
}

// function to initialize program
async function init(){
  try{
    const inputs = await promptUser();

    const readme = generateMarkdown(inputs);

    await writeFileAsync('generatedReadme.md', readme);

    console.log("readme successfully created")
    
  }catch(err){
    console.log(err);
  }
}

// function call to initialize program
init();