// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '') {
    return ` ![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
  };
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === 'GNUAGPLv3') {
    return ` License Website: https://www.gnu.org/licenses/agpl-3.0.en.html`;
  }
  if (license === 'GNUGPLv3') {
    return ` License Website: (https://www.gnu.org/licenses/gpl-3.0.en.html`;
  }
  if (license === 'GNULGPLv3') {
    return ` License Website: https://www.gnu.org/licenses/lgpl-3.0.en.html`;
  }
  if (license === 'MozillaPublicLicense2.0') {
    return ` License Website: https://www.mozilla.org/en-US/MPL/2.0/`;
  }
  if (license === 'ApacheLicense2.0') {
    return ` License Website: https://www.apache.org/licenses/LICENSE-2.0`;
  }
  if (license === 'MITLicense') {
    return ` License Website: https://opensource.org/licenses/MIT`;
  }
  if (license === 'BoostSoftwareLicense1.0') {
    return ` License Website: https://www.boost.org/LICENSE_1_0.txt`;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README

function generateMarkdown(data) {
return `# ${data.projectName}

${renderLicenseBadge(data.license)}

## Project Creator
${data.author}

## Table of Contents
1. [Project Description](#description)
2. [Installation Instructions](#install)
3. [Usage](#usage)
4. [How to Contribute](#contribute)
5. [How to Test the Project](#test)
6. [Questions](#questions)
7. [License Information](#license)

## Project Description
${data.description}

## Installation Instructions
${data.install}

## Usage
${data.usage}

## How to Contribute
${data.contribute}

## How to Test the Project
${data.test}

## Questions
Github Username: ${data.github}

Github Profile: www.github.com/${data.github}

Contact Email: ${data.email}

## License
${renderLicenseBadge(data.license)}   <br>

${renderLicenseLink(data.license)}

`;
};

module.exports = generateMarkdown; 


