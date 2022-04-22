
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
  ${data.description}
  
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})

## table of contents
*[license](#License)
*[usage](#Usage)
*[contribution](#Contribution)
*[installation](#Installation)
*[test](#Test)
*[userName](#GitHub)

## License
${data.license}

## Usage 
${data.usage}

## Contribution
${data.contribution}

## Installation
${data.installation}

## Test-Instructions
${data.test}

## GitHub-and-Email-Address
${data.userName}  
${data.email}
`;
}

module.exports = generateMarkdown;
