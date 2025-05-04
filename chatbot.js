
function getICDInfo(input) {
    const data = {
        "B20": {
            code: "B20",
            description: "HIV disease resulting in infectious and parasitic diseases",
            rule: "Use B20-B24 for HIV-related conditions",
            pmb: "Yes"
        },
        "B20.0": {
            code: "B20.0",
            description: "HIV disease resulting in mycobacterial infection",
            rule: "Code first B20.0, followed by A15-A19 to indicate type of TB",
            pmb: "Yes"
        },
        "A15": {
            code: "A15",
            description: "Respiratory tuberculosis, bacteriologically and histologically confirmed",
            rule: "If TB is HIV-related, sequence B20.0 first",
            pmb: "Yes"
        },
        "J18.9": {
            code: "J18.9",
            description: "Pneumonia, organism unspecified",
            rule: "Use J13-J17 if organism is known",
            pmb: "Yes"
        },
        "Z21": {
            code: "Z21",
            description: "Asymptomatic HIV infection status",
            rule: "Use when patient has HIV but no symptoms and TB is not HIV-related",
            pmb: "Yes"
        }
    };

    const response = data[input.toUpperCase()];
    if (response) {
        return `ICD Code: ${response.code}\nDescription: ${response.description}\nCoding Rule: ${response.rule}\nPMB Status: ${response.pmb}`;
    } else {
        return "Sorry, no information found for that code.";
    }
}
