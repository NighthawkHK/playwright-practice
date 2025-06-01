import {test} from "@playwright/test";

export const skipIfSafari = (reason = 'Not supported in Safari') => {
    test.skip(
        () => test.info().project.name.includes("safari"),
        reason,
    )
};