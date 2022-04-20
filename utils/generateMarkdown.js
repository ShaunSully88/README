// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!licenseName) {
    return '';
  }
  if (licenseName === 'MIT') {
    licenseName = 'MIT';
  }
  if (licenseName === 'GNU') {
    licenseName = 'GNU';
  }
  if (licenseName === 'Mozilla') {
    licenseName = 'Mozilla';
  }
  if (licenseName === 'Unlicense') {
    licenseName = 'The Unlicense';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Project Title
  ${title}

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
