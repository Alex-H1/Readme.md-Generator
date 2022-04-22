// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
 
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
  ## Description 
  ${data.description}
  
## table of contents
1.[license](#License)
2.[usage](#Usage)
3.[contribution](#Contribution)
4.[installation](#Installation)
5.[test](#Test Instructions)
6.[userName](#GitHub and Email Address)

## License
${data.license}

## Usage 
${data.usage}

## Contribution
${data.contribution}

## Installation
${data.installation}

## Test Instructions
${data.test}

## GitHub and Email Address
${data.userName}  
[${data.email}](${data.email})
`;
}

module.exports = generateMarkdown, renderLicenseLink, renderLicenseSection, renderLicenseBadge;
