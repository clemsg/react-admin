import React from 'react';
import PropTypes from 'prop-types';

const UrlField = ({ record = {}, source }) => 
    <a href={`http ${record[source]}`}>
        {record[source]}
    </a>;

UrlField.PropTypes = {
    record: PropTypes.object,
    source: PropTypes.string.isRequired
};

export default UrlField;