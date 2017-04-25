// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {FormattedMessage} from 'react-intl';
import * as Utils from 'utils/utils.jsx';

import React from 'react';

export default function SettingItemMin(props) {
    let editButton = null;
    if (!props.disableOpen) {
        editButton = (
            <li className='col-xs-12 col-sm-3 section-edit'>
                <a
                    id={Utils.createSafeId(props.title) + 'Edit'}
                    className='theme'
                    href='#'
                    onClick={props.updateSection}
                >
                    <i className='fa fa-pencil'/>
                    <FormattedMessage
                        id='setting_item_min.edit'
                        defaultMessage='Edit'
                    />
                </a>
            </li>
        );
    }

    return (
        <ul
            className='section-min'
            onClick={props.updateSection}
        >
            <li className='col-xs-12 col-sm-9 section-title'>{props.title}</li>
            {editButton}
            <li
                id={Utils.createSafeId(props.title) + 'Desc'}
                className='col-xs-12 section-describe'
            >
                {props.describe}
            </li>
        </ul>
    );
}

SettingItemMin.propTypes = {
    title: React.PropTypes.node,
    disableOpen: React.PropTypes.bool,
    updateSection: React.PropTypes.func,
    describe: React.PropTypes.node
};
