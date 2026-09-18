import * as core from "@actions/core";

const main = async () => {
    const response = core.getInput("validate_response")

    console.log(response)
}

main();