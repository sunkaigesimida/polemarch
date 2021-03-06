/**
 * File with tests for hook views.
 */

import { guiTests } from './PmGUITests.js';

/**
 * Tests for views connected with Hook Model.
 */
tests.runner.module('guiViews[hook]', null, () => {
    let list_path = '/hook/';
    let instances_info = guiTests.getEmptyInstancesInfo();

    ///////////////////////////////////////////////////////////////////////////////////
    // Test for set of /hook/ views (list, page_new, page, page_edit)
    ///////////////////////////////////////////////////////////////////////////////////
    guiTests.testSetOfViews(
        list_path,
        instances_info,
        {
            new: [
                {
                    is_valid: false,
                    data: {},
                },
                {
                    is_valid: true,
                    data: {
                        type: { value: 'HTTP' },
                        recipients: {
                            value: spa.utils.randomString(6),
                        },
                    },
                },
            ],
            edit: [
                {
                    is_valid: false,
                    data: {
                        type: { value: 'SCRIPT' },
                    },
                },
                {
                    is_valid: true,
                    data: {
                        type: { value: 'HTTP' },
                        name: { value: spa.utils.randomString(6) },
                    },
                },
            ],
            page: {
                remove: true,
            },
        },
        true,
    );
});
