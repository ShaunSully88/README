// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!licenseName === '') {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
  };
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (licenseName === 'GNU AGPLv3') {
    return `![GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/)`;
  }
  if (licenseName === 'GNU GPLv3') {
    return `![GNU General Public License v3.0](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  if (licenseName === 'GNU LGPLv3') {
    return `![GNU Lesser General Public License v3.0](https://choosealicense.com/licenses/lgpl-3.0/)`;
  }
  if (licenseName === 'Mozilla Public License 2.0') {
    return `![Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)`;
  }
  if (licenseName === 'Apache License 2.0') {
    return `![Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)`;
  }
  if (licenseName === 'MIT License') {
    return `![MIT License](https://choosealicense.com/licenses/mit/)`;
  }
  if (licenseName === 'Boost Software License 1.0') {
    return `![Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)`;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Project Title
  ${name}

  ## Project Creator
  ${author}

  ## Project Description
  ${description}

  ## Installation Instructions
  ${install}

  ## Usage
  ${usage}

  ## How to Contribute
  ${contribute}

  ## How to Test the Project
  ${test}

  ## License
  ${renderLicenseBadge(license)}

`;
}

module.exports = generateMarkdown;
