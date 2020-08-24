// function to generate markdown for README
function generateMarkdown(inputs) {
  return `
  # ${inputs.projTitle}
  ${inputs.projDescription}
  
  ${getLicense(inputs.license)}
  ---
  ## Table of contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ---
  ## Installation
  ${inputs.install}

  ---
  ## Usage
  ${inputs.usage}

  ---
  ## License
  This project is under ${inputs.license}, to read the license, click the link below

  ${getLicense(inputs.license)}

  ---
  ## Contributing
  ${inputs.contributions}

  ---
  ## Tests
  ${inputs.tests}

  ---
  ### Questions
  [Github profile](https://github.com/${inputs.githubUser})
  to submit issues or ask question, use the issues in the github repo at [https://github.com/${githubUser}/${projTitle}/issues](https://github.com/${githubUser}/${projTitle}/issues)
  `;
}

function getLicense(license) {
  switch(license){
    case 'MIT': 
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPLv3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD-3':
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
    case 'default':
      return 'no licence selected';
  }
}

module.exports = generateMarkdown;