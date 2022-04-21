// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(data)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License
${data.license}
${renderLicenseBadge(license)}

## Description 
${data.description}

## Usage 
${data.usage}

## Contribution
${data.contribution}

## Installation
${data.installation}

## Test Instructions
${data.test}

## GitHub and Email adress
${data.userName}  
[${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
